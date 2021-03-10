import skuListStore from '@/modules/sku/sku-list-store';
import skuViewStore from '@/modules/sku/sku-view-store';
import skuImporterStore from '@/modules/sku/sku-importer-store';
import skuFormStore from '@/modules/sku/sku-form-store';
import skuDestroyStore from '@/modules/sku/sku-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: skuDestroyStore,
    form: skuFormStore,
    list: skuListStore,
    view: skuViewStore,
    importer: skuImporterStore,
  },
};
