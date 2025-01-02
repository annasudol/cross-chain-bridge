export enum ChainName {
  Sepolia = 'Sepolia',
}

export type ChainID = 11155111 | 97;
export enum TokenSymbol {
  rETH = 'rETH',
  WETH = 'WETH',
  USDC = 'USDC',
  wstETH = 'wstETH',
}

export interface StaticData {
  vaultAddress: string;
  chain: ChainName;
  tokens: TokenSymbol[];
}

export interface TokenBalance {
  balanceInt?: string;
  balanceBigInt?: bigint;
}

export interface TokenInfo {
  symbol: string;
  decimals: number;
}

export interface VaultData {
  contractName: string;
  ratio: number;
}

export interface TokensCollection<T> {
  [key: string]: T;
}

export interface TokenValue {
  int?: string;
  bigInt?: bigint;
}

export type Address = `0x${string}`;

export type TxHash = `0x${string}`;

export enum StepType {
  Deposit = 'Deposit',
  Allowance = 'Allowance',
  Liquidity = 'Liquidity',
}

export interface CallContractStatus {
  isLoading: boolean;
  isError: boolean;
  isSuccess?: boolean;
}

export interface IStorage {
  amount: string;
  address: Address;
  txHash: string;
}

export type MyNotificationType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface MyNotification {
  title: string;
  type?: MyNotificationType;
  tx?: TxInfo;
  id?: string;
}

export interface TxInfo {
  href: string;
  chainid: ChainID;
}
