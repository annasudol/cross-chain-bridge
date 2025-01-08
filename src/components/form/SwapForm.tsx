import type { FormikErrors } from 'formik';
import { Formik } from 'formik';
import React from 'react';
import { useAccount } from 'wagmi';

import MyButton, { ButtonLeftIcon } from '@/components/button/MyButton';
import { SubmitButton } from '@/components/button/SubmitButton';
import { SwitchNetworkButton } from '@/components/button/SwitchNetworkButton';
import { TokenTinput } from '@/components/inputs/TokenTinput';
import { Loading } from '@/components/Loading';
import { TxAlert } from '@/components/TxAlert';
import { useReadData } from '@/hooks/useReadVault';
import { useSwapToken } from '@/hooks/useSwapToken';

export const SwapForm = () => {
  const { balance, token } = useReadData();

  const { handleSwap, mutateStatus, hash, clearTransaction } = useSwapToken();
  const { chain } = useAccount();

  if (hash) {
    if (mutateStatus?.isLoading) {
      return (
        <div className="flex h-64 flex-col items-stretch">
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
        <div className="flex h-64 flex-col items-stretch">
          <TxAlert
            message="Swapping token failed"
            color="danger"
            hash={hash}
            chain={chain}
          />
          <MyButton
            iconLeft={ButtonLeftIcon.ArrowLeft}
            onPress={clearTransaction}
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
            message={`Swapping ${token.value?.symbol} token is successful. You have to change network and redeem token`}
            color="success"
            hash={hash}
            chain={chain}
          />
          <SwitchNetworkButton>
            Click to change network to{' '}
            {[chain?.id === 97 ? 'Sepolia' : 'Binance']}
          </SwitchNetworkButton>
        </div>
      );
    }
  }
  if (token.status.isLoading) {
    return <Loading />;
  }

  const getButtonText = (
    values: string,
    errors: FormikErrors<{ value: string }>,
  ) => {
    const tokenSymbol = token.value?.symbol;
    if (tokenSymbol) {
      if (balance.value?.int === '0') {
        return `Not enough ${tokenSymbol} balance`;
      }
      if (!errors.value) {
        return `Swap ${values} ${tokenSymbol}`;
      }
      return `Swap ... ${tokenSymbol}`;
    }
    return <Loading dots={true} />;
  };

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
          }, 4);
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
                Boolean(errors.value) ||
                balance.value?.int === '0'
              }
              isLoading={isSubmitting}
            >
              {getButtonText(values.value, errors)}
            </SubmitButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
