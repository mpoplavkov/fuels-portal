import { useModal } from 'connectkit';
import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  usePublicClient,
  useWalletClient,
} from 'wagmi';

import { parseEthAddressToFuel } from '../utils';

export function useEthAccountConnection() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: balance } = useBalance({ address });
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const { open: isConnecting, setOpen } = useModal();
  const { disconnect } = useDisconnect();
  const paddedAddress = parseEthAddressToFuel(address);

  return {
    handlers: {
      connect: () => setOpen(true),
      disconnect,
    },
    address,
    paddedAddress,
    ens: {
      name: ensName || undefined,
      avatar: ensAvatar || undefined,
    },
    isConnected,
    isConnecting,
    signer: walletClient || undefined,
    walletClient: walletClient || undefined,
    provider: publicClient || undefined,
    publicClient: publicClient || undefined,
    balance,
  };
}
