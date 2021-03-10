import routes from '@/modules/sku/sku-routes';
import store from '@/modules/sku/sku-store';
import SkuAutocompleteInput from '@/modules/sku/components/sku-autocomplete-input';

export default {
  components: [SkuAutocompleteInput],
  routes,
  store,
};
