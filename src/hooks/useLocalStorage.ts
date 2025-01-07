import { useCallback, useEffect, useState } from 'react';
import type { Address } from 'viem';

import type { IStorage } from '@/types';

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
          console.error('Error parsing localStorage value:', value);
        }
      }
    }
  }, [key]);

  const setStorageValue = (amount: string, address: Address, hash: string) => {
    try {
      if (typeof window !== 'undefined') {
        const valueToStore = { amount, address, hash };
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setLocalStorageState(valueToStore);
      }
    } catch {
      throw new Error('Error setting value');
    }
  };

  const removeStorageValue = useCallback(
    (hash: string) => {
      try {
        if (typeof window !== 'undefined') {
          if (localstoragestate && localstoragestate.hash === hash) {
            window.localStorage.removeItem(key); // Remove the key instead of setting it to "undefined"
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
