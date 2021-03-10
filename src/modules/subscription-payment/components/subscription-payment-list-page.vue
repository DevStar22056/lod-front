<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.subscriptionPayment.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.subscriptionPayment.list.title"></app-i18n>
      </h1>

      <app-subscription-payment-list-toolbar></app-subscription-payment-list-toolbar>
      <app-subscription-payment-list-filter></app-subscription-payment-list-filter>
      <app-subscription-payment-list-table></app-subscription-payment-list-table>
    </div>
  </div>
</template>

<script>
  import SubscriptionPaymentListFilter from '@/modules/subscription-payment/components/subscription-payment-list-filter.vue';
  import SubscriptionPaymentListTable from '@/modules/subscription-payment/components/subscription-payment-list-table.vue';
  import SubscriptionPaymentListToolbar from '@/modules/subscription-payment/components/subscription-payment-list-toolbar.vue';

  export default {
    name: 'app-subscription-payment-list-page',

    components: {
      [SubscriptionPaymentListFilter.name]: SubscriptionPaymentListFilter,
      [SubscriptionPaymentListTable.name]: SubscriptionPaymentListTable,
      [SubscriptionPaymentListToolbar.name]: SubscriptionPaymentListToolbar,
    },
  };
</script>

<style>
</style>
