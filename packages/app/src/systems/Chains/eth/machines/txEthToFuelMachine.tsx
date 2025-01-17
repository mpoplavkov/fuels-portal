/* eslint-disable no-console */
import type {
  BN,
  Message,
  Address as FuelAddress,
  Provider as FuelProvider,
} from 'fuels';
import type { PublicClient } from 'wagmi';
import type { InterpreterFrom, StateFrom } from 'xstate';
import { assign, createMachine } from 'xstate';
import { FetchMachine } from '~/systems/Core/machines';

import type { TxEthToFuelInputs } from '../services';
import { TxEthToFuelService } from '../services';
import { EthTxCache } from '../utils';

type MachineContext = {
  ethTxId?: `0x${string}`;
  ethTxNonce?: BN;
  fuelAddress?: FuelAddress;
  fuelProvider?: FuelProvider;
  fuelMessage?: Message;
  ethPublicClient?: PublicClient;
  ethDepositBlockHeight?: string;
  amount?: string;
  blockDate?: Date;
};

type MachineServices = {
  getDepositNonce: {
    data: {
      depositNonce: BN;
      amount: string;
      ethDepositBlockHeight: string;
      blockDate: Date;
    };
  };
  getFuelMessage: {
    data: boolean | undefined;
  };
};

type AnalyzeInputs = TxEthToFuelInputs['getDepositNonce'] &
  TxEthToFuelInputs['getFuelMessage'];
export type TxEthToFuelMachineEvents = {
  type: 'START_ANALYZE_TX';
  input: Omit<AnalyzeInputs, 'ethTxNonce'>;
};

export const txEthToFuelMachine = createMachine(
  {
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    tsTypes: {} as import('./txEthToFuelMachine.typegen').Typegen0,
    schema: {
      context: {} as MachineContext,
      services: {} as MachineServices,
      events: {} as TxEthToFuelMachineEvents,
    },
    predictableActionArguments: true,
    id: '(machine)',
    initial: 'idle',
    states: {
      idle: {
        always: {
          cond: 'hasAnalyzeTxInput',
          target: 'checkingSettlement',
        },
        on: {
          START_ANALYZE_TX: {
            actions: ['assignAnalyzeTxInput'],
            target: 'checkingSettlement',
          },
        },
      },
      checkingSettlement: {
        initial: 'gettingNonce',
        states: {
          gettingNonce: {
            tags: ['isSettlementLoading', 'isSettlementSelected'],
            invoke: {
              src: 'getDepositNonce',
              data: {
                input: (ctx: MachineContext) => ({
                  ethTxId: ctx.ethTxId,
                  ethPublicClient: ctx.ethPublicClient,
                }),
              },
              onDone: [
                {
                  cond: FetchMachine.hasError,
                },
                {
                  actions: ['assignReceiptsInfo'],
                  cond: 'hasEthTxNonce',
                  target: 'checkingDoneCache',
                },
              ],
            },
            after: {
              10000: {
                target: 'gettingNonce',
              },
            },
          },
          checkingDoneCache: {
            tags: ['isSettlementLoading', 'isSettlementSelected'],
            always: [
              {
                cond: 'isTxEthToFuelDone',
                target: '#(machine).checkingSettlement.checkingFuelTx.done',
              },
              {
                target: 'checkingFuelTx',
              },
            ],
          },
          checkingFuelTx: {
            tags: ['isSettlementDone'],
            initial: 'gettingFuelMessage',
            states: {
              gettingFuelMessage: {
                tags: [
                  'isConfirmTransactionLoading',
                  'isConfirmTransactionSelected',
                ],
                invoke: {
                  src: 'getFuelMessage',
                  data: {
                    input: (ctx: MachineContext) => ({
                      ethTxNonce: ctx.ethTxNonce,
                      fuelAddress: ctx.fuelAddress,
                      fuelProvider: ctx.fuelProvider,
                      ethDepositBlockHeight: ctx.ethDepositBlockHeight,
                    }),
                  },
                  onDone: [
                    {
                      cond: FetchMachine.hasError,
                    },
                    {
                      cond: 'hasFuelMessage',
                      target: 'done',
                    },
                  ],
                },
                after: {
                  10000: {
                    target: 'gettingFuelMessage',
                  },
                },
              },
              done: {
                entry: ['setEthToFuelTxDone'],
                tags: ['isReceiveDone'],
                type: 'final',
              },
            },
          },
        },
      },
      failed: {},
    },
  },
  {
    actions: {
      assignAnalyzeTxInput: assign((_, ev) => ({
        ethTxId: ev.input.ethTxId,
        fuelAddress: ev.input.fuelAddress,
        fuelProvider: ev.input.fuelProvider,
        ethPublicClient: ev.input.ethPublicClient,
      })),
      assignReceiptsInfo: assign((_, ev) => ({
        ethTxNonce: ev.data.depositNonce,
        amount: ev.data.amount,
        ethDepositBlockHeight: ev.data.ethDepositBlockHeight,
        blockDate: ev.data.blockDate,
      })),
      setEthToFuelTxDone: (ctx) => {
        if (ctx.ethTxId) {
          EthTxCache.setTxIsDone(ctx.ethTxId);
        }
      },
    },
    guards: {
      hasFuelMessage: (ctx, ev) => !!ctx.fuelMessage || !!ev?.data,
      hasEthTxNonce: (ctx, ev) => !!ctx.ethTxNonce || !!ev?.data.depositNonce,
      hasAnalyzeTxInput: (ctx) =>
        !!ctx.ethTxId &&
        !!ctx.fuelAddress &&
        !!ctx.fuelProvider &&
        !!ctx.ethPublicClient,
      isTxEthToFuelDone: (ctx) => EthTxCache.getTxIsDone(ctx.ethTxId || ''),
    },
    services: {
      getDepositNonce: FetchMachine.create<
        TxEthToFuelInputs['getDepositNonce'],
        MachineServices['getDepositNonce']['data']
      >({
        showError: true,
        async fetch({ input }) {
          if (!input) {
            throw new Error('No input to getNonce');
          }

          console.log('getDepositNonce');
          return TxEthToFuelService.getDepositNonce(input);
        },
      }),
      getFuelMessage: FetchMachine.create<
        TxEthToFuelInputs['getFuelMessage'],
        MachineServices['getFuelMessage']['data']
      >({
        showError: true,
        maxAttempts: 1,
        async fetch({ input }) {
          if (!input) {
            throw new Error('No input to get fuel message');
          }

          console.log('getFuelMessage');
          return TxEthToFuelService.getFuelMessage(input);
        },
      }),
    },
  }
);

export type TxEthToFuelMachine = typeof txEthToFuelMachine;
export type TxEthToFuelMachineService = InterpreterFrom<TxEthToFuelMachine>;
export type TxEthToFuelMachineState = StateFrom<TxEthToFuelMachine>;
