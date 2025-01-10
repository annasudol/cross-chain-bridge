import React from 'react';

import { SubmitButton } from '@/components/button/SubmitButton';
import { Loading } from '@/components/Loading';
import { TxAlert } from '@/components/TxAlert';
import { useMintMutation } from '@/hooks/mutations/useMintMutation';
import { useReadData } from '@/hooks/useReadData';
import { useTransactionManager } from '@/providers/TransactionProvider';

export const FacetForm = () => {
  const { token } = useReadData();
  const tokenSymbol = token.value?.symbol;

  const { mutateAsync: handleFacet, isPending } = useMintMutation();
  const { transaction } = useTransactionManager();
  if (transaction) {
    return <TxAlert {...transaction} />;
  }

  return (
    <>
      <div>
        {tokenSymbol && (
          <p className="text-sm text-gray-400">
            To request {tokenSymbol} funds, click button. You can request 1{' '}
            {tokenSymbol} every 24h!
          </p>
        )}
      </div>
      <div>
        <SubmitButton onPress={() => handleFacet()} isLoading={isPending}>
          {`Click to receive ${token.value?.symbol ? token.value?.symbol : <Loading dots={true} />}`}
        </SubmitButton>
      </div>
    </>
  );
};
