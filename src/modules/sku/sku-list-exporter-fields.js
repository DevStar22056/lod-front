import { SkuModel } from '@/modules/sku/sku-model';

const { fields } = SkuModel;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.photos,
  fields.createdAt
];
