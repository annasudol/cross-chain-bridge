import { useState } from 'react';
import type { Address } from 'viem';

import type { IStorage } from '@/types';

const useLocalStorage = (key: string) => {
  const [localstoragestate, setLocalStorageState] = useState<
    IStorage[] | undefined
  >(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : undefined;
    } catch {
      throw new Error('Error getting value');
    }
  });
  const setStorageValue = (
    amount: string,
    address: Address,
    txHash: string,
  ) => {
    let valueToStore;
    try {
      if (localstoragestate && Object.values(localstoragestate).length > 0) {
        valueToStore =
          localstoragestate.filter((v: IStorage) => v.txHash === txHash)
            .length > 0
            ? localstoragestate.filter((v: IStorage) => v.txHash !== txHash)
            : [...localstoragestate, { amount, address, txHash }];
      } else {
        valueToStore = [{ amount, address, txHash }];
      }
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      setLocalStorageState(valueToStore);
    } catch {
      throw new Error('Error setting value');
    }
  };

  const removeStorageValue = (txHash: string) => {
    try {
      let valueStoreToRemove: IStorage[] = [];
      if (localstoragestate && Object.values(localstoragestate).length > 0) {
        valueStoreToRemove = localstoragestate.filter(
          (v: IStorage) => v.txHash === txHash,
        );
      }
      window.localStorage.removeItem(JSON.stringify(valueStoreToRemove));
    } catch {
      throw new Error('Error removing value');
    }
  };

  return { localstoragestate, setStorageValue, removeStorageValue };
};

export default useLocalStorage;
