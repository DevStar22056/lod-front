<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.sku.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sku.list.title"></app-i18n>
      </h1>

      <app-sku-list-toolbar></app-sku-list-toolbar>
      <app-sku-list-filter></app-sku-list-filter>
      <app-sku-list-table></app-sku-list-table>
    </div>
  </div>
</template>

<script>
import SkuListFilter from '@/modules/sku/components/sku-list-filter.vue';
import SkuListTable from '@/modules/sku/components/sku-list-table.vue';
import SkuListToolbar from '@/modules/sku/components/sku-list-toolbar.vue';

export default {
  name: 'app-sku-list-page',

  components: {
    [SkuListFilter.name]: SkuListFilter,
    [SkuListTable.name]: SkuListTable,
    [SkuListToolbar.name]: SkuListToolbar,
  },
};
</script>

<style>
</style>
