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
        :label="fields.profileImage.label"
        :prop="fields.profileImage.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'profileImage')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :label="fields.name.label" :prop="fields.name.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.membershipYear.label"
        :prop="fields.membershipYear.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'membershipYear') }}</template>
      </el-table-column>

      <el-table-column :label="fields.status.label" :prop="fields.status.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'status') }}</template>
      </el-table-column>

      <el-table-column :label="fields.subscriptionStatus.label" :prop="fields.subscriptionStatus.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'subscriptionStatus') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.subscriptionLevel.label"
        :prop="fields.subscriptionLevel.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'subscriptionLevel') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.subscriptionRenewsAt.label"
        :prop="fields.subscriptionRenewsAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{
          presenter(scope.row, 'subscriptionRenewsAt')
        }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile ? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/member/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/member/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
  import { MemberModel } from '@/modules/member/member-model';
  import { mapGetters, mapActions } from 'vuex';
  import { MemberPermissions } from '@/modules/member/member-permissions';
  import { i18n } from '@/i18n';

  const { fields } = MemberModel;

  export default {
    name: 'app-member-list-table',

    mounted() {
      this.doMountTable(this.$refs.table);
    },

    computed: {
      ...mapGetters({
        rows: 'member/list/rows',
        count: 'member/list/count',
        loading: 'member/list/loading',
        pagination: 'member/list/pagination',
        isMobile: 'layout/isMobile',
        currentUser: 'auth/currentUser',
        destroyLoading: 'member/destroy/loading',
        paginationLayout: 'layout/paginationLayout',
        pageSize: 'member/list/limit',
      }),

      hasPermissionToEdit() {
        return new MemberPermissions(this.currentUser).edit;
      },

      hasPermissionToDestroy() {
        return new MemberPermissions(this.currentUser).destroy;
      },

      fields() {
        return fields;
      },
    },

    methods: {
      ...mapActions({
        doChangeSort: 'member/list/doChangeSort',
        doChangePaginationCurrentPage: 'member/list/doChangePaginationCurrentPage',
        doChangePaginationPageSize: 'member/list/doChangePaginationPageSize',
        doMountTable: 'member/list/doMountTable',
        doDestroy: 'member/destroy/doDestroy',
      }),

      presenter(row, fieldName) {
        return MemberModel.presenter(row, fieldName);
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
