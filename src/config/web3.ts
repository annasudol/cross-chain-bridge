import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bscTestnet, sepolia } from 'viem/chains';

import { AppConfig } from '@/config/AppConfig';

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
  'a41cbf847cbe30877e9ef4aa8577d989';

export const wagmiConfig = getDefaultConfig({
  appName: AppConfig.name,
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: [sepolia, bscTestnet],
  ssr: true,
});
