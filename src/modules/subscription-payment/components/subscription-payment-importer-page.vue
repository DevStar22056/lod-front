<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/subscription-payment' }">
        <app-i18n code="entities.subscriptionPayment.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.subscriptionPayment.importer.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.subscriptionPayment.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="subscriptionPayment/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-subscription-payment-importer-page',
};
</script>

<style>
</style>
