import { useMutation } from '@tanstack/react-query';
import type { Address, Hash } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';

import { siteConfig } from '@/config/siteConfig';
import { useWriteTtFacet } from '@/config/wagmi-cli/generated';
import { rainbowConfig } from '@/config/web3';
import { useReadData } from '@/hooks/useReadData';
import { logger } from '@/lib/logger';
import { useTransactionManager } from '@/providers/TransactionProvider';

export const useMintMutation = () => {
  const { writeContractAsync } = useWriteTtFacet();
  const { token, handleRefetchBalance } = useReadData();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();

  return useMutation({
    mutationFn: async () => {
      let hash: Address | undefined;

      try {
        hash = await writeContractAsync({});

        addTransaction({
          hash: hash as Hash,
          state: 'pending',
          title: 'Your transaction is pending',
          button: {
            disabled: true,
            text: 'Transaction finalizing...',
          },
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
            description: `You have received ${token.value?.symbol}.`,
            button: {
              text: 'Reset',
              onClick: async () => {
                clearTransaction();
              },
            },
          });
        } else {
          updateTransaction({
            state: 'failed',
            title: 'Oh no! Something went wrong.',
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
