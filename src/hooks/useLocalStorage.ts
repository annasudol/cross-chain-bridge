import { useCallback, useState } from 'react';
import type { Address } from 'viem';

import type { IStorage } from '@/types';

const useLocalStorage = (key: string) => {
  const [localstoragestate, setLocalStorageState] = useState<
    IStorage[] | undefined
  >(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : undefined;
    } catch (err) {
      throw new Error('Error getting value');
    }
  });
  const setStorageValue = useCallback(
    (address: Address, txHash: string, amount?: string) => {
      let valueToStore: IStorage[] = [];
      try {
        if (localstoragestate && Object.values(localstoragestate).length > 0) {
          valueToStore =
            localstoragestate.filter((v: IStorage) => v.txHash === txHash)
              .length > 0
              ? localstoragestate.filter((v: IStorage) => v.txHash !== txHash)
              : [
                  ...localstoragestate,
                  { amount: amount || '0', address, txHash },
                ];
        } else {
          valueToStore = [{ amount: amount || '0', address, txHash }];
        }
        window.localStorage.setItem(key, JSON.stringify(valueToStore));

        setLocalStorageState(valueToStore);
      } catch {
        throw new Error('Error setting value');
      }
    },
    [key, localstoragestate],
  );

  const removeStorageValue = useCallback(
    (txHash: string) => {
      try {
        if (localstoragestate) {
          const updatedStorage = localstoragestate.filter(
            (item: IStorage) => item.txHash !== txHash,
          );
          window.localStorage.setItem(key, JSON.stringify(updatedStorage));
          setLocalStorageState(updatedStorage);
        }
      } catch {
        throw new Error('Error removing value');
      }
    },
    [key, localstoragestate],
  );

  return { localstoragestate, removeStorageValue, setStorageValue };
};

export default useLocalStorage;
