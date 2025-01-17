import { cssObj } from '@fuel-ui/css';
import { CardList } from '@fuel-ui/react';
import {
  useFuelAccountConnection,
  TxListItemEthToFuel,
  isEthChain,
  isFuelChain,
  TxListItemFuelToEth,
} from '~/systems/Chains';

import {
  BridgeListEmpty,
  BridgeTxItemsLoading,
  BridgeTxListNotConnected,
} from '../components';
import { useBridgeTxs } from '../hooks';

export const BridgeTxList = () => {
  const { isConnecting, handlers } = useFuelAccountConnection();
  const {
    bridgeTxs,
    isLoading,
    shouldShowNotConnected,
    shouldShowEmpty,
    shouldShowList,
  } = useBridgeTxs();

  return (
    <>
      {isLoading && <BridgeTxItemsLoading />}
      {shouldShowNotConnected && (
        <BridgeTxListNotConnected
          isConnecting={isConnecting}
          onClick={handlers.connect}
        />
      )}
      {shouldShowEmpty && <BridgeListEmpty />}
      {shouldShowList && (
        <CardList isClickable css={styles.cardList}>
          {bridgeTxs.map((txDatum, index) => {
            if (
              isEthChain(txDatum.fromNetwork) &&
              isFuelChain(txDatum.toNetwork)
            ) {
              return (
                <TxListItemEthToFuel
                  key={`${index}-${txDatum.txHash}`}
                  txHash={txDatum.txHash || ''}
                />
              );
            }
            if (
              isFuelChain(txDatum.fromNetwork) &&
              isEthChain(txDatum.toNetwork)
            ) {
              return (
                <TxListItemFuelToEth
                  key={`${index}-${txDatum.txHash}`}
                  txHash={txDatum.txHash || ''}
                />
              );
            }

            return null;
          })}
        </CardList>
      )}
    </>
  );
};

const styles = {
  cardList: cssObj({
    cursor: 'pointer',
    userSelect: 'none',

    ':hover': {
      backgroundColor: '$intentsBase3',
    },
  }),
};
