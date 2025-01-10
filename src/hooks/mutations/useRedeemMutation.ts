import { useMutation } from '@tanstack/react-query';
import type { Hash } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';
import { useAccount } from 'wagmi';

import { siteConfig } from '@/config/siteConfig';
import { useWriteTtRedeem } from '@/config/wagmi-cli/generated';
import { rainbowConfig } from '@/config/web3';
import { useReadData } from '@/hooks/useReadData';
import { parseToBigInt } from '@/lib/formatBigInt';
import { logger } from '@/lib/logger';
import { useTransactionManager } from '@/providers/TransactionProvider';

import type { IStorage } from '../useLocalStorage';
import useLocalStorage from '../useLocalStorage';

export const useRedeemMutation = () => {
  const { writeContractAsync } = useWriteTtRedeem();
  const { token, handleRefetchBalance } = useReadData();
  const { chain } = useAccount();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();
  const { removeStorageValue } = useLocalStorage(
    `redeem-${[chain?.id === 97 ? 11155111 : 97]}`,
  );

  return useMutation({
    mutationFn: async ({ amount, address, hash }: IStorage) => {
      let hashTx: Hash | undefined;
      const amountBint = parseToBigInt(
        amount,
        token?.value?.decimals as number,
      );

      try {
        hashTx = await writeContractAsync({
          args: [
            address,
            address,
            amountBint,
            BigInt(hash),
            token.value?.symbol as string,
          ],
        });

        addTransaction({
          hash: hashTx as Hash,
          state: 'pending',
          title: 'Redeeimg transaction is finalizing...',
        });

        const txReceipt = await waitForTransactionReceipt(
          rainbowConfig.getClient(),
          {
            hash: hashTx as Hash,
            confirmations: siteConfig.txConfirmations,
          },
        );

        if (txReceipt.status === 'success') {
          handleRefetchBalance();
          updateTransaction({
            state: 'success',
            title: 'Success!',
            description: `You redeemed ${token.value?.symbol}.`,
          });
          removeStorageValue(hash);
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
