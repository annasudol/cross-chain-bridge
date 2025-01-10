import type { Address } from 'viem';

import { envs } from '@/lib/envs';

enum ChainID {
  BscScan = 97,
  Sepolia = 11155111,
}
type ContractAddress = {
  [key in ChainID]: Address;
};
export const BRIDGE_ADDRESS: ContractAddress = {
  11155111: envs.NEXT_PUBLIC_BRIDGE_SEPOLIA_ADDRESS,
  97: envs.NEXT_PUBLIC_BRIDGE_BSCSCAN_ADDRESS,
};

export const getBridgeAddress = (chainID?: ChainID): Address | undefined => {
  return chainID ? BRIDGE_ADDRESS[chainID] : undefined;
};
