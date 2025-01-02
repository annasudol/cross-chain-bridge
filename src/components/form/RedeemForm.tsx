import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { MyAlert } from '@/components/MyAlert';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadVault';
import { useRedeemToken } from '@/hooks/useRedeemToken';
import type { IStorage } from '@/types';

import { SubmitButton } from '../button/SubmitButton';

export const RedeemForm = () => {
  const { token } = useReadData();
  const { chain, address } = useAccount();
  const [txToRedeem, setTxToRedeem] = React.useState<IStorage>();
  const [txSwapHash, setTxSwapHash] = React.useState<string>();
  const { handleRedeem, tx, statusWrite } = useRedeemToken();
  const { localstoragestate, setStorageValue } = useLocalStorage(
    `redeem-${[chain?.id]}`,
  );

  useEffect(() => {
    if (localstoragestate) {
      const results = localstoragestate.filter(
        (v: IStorage) => v.address === address,
      );

      if (results && results.length > 0) {
        setTxToRedeem(results[results.length - 1]);
      }
    }
  }, [localstoragestate, address]);

  useEffect(() => {
    if (tx && statusWrite.isSuccess && txSwapHash && address) {
      console.log('txSwapHash', txSwapHash);
      // Remove the successful transaction from local storage
      setStorageValue(address, txSwapHash);

      // Optionally, perform any additional state updates here
    } else {
      console.log('txSwapHash', txSwapHash);
      console.log('tx', tx);
      console.log('statusWrite.isSuccess', statusWrite);
    }
  }, [tx, statusWrite.isSuccess]);

  const handleToRedeem = (v: IStorage) => {
    setTxSwapHash(v.txHash);
    handleRedeem(v);
  };

  if (!txToRedeem) {
    return (
      <div className="mb-12">
        <MyAlert title="No transactions to redeem" type="warning" />
      </div>
    );
  }
  return (
    <div>
      <SubmitButton
        onPress={() => handleToRedeem(txToRedeem)}
        isLoading={statusWrite.isLoading}
        className="my-2"
      >
        Redeem {txToRedeem.amount} {token?.value?.symbol}
      </SubmitButton>
    </div>
  );
};
