import type { Address } from 'viem';
import { erc20Abi } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

import { getBridgeAddress } from '@/constants/contract';
import type { CallContractStatus, TokenValue } from '@/types';
import { formatBigInt } from '@/lib/formatBigInt';

interface ReadVaultDataReturn {
  balance: {
    value?: TokenValue;
    status: CallContractStatus;
  }
  sybmol: {
    value?: string;
    status: CallContractStatus;
  }
}

export function useReadData(): ReadVaultDataReturn {
  const { chain, address } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);

  const {
    data: tokenAddress,
    isLoading: tokenAddressLoading,
    isError: tokenAddressError,
  } = useReadContract({
    abi: [
      {
        inputs: [],
        name: 'token',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'token',
    address: bridgeAddress,
  });
  const {
    data: symbol,
    isLoading: symbolLoading,
    isError: symbolError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'symbol',
  });

  const {
    data: decimals,
    isLoading: decimalsLoading,
    isError: decimalsError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'decimals',
  });
  console.log(decimals);

  const {
    data: balanceBInt,
    isLoading: balanceBIntLoading,
    isError: balanceBIntError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'balanceOf',
    args: [address as Address],
  });
  console.log(decimals, 'tokenBalance');
  const balance: TokenValue | undefined = (balanceBInt && decimals) ?{
    bigInt: balanceBInt,
    int: formatBigInt(balanceBInt, decimals),
  } : undefined;

  return {
    balance: {
      value: balance,
      status: {
        isLoading: balanceBIntLoading || decimalsLoading || tokenAddressLoading,
        isError: balanceBIntError || decimalsError || tokenAddressError,
        isSuccess: balance !== undefined,
      }
    },
    sybmol: {
      value: symbol,
      status: {
        isLoading: symbolLoading,
        isError: symbolError,
        isSuccess: symbol !== undefined,
      }
    }
  };
}
