import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const SkuListPage = () =>
  import('@/modules/sku/components/sku-list-page.vue');
const SkuFormPage = () =>
  import('@/modules/sku/components/sku-form-page.vue');
const SkuViewPage = () =>
  import('@/modules/sku/components/sku-view-page.vue');
const SkuImporterPage = () =>
  import('@/modules/sku/components/sku-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'sku',
        path: '/sku',
        component: SkuListPage,
        meta: {
          auth: true,
          permission: Permissions.values.skuView,
        },
      },
      {
        name: 'skuNew',
        path: '/sku/new',
        component: SkuFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.skuCreate,
        },
      },
      {
        name: 'skuImporter',
        path: '/sku/import',
        component: SkuImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.skuImport,
        },
      },
      {
        name: 'skuEdit',
        path: '/sku/:id/edit',
        component: SkuFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.skuEdit,
        },
        props: true,
      },
      {
        name: 'skuView',
        path: '/sku/:id',
        component: SkuViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.skuView,
        },
        props: true,
      },
    ],
  },
];
