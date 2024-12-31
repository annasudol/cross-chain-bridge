import { number, object } from 'yup';

export const BridgeFormSchema = object().shape({
  amount: number()
    .required()
    .min(0, 'Must be more than 0')
    .max(10, 'Must be less than 1000000')
    .positive(),
});
