<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column :label="fields.year.label" :prop="fields.year.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'year') }}</template>
      </el-table-column>

      <el-table-column :label="fields.name.label" :prop="fields.name.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column :label="fields.photos.label" :prop="fields.photos.name" align="center">
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'photos')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile ? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/sku/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/sku/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        :page-size="pageSize"
        :page-sizes="[10, 25, 50, 100, 1000, 10000]"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  import { SkuModel } from '@/modules/sku/sku-model';
  import { mapGetters, mapActions } from 'vuex';
  import { SkuPermissions } from '@/modules/sku/sku-permissions';
  import { i18n } from '@/i18n';

  const { fields } = SkuModel;

  export default {
    name: 'app-sku-list-table',

    mounted() {
      this.doMountTable(this.$refs.table);
    },

    computed: {
      ...mapGetters({
        rows: 'sku/list/rows',
        count: 'sku/list/count',
        loading: 'sku/list/loading',
        pagination: 'sku/list/pagination',
        isMobile: 'layout/isMobile',
        currentUser: 'auth/currentUser',
        destroyLoading: 'sku/destroy/loading',
        paginationLayout: 'layout/paginationLayout',
        pageSize: 'sku/list/limit',
      }),

      hasPermissionToEdit() {
        return new SkuPermissions(this.currentUser).edit;
      },

      hasPermissionToDestroy() {
        return new SkuPermissions(this.currentUser).destroy;
      },

      fields() {
        return fields;
      },
    },

    methods: {
      ...mapActions({
        doChangeSort: 'sku/list/doChangeSort',
        doChangePaginationCurrentPage: 'sku/list/doChangePaginationCurrentPage',
        doChangePaginationPageSize: 'sku/list/doChangePaginationPageSize',
        doMountTable: 'sku/list/doMountTable',
        doDestroy: 'sku/destroy/doDestroy',
      }),

      presenter(row, fieldName) {
        return SkuModel.presenter(row, fieldName);
      },

      async doDestroyWithConfirm(id) {
        try {
          await this.$confirm(i18n('common.areYouSure'), i18n('common.confirm'), {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          });

          return this.doDestroy(id);
        } catch (error) {
          // no
        }
      },
    },
  };
</script>

<style>
</style>
