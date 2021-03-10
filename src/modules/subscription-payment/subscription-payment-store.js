import subscriptionPaymentListStore from '@/modules/subscription-payment/subscription-payment-list-store';
import subscriptionPaymentViewStore from '@/modules/subscription-payment/subscription-payment-view-store';
import subscriptionPaymentImporterStore from '@/modules/subscription-payment/subscription-payment-importer-store';
import subscriptionPaymentFormStore from '@/modules/subscription-payment/subscription-payment-form-store';
import subscriptionPaymentDestroyStore from '@/modules/subscription-payment/subscription-payment-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: subscriptionPaymentDestroyStore,
    form: subscriptionPaymentFormStore,
    list: subscriptionPaymentListStore,
    view: subscriptionPaymentViewStore,
    importer: subscriptionPaymentImporterStore,
  },
};
