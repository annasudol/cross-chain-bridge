import { erc20Abi } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

import { getBridgeAddress } from '@/constants/contract';
import type { CallContractResponse } from '@/types';

interface BalanceToken {
  balance?: bigint;
}
interface ReadVaultDataReturn {
  tokens: CallContractResponse<BalanceToken>;
  balance?: bigint;
}

export function useReadData(): ReadVaultDataReturn {
  const { chain } = useAccount();
  const bridgeAddress = getBridgeAddress(chain?.id);

  const {
    data: tokenAddress,
    isLoading: readTokenAddressLoading,
    isError: readTokenAddressError,
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
    data: tokenSymbol,
    isLoading: readtokenSymbolLoading,
    isError: readTokenSymbolError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'symbol',
  });

  const {
    data: tokenDecimals,
    isLoading: readtokenDecimalsLoading,
    isError: readTokenDecimalsError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'decimals',
  });

  const {
    data: tokenBalance,
    isLoading: readTokenBalanceLoading,
    isError: readTokenBalanceError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'balanceOf',
  });

  // return {
  //   tokens: {
  //     balance: tokenBalance,
  //   },
  // };

  // const {
  //   data: token1Address,
  //   isLoading: readToken1AddressLoading,
  //   isError: readToken1AddressError,
  // } = useReadContract({
  //   ...vaultContract,
  //   functionName: 'token1',
  // });

  // const {
  //   data: totalUnderlying,
  //   isLoading: readTotalUnderlyingLoading,
  //   isError: readtoTalUnderlyingError,
  // } = useReadContract({
  //   ...helperContract,
  //   functionName: 'totalUnderlying',
  //   args: [vaultAddress as Address],
  // });

  // const {
  //   data: token0Symbol,
  //   isLoading: readtoken0SymbolLoading,
  //   isError: readToken0SymbolError,
  // } = useReadContract({
  //   abi: erc20Abi,
  //   address: token0Address,
  //   functionName: 'symbol',
  // });

  // const {
  //   data: token0Decimals,
  //   isLoading: readtoken0DecimalsLoading,
  //   isError: readToken0DecimalsError,
  // } = useReadContract({
  //   abi: erc20Abi,
  //   address: token0Address,
  //   functionName: 'decimals',
  // });

  // const {
  //   data: token1Symbol,
  //   isLoading: readToken1SymbolLoading,
  //   isError: readToken1SymbolError,
  // } = useReadContract({
  //   abi: erc20Abi,
  //   address: token1Address,
  //   functionName: 'symbol',
  // });

  // const {
  //   data: token1Decimals,
  //   isLoading: readToken1DecimalsLoading,
  //   isError: readToken1DecimalsError,
  // } = useReadContract({
  //   abi: erc20Abi,
  //   address: token1Address,
  //   functionName: 'decimals',
  // });
  // let tokens = {};
  // if (
  //   token0Symbol &&
  //   token1Symbol &&
  //   token0Address &&
  //   token1Address &&
  //   token0Decimals &&
  //   token1Decimals
  // ) {
  //   tokens = {
  //     [token0Symbol as TokenSymbol]: {
  //       symbol: token0Symbol,
  //       decimals: token0Decimals,
  //       address: token0Address,
  //     },
  //     [token1Symbol as TokenSymbol]: {
  //       symbol: token1Symbol,
  //       decimals: token1Decimals,
  //       address: token1Address,
  //     },
  //   };
  // }
  // let vaultData: VaultData | undefined;

  // if (totalUnderlying && contractName) {
  //   const ratioBN = totalUnderlying[1] / totalUnderlying[0];
  //   const ratio = Number(ratioBN);
  //   vaultData = {
  //     contractName,
  //     ratio,
  //   };
  // }

  // return {
  //   vaultAddressIsInvalid,
  //   vaultData,
  //   tokens,
  //   vaultStatus: {
  //     isError:
  //       readNameError ||
  //       readToken0AddressError ||
  //       readToken1AddressError ||
  //       readtoTalUnderlyingError,
  //     isLoading:
  //       readNameLoading ||
  //       readToken0AddressLoading ||
  //       readToken1AddressLoading ||
  //       readTotalUnderlyingLoading,
  //   },
  //   tokensStatus: {
  //     isError:
  //       readToken0SymbolError ||
  //       readToken0DecimalsError ||
  //       readToken1SymbolError ||
  //       readToken1DecimalsError,
  //     isLoading:
  //       readtoken0SymbolLoading ||
  //       readtoken0DecimalsLoading ||
  //       readToken1SymbolLoading ||
  //       readToken1DecimalsLoading,
  //   },
  // };
}
