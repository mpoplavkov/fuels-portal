import { useQuery } from '@tanstack/react-query';

import { useFuel } from './useFuel';
import { useIsConnected } from './useIsConnected';

export const useWallet = () => {
  const fuel = useFuel();
  const isConnected = useIsConnected();

  const {
    data: wallet,
    isLoading,
    isError,
  } = useQuery(
    ['wallet'],
    async () => {
      if (!isConnected.data || isConnected.isError) {
        return undefined;
      }
      // The wallet should be connected as the user did it in the first step
      // We could add a check to see if the wallet is past the welcome steps
      // and still disconnected
      const currentAccount = await fuel!.currentAccount();
      const currentWallet = (await fuel?.getWallet(currentAccount))!;
      return currentWallet;
    },
    {
      enabled: !!fuel,
    }
  );

  return { wallet, isLoading, isError };
};
