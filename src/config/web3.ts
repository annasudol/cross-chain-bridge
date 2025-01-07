import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { bscTestnet, sepolia } from 'viem/chains';

import { envs } from '@/lib/envs';

import { AppConfig } from './AppConfig';

export const rainbowConfig = getDefaultConfig({
  appName: AppConfig.title,
  projectId: envs.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  chains: [sepolia, bscTestnet],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, rabbyWallet, okxWallet],
    },
  ],
  ssr: false,
});

export const initialChain = rainbowConfig.chains[0];
