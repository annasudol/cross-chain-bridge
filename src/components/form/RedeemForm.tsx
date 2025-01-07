import router from 'next/router';
import React from 'react';
import { useAccount } from 'wagmi';

import MyButton, { ButtonLeftIcon } from '@/components/button/MyButton';
import { SubmitButton } from '@/components/button/SubmitButton';
import { TxAlert } from '@/components/TxAlert';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadVault';
import { useRedeemToken } from '@/hooks/useRedeemToken';

export const RedeemForm = () => {
  const { token } = useReadData();
  const { chain } = useAccount();
  const { handleRedeem, hash, mutateStatus } = useRedeemToken();
  const { localstoragestate, removeStorageValue } = useLocalStorage(
    `redeem-${[chain?.id]}`,
  );

  const handleGoBack = () => {
    router.push('/');
    if (localstoragestate?.hash) {
      removeStorageValue(localstoragestate.hash);
    }
  };

  if (hash) {
    if (mutateStatus?.isLoading) {
      return (
        <div className="flex h-60 flex-col items-stretch">
          <TxAlert
            message="Transaction is pending"
            color="primary"
            hash={hash}
            chain={chain}
          />
        </div>
      );
    }
    if (mutateStatus?.isError) {
      return (
        <div className="flex h-60 flex-col items-stretch">
          <TxAlert
            message="Redeem failed"
            color="danger"
            hash={hash}
            chain={chain}
          />
          <MyButton
            className="w-full max-w-48 text-white"
            onPress={handleGoBack}
            iconLeft={ButtonLeftIcon.ArrowLeft}
          >
            Go back
          </MyButton>
        </div>
      );
    }

    if (mutateStatus?.isSuccess) {
      return (
        <div className="flex h-64 flex-col items-stretch">
          <TxAlert
            message="Redeem token is successful"
            color="success"
            hash={hash}
            chain={chain}
          />
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
    }
  }
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
};
