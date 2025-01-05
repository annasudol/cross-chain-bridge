'use client';

import { useEffect, useState } from 'react';
import type { Address } from 'viem';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

import { getBridgeAddress } from '@/constants/contract';
import { parseToBigInt } from '@/lib/formatBigInt';
import type { CallContractStatus, TxHash } from '@/types';

import useLocalStorage from './useLocalStorage';
import { useReadData } from './useReadVault';

interface SwapAmount {
  amount: string;
}

interface SwapTokenReturn {
  tx?: TxHash;
  handleSwap: ({ amount }: SwapAmount) => void;
  statusWrite: CallContractStatus;
  argsError: boolean;
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
  } = useWriteContract();

  const { isSuccess: txSuccess, isLoading: txLoading } =
    useWaitForTransactionReceipt({
      hash: swapeHash,
      query: {
        enabled: Boolean(swapeHash),
      },
    });

  useEffect(() => {
    if (txSuccess && address && swapeHash && amountToSwap) {
      handleRefetchBalance();
      setStorageValue(amountToSwap, address, swapeHash);
    }
  }, [txSuccess, swapeHash, address]);

  return {
    tx: swapeHash,
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
    statusWrite: {
      isError: writeError,
      isLoading: writeLoading || txLoading,
      isSuccess: txSuccess,
    },
  };
};

export { useSwapToken };
