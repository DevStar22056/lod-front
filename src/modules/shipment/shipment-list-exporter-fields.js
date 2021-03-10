import { ShipmentModel } from '@/modules/shipment/shipment-model';

const { fields } = ShipmentModel;

export default [
  fields.id,
  fields.sku,
  fields.shipped,
  fields.member,
  fields.trackingId,
  fields.notes,
  fields.createdAt,
];
