import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import type { Request, Response } from 'express';
import express from 'express';
import type { ReceiptMessageOut } from 'fuels';
import { ReceiptType, Provider, ReceiptCoder, arrayify } from 'fuels';
import { createPublicClient, http } from 'viem';
import { foundry } from 'viem/chains';

import { fuelTestEmail } from '../prisma/script';

import { FUEL_MESSAGE_PORTAL } from './contracts/FuelMessagePortal';
import { getGraphqlClient } from './utils/graphql';

dotenv.config();

const notificationServer = express();
const port = 3005;

const fuelProvider = new Provider(process.env.FUEL_PROVIDER_URL || '');

const ethPublicClient = createPublicClient({
  chain: foundry,
  transport: http(),
});

const prisma = new PrismaClient();

const getWithdrawTransactions = async (
  address: string,
  providerUrl: string,
  numberOfTransactions = 1000
) => {
  const { transactionsByOwner } = await getGraphqlClient(
    providerUrl
  ).AddressTransactions({
    owner: address,
    first: numberOfTransactions,
  });

  const abiMessageRelayed = FUEL_MESSAGE_PORTAL.abi.find(
    ({ name, type }) => name === 'MessageRelayed' && type === 'event'
  );
  const hasLogs = await Promise.all(
    transactionsByOwner.edges.map(async (edge) => {
      const decodedReceipts = (edge.node.receipts || []).map(
        ({ rawPayload }) => {
          const [decoded] = new ReceiptCoder().decode(arrayify(rawPayload), 0);

          return decoded;
        }
      );

      const messageOutReceipt = decodedReceipts.find(
        ({ type }) => type === ReceiptType.MessageOut
      ) as ReceiptMessageOut;

      const logs = await ethPublicClient.getLogs({
        address: process.env.ETH_FUEL_MESSAGE_PORTAL as `0x${string}`,
        event: {
          type: 'event',
          name: 'MessageRelayed',
          inputs: abiMessageRelayed?.inputs || [],
        },
        args: {
          messageId: messageOutReceipt?.messageId as `0x${string}`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        fromBlock: 'earliest',
      });
      return logs;
    })
  );
  const pendingWithdrawTransactions = transactionsByOwner.edges.filter(
    (edge, index) => {
      return !hasLogs[index].length;
    }
  );
  return pendingWithdrawTransactions;
};

notificationServer.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

notificationServer.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`Notification server running at http://localhost:${port}`);

  const data = await prisma.user.findUnique({
    where: {
      email: fuelTestEmail,
    },
    include: {
      addresses: true,
    },
  });

  if (data) {
    const transactions = await getWithdrawTransactions(
      data.addresses[0].address,
      fuelProvider.url
    );
    console.log(`transactions`, JSON.stringify(transactions, null, 4));
  }
});
