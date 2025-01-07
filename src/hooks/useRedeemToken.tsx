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
import type { CallContractStatus, Hash, IStorage } from '@/types';

import useLocalStorage from './useLocalStorage';
import { useReadData } from './useReadVault';

interface RedeemValues extends IStorage {}
interface RedeemTokenReturn {
  hash?: Hash;
  handleRedeem: ({ amount, address, hash }: RedeemValues) => void;
  mutateStatus: CallContractStatus;
  argsError: boolean;
}

const useRedeemToken = (): RedeemTokenReturn => {
  const { chain, address } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);
  const { token, handleRefetchBalance } = useReadData();
  const [hashSwap, sethashSwap] = useState<string>();
  const { localstoragestate, removeStorageValue } = useLocalStorage(
    `redeem-${[chain?.id]}`,
  );

  const {
    data: redeemHash,
    writeContract: redeemToken,
    isPending: writeLoading,
    isError: writeError,
  } = useWriteContract();

  const {
    isSuccess: txSuccess,
    isLoading: txLoading,
    isError: txError,
  } = useWaitForTransactionReceipt({
    hash: redeemHash,
    query: {
      enabled: Boolean(redeemHash),
    },
  });

  useEffect(() => {
    if (txSuccess && address && hashSwap && localstoragestate?.hash) {
      handleRefetchBalance();
      removeStorageValue(localstoragestate?.hash);
    }
  }, [txSuccess, redeemHash, address]);

  return {
    hash: redeemHash,
    handleRedeem: ({ amount, hash }: RedeemValues) => {
      sethashSwap(hash);
      const amountBigInt = parseToBigInt(
        amount,
        token.value?.decimals as number,
      );
      redeemToken({
        address: bridgeAddress as Address,
        abi: [
          {
            inputs: [
              { internalType: 'address', name: 'from', type: 'address' },
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'tx_hash', type: 'uint256' },
              { internalType: 'string', name: 'symbol', type: 'string' },
            ],
            name: 'redeem',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        functionName: 'redeem',
        args: [
          address as Address,
          address as Address,
          amountBigInt,
          BigInt(hash),
          token.value?.symbol as string,
        ],
      });
    },
    argsError: !address || !token,
    mutateStatus: {
      isError: writeError || txError,
      isLoading: writeLoading || txLoading,
      isSuccess: txSuccess,
    },
  };
};

export { useRedeemToken };
