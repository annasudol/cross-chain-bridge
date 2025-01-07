import type { Chain } from 'viem';
import { defineChain } from 'viem';

import { AppConfig } from './AppConfig';

export const SEPOLIA_RPC_URL = `https://sepolia.gateway.tenderly.co/${process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;
export const BINANCE_RPC_URL = `https://binance.gateway.tenderly.co/${process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;

export const VNET_EXPLORER_URL = `https://dashboard.tenderly.co/explorer/vnet/${process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;

export const sepoliaTenderly: Chain = defineChain({
  id: 11155111,
  name: AppConfig.title,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [SEPOLIA_RPC_URL],
    },
  },
  blockExplorers: {
    default: {
      name: `${AppConfig.title} Explorer`,
      url: VNET_EXPLORER_URL,
    },
  },
});

export const binanceTenderly: Chain = defineChain({
  id: 97,
  name: AppConfig.title,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [SEPOLIA_RPC_URL],
    },
  },
  blockExplorers: {
    default: {
      name: `${AppConfig.title} Explorer`,
      url: VNET_EXPLORER_URL,
    },
  },
});
