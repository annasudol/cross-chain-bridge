import React, { useEffect, useMemo } from 'react';
import { useAccount } from 'wagmi';

import { MyAlert } from '@/components/MyAlert';
import { TxLink } from '@/components/TxLink';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadVault';
import { useRedeemToken } from '@/hooks/useRedeemToken';
import type { IStorage } from '@/types';

import { SubmitButton } from '../button/SubmitButton';

export const RedeemForm = () => {
  const { token } = useReadData();
  const { chain, address } = useAccount();
  const [txSwapHash, setTxSwapHash] = React.useState<string>();
  const { handleRedeem, tx, statusWrite } = useRedeemToken();
  const { localstoragestate, removeStorageValue } = useLocalStorage(
    `redeem-${[chain?.id]}`,
  );

  useEffect(() => {
    if (tx && statusWrite.isSuccess && txSwapHash) {
      // Remove the successful transaction from local storage
      removeStorageValue(txSwapHash);

      // Optionally, perform any additional state updates here
    }
  }, [tx, statusWrite.isSuccess, removeStorageValue]);

  const handleToRedeem = (v: IStorage) => {
    setTxSwapHash(v.txHash);
    handleRedeem(v);
  };

  const redeemBtn = useMemo(() => {
    const redeemByAccount = localstoragestate?.filter(
      (x) => x.address === address,
    );
    const redeemState =
      redeemByAccount && redeemByAccount?.length > 3
        ? redeemByAccount.slice(
            redeemByAccount.length - 4,
            redeemByAccount.length - 1,
          )
        : redeemByAccount;

    if (!redeemState || redeemState.length === 0) {
      return (
        <div className="mb-12">
          <MyAlert message="No transactions to redeem" color="warning" />
        </div>
      );
    }
    return redeemState.map((v) => (
      <SubmitButton
        key={v.txHash}
        onPress={() => handleToRedeem(v)}
        isLoading={statusWrite.isLoading}
        className="my-2"
      >
        Redeem {v.amount} {token?.value?.symbol}
      </SubmitButton>
    ));
  }, [
    chain?.id,
    localstoragestate,
    address,
    handleRedeem,
    statusWrite.isLoading,
  ]);

  return (
    <div>
      {redeemBtn}
      {tx && statusWrite.isSuccess && (
        <MyAlert
          message="Transaction is successful"
          color="success"
          description={<TxLink txHash={tx} />}
        />
      )}
    </div>
  );
};
