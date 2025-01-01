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
import type { CallContractStatus, IStorage, TxHash } from '@/types';

import { useReadData } from './useReadVault';

interface RedeemValues extends IStorage {}
interface RedeemTokenReturn {
  tx?: TxHash;
  handleRedeem: ({ amount, address, txHash }: RedeemValues) => void;
  statusWrite: CallContractStatus;
  argsError: boolean;
}

const useRedeemToken = (): RedeemTokenReturn => {
  const { chain, address } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);
  const { token, handleRefetchBalance } = useReadData();
  const [txHashSwap, setTxHashSwap] = useState<string>();
  const {
    data: redeemHash,
    writeContract: redeemToken,
    isPending: writeLoading,
    isError: writeError,
  } = useWriteContract();

  const { isSuccess: txSuccess, isLoading: txLoading } =
    useWaitForTransactionReceipt({
      hash: redeemHash,
      query: {
        enabled: Boolean(redeemHash),
      },
    });

  useEffect(() => {
    if (txSuccess && address && txHashSwap) {
      handleRefetchBalance();
      // removeStorageValue(txHashSwap);
    }
  }, [txSuccess, redeemHash, address]);

  return {
    tx: redeemHash,
    handleRedeem: ({ amount, txHash }: RedeemValues) => {
      setTxHashSwap(txHash);
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
          BigInt(txHash),
          token.value?.symbol as string,
        ],
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

export { useRedeemToken };
