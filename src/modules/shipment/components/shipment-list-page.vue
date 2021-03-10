<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.shipment.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.shipment.list.title"></app-i18n>
      </h1>

      <app-shipment-list-toolbar></app-shipment-list-toolbar>
      <app-shipment-list-filter></app-shipment-list-filter>
      <app-shipment-list-table></app-shipment-list-table>
    </div>
  </div>
</template>

<script>
import ShipmentListFilter from '@/modules/shipment/components/shipment-list-filter.vue';
import ShipmentListTable from '@/modules/shipment/components/shipment-list-table.vue';
import ShipmentListToolbar from '@/modules/shipment/components/shipment-list-toolbar.vue';

export default {
  name: 'app-shipment-list-page',

  components: {
    [ShipmentListFilter.name]: ShipmentListFilter,
    [ShipmentListTable.name]: ShipmentListTable,
    [ShipmentListToolbar.name]: ShipmentListToolbar,
  },
};
</script>

<style>
</style>
