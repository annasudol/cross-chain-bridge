import router from 'next/router';
import React from 'react';
import { useAccount } from 'wagmi';

import { ButtonLeftIcon, MyButton } from '@/components/button/MyButton';
import { useRedeemMutation } from '@/hooks/mutations/useRedeemMutation';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadData';
import { useTransactionManager } from '@/providers/TransactionProvider';

import { SubmitButton } from '../button/SubmitButton';
import { TxAlert } from '../TxAlert';

export const RedeemForm = () => {
  const { token } = useReadData();
  const { chain } = useAccount();
  const { mutateAsync: handleRedeem } = useRedeemMutation();
  const { localstoragestate, removeStorageValue } = useLocalStorage(
    `redeem-${[chain?.id]}`,
  );

  const { transaction, clearTransaction } = useTransactionManager();

  const handleGoBack = () => {
    router.push('/');
    if (localstoragestate?.hash) {
      removeStorageValue(localstoragestate.hash);
      clearTransaction();
    }
  };

  if (transaction) {
    return (
      <div className="mb-4 flex flex-col">
        <TxAlert {...transaction} />
        {transaction?.state === 'success' ||
          (transaction?.state === 'failed' && (
            <MyButton
              className="mt-2 min-w-72 text-white"
              onPress={handleGoBack}
              color="primary"
              iconLeft={ButtonLeftIcon.ArrowLeft}
            >
              Go back
            </MyButton>
          ))}
      </div>
    );
  }

  if (localstoragestate) {
    return (
      <div>
        <SubmitButton
          type="button"
          onPress={() => localstoragestate && handleRedeem(localstoragestate)}
          className="my-2 min-w-96"
        >
          Redeem {localstoragestate?.amount} {token?.value?.symbol}
        </SubmitButton>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <span className="mb-4">No token to redeem </span>
      <MyButton
        className="mt-2 min-w-72 text-white"
        onPress={() => router.push('/')}
        color="primary"
        iconLeft={ButtonLeftIcon.ArrowLeft}
      >
        Go back
      </MyButton>
    </div>
  );
};
