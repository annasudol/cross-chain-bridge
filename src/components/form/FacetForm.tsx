import React from 'react';
import { useAccount } from 'wagmi';

import { SubmitButton } from '@/components/button/SubmitButton';
import { useFacetToken } from '@/hooks/useFacetToken';
import { useReadData } from '@/hooks/useReadVault';

import { TxAlert } from '../TxAlert';

export const FacetForm = () => {
  const { token } = useReadData();
  const { chain } = useAccount();

  const { handleFacet, hash, mutateStatus } = useFacetToken();

  if (hash) {
    if (mutateStatus?.isLoading) {
      return (
        <div className="flex flex-col items-stretch">
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
        <div className="flex flex-col items-stretch">
          <TxAlert
            message="Receiving token failed"
            color="danger"
            hash={hash}
            chain={chain}
          />
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
        </div>
      );
    }
  }
  return (
    <div>
      <p className="text-sm text-gray-400">
        To request {token.value?.symbol} funds, click button. You can request 1
        {token.value?.symbol} every 24h! {token.value?.symbol} tokens is a
        currency that allows you to swap sETH to{' '}
        {token.value?.symbol === 'sETH' ? 'tBSC' : 'sETH'}{' '}
      </p>
      <SubmitButton onPress={() => handleFacet()}>
        {`Click to receive ${token.value?.symbol}`}
      </SubmitButton>
    </div>
  );
};
