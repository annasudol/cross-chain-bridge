import { defineConfig, loadEnv } from '@wagmi/cli';
import { actions, etherscan, react } from '@wagmi/cli/plugins';
import type { Abi, Address } from 'viem';
import { bscTestnet, sepolia } from 'viem/chains';

import contractABI from '@/abi/contractABI.json';
// NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS=0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF
// NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS=0x67408729BFD8192673ADc073D4Ca33A56c55811d

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });

  const contracts = {
    TTSepolia: env.NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS as Address,
    TTBscscan: env.NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS as Address,
  };

  return {
    out: 'src/config/wagmi-cli/generated.ts',
    contracts: [
      {
        name: 'TToken',
        abi: contractABI as Abi,
      },
    ],
    plugins: [
      etherscan({
        apiKey: env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string,
        chainId: sepolia.id,
        contracts: [
          {
            name: 'TT',
            address: {
              [sepolia.id]: contracts.TTSepolia,
              [bscTestnet.id]: contracts.TTBscscan,
            },
          },
        ],
      }),
      actions(),
      react(),
    ],
  };
});
