import routes from '@/modules/shipment/shipment-routes';
import store from '@/modules/shipment/shipment-store';
import ShipmentAutocompleteInput from '@/modules/shipment/components/shipment-autocomplete-input';

export default {
  components: [ShipmentAutocompleteInput],
  routes,
  store,
};
