import importerStore from '@/shared/importer/importer-store';
import { SubscriptionPaymentService } from '@/modules/subscription-payment/subscription-payment-service';
import subscriptionPaymentImporterFields from '@/modules/subscription-payment/subscription-payment-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  SubscriptionPaymentService.import,
  subscriptionPaymentImporterFields,
  i18n('entities.subscriptionPayment.importer.fileName'),
  i18n('entities.subscriptionPayment.importer.hint'),
);
