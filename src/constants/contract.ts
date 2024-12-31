import type { Address } from 'viem';

enum ChainID {
  BscScan = 97,
  Sepolia = 11155111,
}
type ContractAddress = {
  [key in ChainID]: Address;
};
export const BRIDGE_ADDRESS: ContractAddress = {
  11155111: '0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF',
  97: '0x67408729BFD8192673ADc073D4Ca33A56c55811d',
};

export const getBridgeAddress = (chainID?: ChainID) => {
  return chainID ? BRIDGE_ADDRESS[chainID] : undefined;
};
