import { SubscriptionPaymentModel } from '@/modules/subscription-payment/subscription-payment-model';

const { fields } = SubscriptionPaymentModel;

export default [
  fields.stripeInvoice,
  fields.member,
];
