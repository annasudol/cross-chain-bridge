export interface TokensCollection<T> {
  [key: string]: T;
}

export type Address = `0x${string}`;

export type Hash = `0x${string}`;

export interface CallContractStatus {
  isLoading: boolean;
  isError: boolean;
  isSuccess?: boolean;
}

export interface IStorage {
  amount: string;
  address: Address;
  hash: string;
}
