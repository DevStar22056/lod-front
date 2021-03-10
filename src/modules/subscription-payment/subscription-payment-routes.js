import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const SubscriptionPaymentListPage = () =>
  import('@/modules/subscription-payment/components/subscription-payment-list-page.vue');
const SubscriptionPaymentFormPage = () =>
  import('@/modules/subscription-payment/components/subscription-payment-form-page.vue');
const SubscriptionPaymentViewPage = () =>
  import('@/modules/subscription-payment/components/subscription-payment-view-page.vue');
const SubscriptionPaymentImporterPage = () =>
  import('@/modules/subscription-payment/components/subscription-payment-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'subscriptionPayment',
        path: '/subscription-payment',
        component: SubscriptionPaymentListPage,
        meta: {
          auth: true,
          permission: Permissions.values.subscriptionPaymentView,
        },
      },
      {
        name: 'subscriptionPaymentNew',
        path: '/subscription-payment/new',
        component: SubscriptionPaymentFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.subscriptionPaymentCreate,
        },
      },
      {
        name: 'subscriptionPaymentImporter',
        path: '/subscription-payment/import',
        component: SubscriptionPaymentImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.subscriptionPaymentImport,
        },
      },
      {
        name: 'subscriptionPaymentEdit',
        path: '/subscription-payment/:id/edit',
        component: SubscriptionPaymentFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.subscriptionPaymentEdit,
        },
        props: true,
      },
      {
        name: 'subscriptionPaymentView',
        path: '/subscription-payment/:id',
        component: SubscriptionPaymentViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.subscriptionPaymentView,
        },
        props: true,
      },
    ],
  },
];
