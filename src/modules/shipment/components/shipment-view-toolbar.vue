<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: `/shipment/${record.id}/edit` }" v-if="record && hasPermissionToEdit">
      <el-button icon="el-icon-fa-edit" type="primary">
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      :disabled="destroyLoading"
      @click="doDestroyWithConfirm"
      icon="el-icon-fa-trash"
      type="danger"
      v-if="record && hasPermissionToDestroy"
    >
      <app-i18n code="common.destroy"></app-i18n>
    </el-button>

    <router-link
      :to="{ path: '/audit-logs', query: { entityId: record.id } }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script>
  import { ShipmentPermissions } from '@/modules/shipment/shipment-permissions';
  import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
  import { mapGetters, mapActions } from 'vuex';
  import { i18n } from '@/i18n';

  export default {
    name: 'app-shipment-view-toolbar',

    computed: {
      ...mapGetters({
        currentUser: 'auth/currentUser',
        record: 'shipment/view/record',
        loading: 'shipment/view/loading',
        destroyLoading: 'shipment/destroy/loading',
      }),

      hasPermissionToEdit() {
        return new ShipmentPermissions(this.currentUser).edit;
      },

      hasPermissionToImport() {
        return new ShipmentPermissions(this.currentUser).import;
      },

      hasPermissionToDestroy() {
        return new ShipmentPermissions(this.currentUser).destroy;
      },

      hasPermissionToAuditLogs() {
        return new AuditLogPermissions(this.currentUser).read;
      },
    },

    methods: {
      ...mapActions({
        doDestroy: 'shipment/destroy/doDestroy',
      }),

      async doDestroyWithConfirm() {
        try {
          await this.$confirm(i18n('common.areYouSure'), i18n('common.confirm'), {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          });

          return this.doDestroy(this.record.id);
        } catch (error) {
          // no
        }
      },
    },
  };
</script>

<style>
</style>
