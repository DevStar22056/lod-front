import { SubscriptionPaymentService } from '@/modules/subscription-payment/subscription-payment-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class SubscriptionPaymentField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/subscription-payment',
      Permissions.values.subscriptionPaymentRead,
      SubscriptionPaymentService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.stripeInvoice,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/subscription-payment',
      Permissions.values.subscriptionPaymentRead,
      SubscriptionPaymentService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        let object = JSON.parse(record.stripeInvoice);
        let date = new Date(object.date * 1000);
        console.log(object);

        return {
          id: record.id,
          label: `${object.id} ($${object.total /
            100} ${date.toLocaleDateString()} - ${
            object.status
          })`,
        };
      },
      options,
    );
  }
}
