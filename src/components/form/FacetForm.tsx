import React from 'react';

import { SubmitButton } from '@/components/button/SubmitButton';
import { MyAlert } from '@/components/MyAlert';
import { TxLink } from '@/components/TxLink';
import { useFacetToken } from '@/hooks/useFacetToken';
import { useReadData } from '@/hooks/useReadVault';

export const FacetForm = () => {
  const { token } = useReadData();

  const { handleFacet, tx, statusWrite } = useFacetToken();

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
        className="mt-12 px-12"
      >
        {`Click to receive ${token.value?.symbol}`}
      </SubmitButton>
      {/* <Formik
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
              disabled={isSubmitting || !token.value?.symbol || !balance.value}
              max={balance.value?.int}
            />

            <SubmitButton
              type="submit"
              disabled={isSubmitting || statusWrite.isLoading}
              isLoading={statusWrite.isLoading}
              className="mt-12 px-12"
            >
              {`Click to receive ${token.value?.symbol} 
              ${token.value?.symbol === 'sETH' ? 'sBCS' : 'sETH'}`}
            </SubmitButton>
          </form>
        )}
      </Formik>} */}
    </div>
  );
};
