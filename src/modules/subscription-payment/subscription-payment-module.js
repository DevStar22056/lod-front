import routes from '@/modules/subscription-payment/subscription-payment-routes';
import store from '@/modules/subscription-payment/subscription-payment-store';
import SubscriptionPaymentAutocompleteInput from '@/modules/subscription-payment/components/subscription-payment-autocomplete-input';

export default {
  components: [SubscriptionPaymentAutocompleteInput],
  routes,
  store,
};
