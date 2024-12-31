import type { Address } from 'viem';

enum ContractType {
  SEPOLIA = 'SEPOLIA',
  BSCSCAN = 'BSCSCAN',
}
type ContractAddress = {
  [key in ContractType]: Address;
};
export const BRIDGE_ADDRESS: ContractAddress = {
  SEPOLIA: '0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF',
  BSCSCAN: '0x67408729BFD8192673ADc073D4Ca33A56c55811d',
};
