import * as yup from 'yup';
import moment from 'moment';
export default class ExporterSchema {
  constructor(fields) {
    this.fields = fields;
    this.yupSchema = this.buildSchema();
  }

  get labels() {
    return this.fields.map((field) => field.label);
  }

  labelOf(name) {
    const field = this.fields.find((field) => field.name === name);

    if (field) {
      return field.label;
    }

    if (name == 'memberName') return 'Name';
    if (name == 'memberProfileEmail') return 'Email';
    if (name == 'memberShippingAddress1') return 'Address1';
    if (name == 'memberShippingAddress2') return 'Address2';
    if (name == 'memberShippingAddressCity') return 'City';
    if (name == 'memberShippingAddressState') return 'StateOrProvince';
    if (name == 'memberShippingAddressZip') return 'Zip';
    if (name == 'memberShippingAddressCountry') return 'Country';
    if (name == 'memberProfileSpecialization') return 'Specialization';
    if (name == 'memberStripeSubscriptionStartedAt') return 'SubscriptionStarted';
    return name;
  }

  buildSchema() {
    const shape = {};

    this.fields.forEach((field) => {
      shape[field.name] = field.forExport();
    });

    return yup
      .object()
      .shape(shape)
      .noUnknown(true);
  }

  cast(row) {
    const result = this.yupSchema.cast(row);
    if ('sku' in result) {
      let sku = '';
      for (let item of row['sku']) {
        let label;
        if (item.shipmentSku && item.shipmentSku.quantity) label = `${item.shipmentSku.quantity} x ${item.name}`;
        else label = item.name;
        sku += label + `, `;
      }
      if (sku) sku = sku.slice(0, -2);

      result.sku = sku;
    }

    if ('member' in result) {
      result.memberName = row.member.name;
      result.memberShippingAddress1 = row.member.shippingAddress1;
      result.memberShippingAddress2 = row.member.shippingAddress2;
      result.memberShippingAddressCity = row.member.shippingAddressCity;
      result.memberShippingAddressState = row.member.shippingAddressState;
      result.memberShippingAddressZip = row.member.shippingAddressZip;
      result.memberShippingAddressCountry = row.member.shippingAddressCountry;
      result.memberProfileEmail = row.member.profileEmail;
      result.memberProfileSpecialization = row.member.profileSpecialization;
      result.memberStripeSubscriptionStartedAt = moment(row.member.stripeSubscriptionStartedAt).format('YYYY-MM-DD');
    }

    return result;
  }
}
