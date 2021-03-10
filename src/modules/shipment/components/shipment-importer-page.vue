<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shipment' }">
        <app-i18n code="entities.shipment.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.shipment.importer.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.shipment.importer.title"></app-i18n>
      </h1>

      <app-importer storePath="shipment/importer"></app-importer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-shipment-importer-page',
};
</script>

<style>
</style>
