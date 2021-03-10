import { ShipmentModel } from '@/modules/shipment/shipment-model';

const { fields } = ShipmentModel;

export default [fields.sku, fields.shipped, fields.member, fields.trackingId];
