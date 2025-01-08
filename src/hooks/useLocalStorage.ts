import { useCallback, useEffect, useState } from 'react';
import type { Address, Hash } from 'viem';

export interface IStorage {
  amount: string;
  address: Address;
  hash: Hash;
}
const useLocalStorage = (key: string) => {
  const [localstoragestate, setLocalStorageState] = useState<
    IStorage | undefined
  >(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem(key);
      if (value) {
        try {
          setLocalStorageState(JSON.parse(value));
        } catch {
          throw new Error('Error parsing localStorage value');
        }
      }
    }
  }, [key]);

  const setStorageValue = useCallback(
    (amount: string, address: Address, hash: Hash) => {
      try {
        if (typeof window !== 'undefined') {
          const valueToStore = { amount, address, hash };
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          setLocalStorageState(valueToStore);
        }
      } catch {
        throw new Error('Error setting value');
      }
    },
    [],
  );

  const removeStorageValue = useCallback(
    (hash: string) => {
      try {
        if (typeof window !== 'undefined') {
          if (localstoragestate && localstoragestate.hash === hash) {
            window.localStorage.removeItem(key);
            setLocalStorageState(undefined);
          }
        } else {
          setLocalStorageState(undefined);
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
