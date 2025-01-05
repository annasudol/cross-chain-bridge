import React, { useEffect } from 'react';

import { SubmitButton } from '@/components/button/SubmitButton';
import { MyAlert } from '@/components/MyAlert';
import { TxLink } from '@/components/TxLink';
import { useFacetToken } from '@/hooks/useFacetToken';
import { useReadData } from '@/hooks/useReadVault';

export const FacetForm = () => {
  const { token, handleRefetchBalance } = useReadData();

  const { handleFacet, tx, statusWrite } = useFacetToken();

  useEffect(() => {
    if (tx && statusWrite.isSuccess) {
      handleRefetchBalance();
    }
  }, [tx, statusWrite]);

  if (tx) {
    return (
      <div>
        <MyAlert
          message="Transaction is successful"
          color="success"
          description={<TxLink txHash={tx} />}
        />
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-400">
        To request {token.value?.symbol} funds, click button. You can request 1
        {token.value?.symbol} every 24h! {token.value?.symbol} tokens is a
        currency that allows you to swap sETH to{' '}
        {token.value?.symbol === 'sETH' ? 'tBSC' : 'sETH'}{' '}
      </p>
      <SubmitButton
        onPress={() => handleFacet()}
        isLoading={statusWrite.isLoading}
      >
        {`Click to receive ${token.value?.symbol}`}
      </SubmitButton>
    </div>
  );
};
