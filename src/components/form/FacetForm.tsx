import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { SubmitButton } from '@/components/button/SubmitButton';
import { MyAlert } from '@/components/MyAlert';
import { useFacetToken } from '@/hooks/useFacetToken';
import { useReadData } from '@/hooks/useReadVault';
import type { ChainID } from '@/types';

export const FacetForm = () => {
  const { token, handleRefetchBalance } = useReadData();
  const { chain } = useAccount();

  const { handleFacet, tx, statusWrite } = useFacetToken();

  useEffect(() => {
    if (tx && statusWrite.isSuccess) {
      handleRefetchBalance();
    }
  }, [tx, statusWrite]);

  if (tx && statusWrite.isSuccess && chain?.id) {
    return (
      <div>
        <MyAlert
          title="Transaction is successful"
          type="success"
          tx={{ href: tx, chainid: chain.id as ChainID }}
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
        className="mt-12 px-12"
      >
        {`Click to receive ${token.value?.symbol}`}
      </SubmitButton>
    </div>
  );
};
