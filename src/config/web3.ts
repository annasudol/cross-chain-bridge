import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { bscTestnet, sepolia } from 'viem/chains';

import { envs } from '@/lib/envs';

import { AppConfig } from './AppConfig';
import { sepoliaTenderly } from './tenderly-config';

export const rainbowConfig = getDefaultConfig({
  appName: AppConfig.title,
  projectId: envs.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  chains: [
    sepolia,
    bscTestnet,
    ...(envs.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED ? [sepoliaTenderly] : []),
    ...(envs.NEXT_PUBLIC_ENABLE_TESTNETS ? [sepolia] : []),
  ],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, rabbyWallet, okxWallet],
    },
  ],
  ssr: false,
});

export const initialChain = envs.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED
  ? sepoliaTenderly
  : rainbowConfig.chains[0];
