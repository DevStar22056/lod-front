import importerStore from '@/shared/importer/importer-store';
import { SkuService } from '@/modules/sku/sku-service';
import skuImporterFields from '@/modules/sku/sku-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  SkuService.import,
  skuImporterFields,
  i18n('entities.sku.importer.fileName'),
  i18n('entities.sku.importer.hint'),
);
