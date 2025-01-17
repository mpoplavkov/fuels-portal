export const {
  VITE_ALCHEMY_ID,
  VITE_INFURA_ID,
  VITE_WALLETCONNECT_ID,
  VITE_ETH_FUEL_MESSAGE_PORTAL,
  VITE_ETH_CHAIN,
  VITE_FUEL_CHAIN,
  VITE_FUEL_VERSION,
  NODE_ENV,
  VITE_ETH_ERC20_TOKEN_ADDRESS,
  VITE_ETH_FUEL_ERC20_GATEWAY,
  VITE_ETH_FUEL_CHAIN_STATE,
  VITE_WALLET_INSTALL,
  VITE_WALLET_INSTALL_NEXT,
} = import.meta.env;

export const IS_PREVIEW = import.meta.env.VITE_IS_PUBLIC_PREVIEW === 'true';
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
export const IS_TEST = process.env.NODE_ENV === 'test';
