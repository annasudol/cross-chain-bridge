import { Formik } from 'formik';
import React from 'react';

import { useReadData } from '@/hooks/useReadVault';

import MyButton from '../button/MyButton';
import { TokenTinput } from '../inputs/TokenTinput';

export const BridgeForm = () => {
  const { balance, sybmol } = useReadData();

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
            alert(JSON.stringify(values, null, 2));
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
              label={sybmol.value || 'sETH'}
              labelPlacement="outside"
              name="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
              isInvalid={Boolean(errors.value && touched.value)}
              errorMessage={errors.value}
              disabled={isSubmitting || !sybmol.value || !balance.value}
              max={balance.value?.int}
            />

            <MyButton
              type="submit"
              disabled={isSubmitting}
              size="lg"
              variant="solid"
              className="mt-12 px-12"
            >
              {`Swap ${values.value} ${sybmol.value} to ${values.value}
              ${sybmol.value === 'sETH' ? 'sBCS' : 'sETH'}`}
            </MyButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

// import { Button } from '@nextui-org/button';
// import { Input } from '@nextui-org/react';
// import { Formik } from 'formik';
// import { useCallback } from 'react';

// import { useReadData } from '@/hooks/useReadVault';
// import { BridgeFormSchema } from '@/validations/schemas';

// interface FormType {
//   value: string;
// }

// export const BridgeForm = () => {
//   const { balance, sybmol } = useReadData();

//   const initialValues = {
//     value: '0.01',
//   };

//   const handleSubmit2 = useCallback(async (values: FormType) => {
//     console.log(values, 'values');

//     // `values` contains email & password. You can use provider to connect user
//   }, []);

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={BridgeFormSchema}
//       onSubmit={handleSubmit2}
//     >
//       {({ values, errors, touched, handleChange, handleSubmit }) => (
//         <>
//           <div className="mb-4 flex w-1/2 flex-col gap-4">
//             <Input
//               variant="bordered"
//               label={'sETH'}
//               type="number"
//               value={'sETH'}
//               isInvalid={!!errors.value && !!touched.value}
//               errorMessage={errors.value}
//               onChange={handleChange(sybmol?.value || 'sETH')}
//             />
//           </div>

//           <Button onPress={() => handleSubmit()} color="primary">
//             Login
//           </Button>
//         </>
//       )}
//     </Formik>
//   );
// };
