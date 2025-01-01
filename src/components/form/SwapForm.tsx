import { Formik } from 'formik';
import React from 'react';
import { useAccount } from 'wagmi';

import { SubmitButton } from '@/components/button/SubmitButton';
import { TokenTinput } from '@/components/inputs/TokenTinput';
import { MyAlert } from '@/components/MyAlert';
import { TxLink } from '@/components/TxLink';
import { useReadData } from '@/hooks/useReadVault';
import { useSwapToken } from '@/hooks/useSwapToken';

import { SwitchNetworkButton } from '../button/SwitchNetworkButton';
import { Loading } from '../Loading';

export const SwapForm = () => {
  const { balance, token } = useReadData();

  const { handleSwap, statusWrite, tx } = useSwapToken();

  const { chain } = useAccount();

  if (tx && statusWrite.isSuccess) {
    return (
      <div>
        <MyAlert
          message="Transaction is successful"
          color="success"
          description={<TxLink txHash={tx} />}
        />
        <SwitchNetworkButton>
          Click to change network to{' '}
          {[chain?.id === 97 ? 'Sepolia' : 'Binance']}
        </SwitchNetworkButton>
      </div>
    );
  }
  if (token.status.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Formik
        initialValues={{ value: '0' }}
        validate={(values) => {
          const errors: { value?: string } = {};
          if (!values.value) {
            errors.value = 'Required';
          } else if (Number(values.value) > Number(balance.value?.int)) {
            errors.value = 'Value cannot be higher than max value';
          }
          if (Number(values.value) <= 0) {
            errors.value = 'Value must be greater than 0';
          }
          const validValueRegex = /^0$|^[1-9]\d*(\.\d+)?$|^0\.\d+$/;
          if (!validValueRegex.test(values.value)) {
            errors.value = 'Value must be avalid number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSwap({ amount: values.value });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TokenTinput
              label={token.value?.symbol || 'sETH'}
              labelPlacement="outside"
              name="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
              isInvalid={Boolean(errors.value && touched.value)}
              errorMessage={errors.value}
              disabled={
                isSubmitting ||
                !token.value?.symbol ||
                !balance.value ||
                balance.value?.int === '0'
              }
              max={balance.value?.int}
            />

            <SubmitButton
              type="submit"
              isDisabled={
                isSubmitting ||
                statusWrite.isLoading ||
                balance.value?.int === '0'
              }
              isLoading={statusWrite.isLoading}
              className="mt-12 px-12"
            >
              {balance.value?.int === '0'
                ? `Not enough ${token.value?.symbol} balance`
                : `Swap ${values.value} ${token.value?.symbol} to ${values.value}
              ${token.value?.symbol === 'sETH' ? 'sBCS' : 'sETH'}`}
            </SubmitButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
