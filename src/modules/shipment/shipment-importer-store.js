import importerStore from '@/shared/importer/importer-store';
import { ShipmentService } from '@/modules/shipment/shipment-service';
import shipmentImporterFields from '@/modules/shipment/shipment-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ShipmentService.import,
  shipmentImporterFields,
  i18n('entities.shipment.importer.fileName'),
  i18n('entities.shipment.importer.hint'),
);
