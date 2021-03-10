import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const MemberListPage = () =>
  import('@/modules/member/components/member-list-page.vue');
const MemberFormPage = () =>
  import('@/modules/member/components/member-form-page.vue');
const MemberViewPage = () =>
  import('@/modules/member/components/member-view-page.vue');
const MemberImporterPage = () =>
  import('@/modules/member/components/member-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'member',
        path: '/member',
        component: MemberListPage,
        meta: {
          auth: true,
          permission: Permissions.values.memberView,
        },
      },
      {
        name: 'memberNew',
        path: '/member/new',
        component: MemberFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.memberCreate,
        },
      },
      {
        name: 'memberImporter',
        path: '/member/import',
        component: MemberImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.memberImport,
        },
      },
      {
        name: 'memberEdit',
        path: '/member/:id/edit',
        component: MemberFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.memberEdit,
        },
        props: true,
      },
      {
        name: 'memberView',
        path: '/member/:id',
        component: MemberViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.memberView,
        },
        props: true,
      },
    ],
  },
];
