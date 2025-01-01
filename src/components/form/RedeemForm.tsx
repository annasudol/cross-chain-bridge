import React, { useMemo } from 'react';
import { useAccount } from 'wagmi';

import { MyAlert } from '@/components/MyAlert';
import { TxLink } from '@/components/TxLink';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useReadData } from '@/hooks/useReadVault';
import { useRedeemToken } from '@/hooks/useRedeemToken';

import { SubmitButton } from '../button/SubmitButton';

export const RedeemForm = () => {
  const { token } = useReadData();
  const { chain, address } = useAccount();
  // const [txRedeemed, setTxRedeemed] = useState<IStorage>();

  const { handleRedeem, tx, statusWrite } = useRedeemToken();
  const { localstoragestate } = useLocalStorage(`redeem-${[chain?.id]}`);

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

    if (!redeemState) {
      return (
        <div className="mb-12">
          <MyAlert message="No transactions to redeem" color="warning" />
        </div>
      );
    }
    return redeemState.map((v) => (
      <SubmitButton
        key={v.txHash}
        onPress={() => handleRedeem(v)}
        isLoading={statusWrite.isLoading}
      >
        Redeem {v.amount} {token.value?.symbol}
      </SubmitButton>
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain?.id, localstoragestate, address]);

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
