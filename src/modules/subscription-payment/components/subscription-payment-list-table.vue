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

      <el-table-column
        :label="fields.stripeInvoice.label"
        :prop="fields.stripeInvoice.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ JSON.parse(scope.row.stripeInvoice).id }}</template>
      </el-table-column>

      <el-table-column :label="fields.member.label" :prop="fields.member.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.member.label"
            :permission="fields.member.readPermission"
            :url="fields.member.viewUrl"
            :value="presenter(scope.row, 'member')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile ? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/subscription-payment/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/subscription-payment/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit"
            >
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
  import { SubscriptionPaymentModel } from '@/modules/subscription-payment/subscription-payment-model';
  import { mapGetters, mapActions } from 'vuex';
  import { SubscriptionPaymentPermissions } from '@/modules/subscription-payment/subscription-payment-permissions';
  import { i18n } from '@/i18n';

  const { fields } = SubscriptionPaymentModel;

  export default {
    name: 'app-subscription-payment-list-table',

    mounted() {
      this.doMountTable(this.$refs.table);
    },

    computed: {
      ...mapGetters({
        rows: 'subscriptionPayment/list/rows',
        count: 'subscriptionPayment/list/count',
        loading: 'subscriptionPayment/list/loading',
        pagination: 'subscriptionPayment/list/pagination',
        isMobile: 'layout/isMobile',
        currentUser: 'auth/currentUser',
        destroyLoading: 'subscriptionPayment/destroy/loading',
        paginationLayout: 'layout/paginationLayout',
        pageSize: 'subscriptionPayment/list/limit',
      }),

      hasPermissionToEdit() {
        return new SubscriptionPaymentPermissions(this.currentUser).edit;
      },

      hasPermissionToDestroy() {
        return new SubscriptionPaymentPermissions(this.currentUser).destroy;
      },

      fields() {
        return fields;
      },
    },

    methods: {
      ...mapActions({
        doChangeSort: 'subscriptionPayment/list/doChangeSort',
        doChangePaginationCurrentPage: 'subscriptionPayment/list/doChangePaginationCurrentPage',
        doChangePaginationPageSize: 'subscriptionPayment/list/doChangePaginationPageSize',
        doMountTable: 'subscriptionPayment/list/doMountTable',
        doDestroy: 'subscriptionPayment/destroy/doDestroy',
      }),

      presenter(row, fieldName) {
        return SubscriptionPaymentModel.presenter(row, fieldName);
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
