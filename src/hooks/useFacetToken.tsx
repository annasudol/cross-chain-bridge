'use client';

import { useEffect } from 'react';
import type { Address, Hash } from 'viem';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

import { getBridgeAddress } from '@/constants/contract';
import type { CallContractStatus } from '@/types';

import { useReadData } from './useReadVault';

interface FacetTokenReturn {
  tx?: Hash;
  handleFacet: () => void;
  mutateStatus: CallContractStatus;
  argsError: boolean;
}

const useFacetToken = (): FacetTokenReturn => {
  const { chain, address } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);
  const { token, handleRefetchBalance } = useReadData();

  const {
    data: facetHash,
    writeContract: facetToken,
    isPending: writeLoading,
    isError: writeError,
  } = useWriteContract();

  const { isSuccess: txSuccess, isLoading: txLoading } =
    useWaitForTransactionReceipt({
      hash: facetHash,
      query: {
        enabled: Boolean(facetHash),
      },
    });

  useEffect(() => {
    if (txSuccess) {
      handleRefetchBalance();
    }
  }, [txSuccess]);

  return {
    tx: facetHash,
    handleFacet: () => {
      facetToken({
        address: bridgeAddress as Address,
        abi: [
          {
            inputs: [],
            name: 'facet',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        functionName: 'facet',
      });
    },
    argsError: !address || !token,
    mutateStatus: {
      isError: writeError,
      isLoading: writeLoading || txLoading,
      isSuccess: txSuccess,
    },
  };
};

export { useFacetToken };
