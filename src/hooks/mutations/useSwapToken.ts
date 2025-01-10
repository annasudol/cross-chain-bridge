'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Address, Hash } from 'viem';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadData';
import { parseToBigInt } from '@/lib/formatBigInt';
import { getBridgeAddress } from '@/lib/getBridgeAddress';
import type { CallContractStatus } from '@/types';

interface SwapAmount {
  amount: string;
}

interface SwapTokenReturn {
  hash?: Hash;
  handleSwap: ({ amount }: SwapAmount) => void;
  mutateStatus?: CallContractStatus;
  argsError: boolean;
  clearTransaction: () => void;
}

const useSwapToken = (): SwapTokenReturn => {
  const { chain, address } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);
  const { token, handleRefetchBalance } = useReadData();
  const { setStorageValue } = useLocalStorage(
    `redeem-${[chain?.id === 97 ? 11155111 : 97]}`,
  );
  const [amountToSwap, setAmountToSwap] = useState<string>();

  const {
    data: swapeHash,
    writeContract: swapToken,
    isPending: writeLoading,
    isError: writeError,
    reset: resetSwap,
  } = useWriteContract();

  const { isSuccess: hashSuccess, isLoading: hashLoading } =
    useWaitForTransactionReceipt({
      hash: swapeHash,
      query: {
        enabled: Boolean(swapeHash),
      },
    });

  useEffect(() => {
    if (swapeHash && amountToSwap && address) {
      handleRefetchBalance();
      setStorageValue(amountToSwap, address, swapeHash);
    }
  }, [hashSuccess, swapeHash, address]);

  const clearTransaction = useCallback(() => {
    resetSwap();
  }, []);

  return {
    hash: swapeHash,
    handleSwap: ({ amount }: SwapAmount) => {
      const amountBint = parseToBigInt(
        amount,
        token?.value?.decimals as number,
      );
      setAmountToSwap(amount);
      swapToken({
        address: bridgeAddress as Address,
        abi: [
          {
            inputs: [
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'string', name: 'symbol', type: 'string' },
            ],
            name: 'swap',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        functionName: 'swap',
        args: [address as Address, amountBint, token?.value?.symbol as string],
      });
    },
    argsError: !address || !token,
    mutateStatus: {
      isError: writeError,
      isLoading: writeLoading || hashLoading,
      isSuccess: hashSuccess,
    },
    clearTransaction,
  };
};

export { useSwapToken };
