import { useMutation } from '@tanstack/react-query';
import type { Address, Hash } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';

import { siteConfig } from '@/config/siteConfig';
import { useWriteTtSwap } from '@/config/wagmi-cli/generated';
import { rainbowConfig } from '@/config/web3';
import { useReadData } from '@/hooks/useReadData';
import { parseToBigInt } from '@/lib/formatBigInt';
import { logger } from '@/lib/logger';
import { useTransactionManager } from '@/providers/TransactionProvider';

import useLocalStorage from '../useLocalStorage';

type SwapMutationProps = {
  address: Address;
  amount: string;
};

export const useSwapMutation = (chainId?: number) => {
  const { writeContractAsync } = useWriteTtSwap();
  const { token, handleRefetchBalance } = useReadData();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();
  const { setStorageValue } = useLocalStorage(
    `redeem-${[chainId === 97 ? 11155111 : 97]}`,
  );

  return useMutation({
    mutationFn: async ({ amount, address }: SwapMutationProps) => {
      let hash: Address | undefined;
      const amountBint = parseToBigInt(
        amount,
        token?.value?.decimals as number,
      );

      try {
        hash = await writeContractAsync({
          args: [address, amountBint, token.value?.symbol as string],
        });

        addTransaction({
          hash: hash as Hash,
          state: 'pending',
          title: 'Swapping transaction is finalizing...',
        });

        const txReceipt = await waitForTransactionReceipt(
          rainbowConfig.getClient(),
          {
            hash: hash as Hash,
            confirmations: siteConfig.txConfirmations,
          },
        );

        if (txReceipt.status === 'success') {
          handleRefetchBalance();
          updateTransaction({
            state: 'success',
            title: 'Success!',
            description: `You swapped token ${token.value?.symbol}. Please change network!`,
          });
          setStorageValue(amount, address, hash);
        } else {
          updateTransaction({
            state: 'failed',
            title: 'Oh no!',
            description: 'Please try again.',
            button: {
              text: 'Retry',
              onClick: () => clearTransaction(),
            },
          });
        }
      } catch (error) {
        logger.error(error);
      }
    },
    throwOnError: false,
  });
};
