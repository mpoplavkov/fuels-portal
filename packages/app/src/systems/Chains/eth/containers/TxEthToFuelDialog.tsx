import { cssObj } from '@fuel-ui/css';
import { Box, Button, Dialog, Text } from '@fuel-ui/react';
import { BridgeTxOverview, BridgeSteps } from '~/systems/Bridge';
import { shortAddress } from '~/systems/Core';
import { useOverlay } from '~/systems/Overlay';

import { useTxEthToFuel } from '../hooks';
import { ETH_SYMBOL, ethLogoSrc } from '../utils';

export function TxEthToFuelDialog() {
  const { metadata } = useOverlay<{ txId: string }>();
  const {
    steps,
    ethBlockDate,
    status,
    handlers,
    shouldShowConfirmButton,
    amount,
  } = useTxEthToFuel({
    id: metadata.txId,
  });

  return (
    <>
      <Dialog.Close aria-label="Close Transaction Dialog" />
      <Dialog.Heading>
        Deposit
        <Box css={styles.divider} />
      </Dialog.Heading>
      <Dialog.Description>
        <Box.Stack gap="$2">
          <Text color="intentsBase12">Status</Text>
          <BridgeSteps steps={steps} />
          <Box css={styles.border} />
          <BridgeTxOverview
            transactionId={shortAddress(metadata.txId)}
            date={ethBlockDate}
            isDeposit={true}
            asset={{
              assetSymbol: ETH_SYMBOL,
              imageUrl: ethLogoSrc,
              assetAmount: amount,
            }}
          />
        </Box.Stack>
      </Dialog.Description>
      {shouldShowConfirmButton && (
        <Dialog.Footer>
          <Button
            onPress={handlers.relayMessageToFuel}
            intent="primary"
            css={styles.actionButton}
            isLoading={status.isConfirmTransactionLoading}
          >
            Confirm Transaction
          </Button>
        </Dialog.Footer>
      )}
    </>
  );
}

const styles = {
  border: cssObj({
    my: '$4',
    borderBottom: '1px solid $border',
  }),
  divider: cssObj({
    h: '1px',
    bg: '$border',
    mt: '$5',
  }),
  actionButton: cssObj({
    width: '100%',
  }),
};
