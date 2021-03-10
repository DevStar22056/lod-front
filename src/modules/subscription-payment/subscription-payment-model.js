import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { MemberField } from '@/modules/member/member-field';

function label(name) {
  return i18n(
    `entities.subscriptionPayment.fields.${name}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  stripeInvoice: new StringField(
    'stripeInvoice',
    label('stripeInvoice'),
    {},
  ),
  member: MemberField.relationToOne(
    'member',
    label('member'),
    {},
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export class SubscriptionPaymentModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
