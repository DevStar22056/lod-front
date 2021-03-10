import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import BooleanField from '@/shared/fields/boolean-field';
import { SkuField } from '@/modules/sku/sku-field';
import { MemberField } from '@/modules/member/member-field';

function label(name) {
  return i18n(`entities.shipment.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  sku: SkuField.relationToMany('sku', label('sku'), {
    required: true,
    min: 1,
  }),
  shipped: new BooleanField('shipped', label('shipped')),
  member: MemberField.relationToOne('member', label('member'), {
    required: true,
  }),
  shipmentYear: new IntegerField('shipmentYear', label('shipmentYear'), {
    required: true,
    min: 2019,
    max: 2030,
  }),
  stripeSubscriptionStartedAt: new DateTimeField('stripeSubscriptionStartedAt', 'Subscription Started'),
  trackingId: new StringField('trackingId', label('trackingId'), {}),
  notes: new StringField('notes', label('notes'), {}),
  createdAt: new DateTimeField('createdAt', label('createdAt')),
  updatedAt: new DateTimeField('updatedAt', label('updatedAt')),
  createdAtRange: new DateTimeRangeField('createdAtRange', label('createdAtRange')),
  shipmentYearRange: new IntegerRangeField('shipmentYearRange', label('shipmentYearRange')),
};

export class ShipmentModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
