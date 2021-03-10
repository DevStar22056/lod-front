import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ShipmentListPage = () =>
  import('@/modules/shipment/components/shipment-list-page.vue');
const ShipmentFormPage = () =>
  import('@/modules/shipment/components/shipment-form-page.vue');
const ShipmentViewPage = () =>
  import('@/modules/shipment/components/shipment-view-page.vue');
const ShipmentImporterPage = () =>
  import('@/modules/shipment/components/shipment-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'shipment',
        path: '/shipment',
        component: ShipmentListPage,
        meta: {
          auth: true,
          permission: Permissions.values.shipmentView,
        },
      },
      {
        name: 'shipmentNew',
        path: '/shipment/new',
        component: ShipmentFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.shipmentCreate,
        },
      },
      {
        name: 'shipmentImporter',
        path: '/shipment/import',
        component: ShipmentImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.shipmentImport,
        },
      },
      {
        name: 'shipmentEdit',
        path: '/shipment/:id/edit',
        component: ShipmentFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.shipmentEdit,
        },
        props: true,
      },
      {
        name: 'shipmentView',
        path: '/shipment/:id',
        component: ShipmentViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.shipmentView,
        },
        props: true,
      },
    ],
  },
];
