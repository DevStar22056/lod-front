import shipmentListStore from '@/modules/shipment/shipment-list-store';
import shipmentViewStore from '@/modules/shipment/shipment-view-store';
import shipmentImporterStore from '@/modules/shipment/shipment-importer-store';
import shipmentFormStore from '@/modules/shipment/shipment-form-store';
import shipmentDestroyStore from '@/modules/shipment/shipment-destroy-store';
import shipmentShipStore from '@/modules/shipment/shipment-ship-store';

export default {
  namespaced: true,

  modules: {
    destroy: shipmentDestroyStore,
    form: shipmentFormStore,
    list: shipmentListStore,
    view: shipmentViewStore,
    importer: shipmentImporterStore,
    ship: shipmentShipStore,
  },
};
