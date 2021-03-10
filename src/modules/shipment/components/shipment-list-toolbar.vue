<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: '/shipment/new' }" v-if="hasPermissionToCreate">
      <el-button icon="el-icon-fa-plus" type="primary">
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>

    <!-- <router-link :to="{ path: '/shipment/import' }" v-if="hasPermissionToImport">
      <el-button icon="el-icon-fa-upload" type="primary">
        <app-i18n code="common.import"></app-i18n>
      </el-button>
    </router-link> -->

    <el-tooltip :content="destroyButtonTooltip" :disabled="!destroyButtonTooltip" v-if="hasPermissionToDestroy">
      <span>
        <el-button
          :disabled="destroyButtonDisabled"
          @click="doDestroyAllSelected"
          icon="el-icon-fa-trash"
          type="danger"
        >
          <app-i18n code="common.destroy"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <el-tooltip
      :content="shipButtonTooltip"
      :disabled="!shipButtonTooltip"
      v-if="hasPermissionToShip"
      style="float:right"
    >
      <span>
        <el-button :disabled="shipButtonDisabled" @click="doShipAllSelected" icon="el-icon-fa-check" type="primary">
          <app-i18n code="entities.shipment.markAsShippedLabel"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <router-link :to="{ path: '/audit-logs', query: { entityNames: 'shipment' } }" v-if="hasPermissionToAuditLogs">
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip :content="exportButtonTooltip" :disabled="!exportButtonTooltip">
      <span>
        <el-button :disabled="exportButtonDisabled" @click="doExport()" icon="el-icon-fa-file-excel-o">
          <app-i18n code="common.export"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>
  </div>
</template>

<script>
  import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
  import { mapGetters, mapActions } from 'vuex';
  import { ShipmentPermissions } from '@/modules/shipment/shipment-permissions';
  import { i18n } from '@/i18n';

  export default {
    name: 'app-shipment-list-toolbar',

    computed: {
      ...mapGetters({
        currentUser: 'auth/currentUser',
        hasRows: 'shipment/list/hasRows',
        loading: 'shipment/list/loading',
        exportLoading: 'shipment/list/exportLoading',
        selectedRows: 'shipment/list/selectedRows',
        destroyLoading: 'shipment/destroy/loading',
        shipLoading: 'shipment/ship/loading',
      }),

      hasPermissionToAuditLogs() {
        return new AuditLogPermissions(this.currentUser).read;
      },

      hasPermissionToCreate() {
        return new ShipmentPermissions(this.currentUser).create;
      },

      hasPermissionToEdit() {
        return new ShipmentPermissions(this.currentUser).edit;
      },

      hasPermissionToImport() {
        return new ShipmentPermissions(this.currentUser).import;
      },

      hasPermissionToDestroy() {
        return new ShipmentPermissions(this.currentUser).destroy;
      },

      hasPermissionToShip() {
        return new ShipmentPermissions(this.currentUser).ship;
      },

      exportButtonDisabled() {
        return !this.hasRows || this.loading || this.exportLoading;
      },

      exportButtonTooltip() {
        return !this.hasRows ? i18n('common.noDataToExport') : null;
      },

      removeButtonDisabled() {
        return !this.selectedRows.length || this.loading;
      },

      removeButtonTooltip() {
        return !this.selectedRows.length ? i18n('common.mustSelectARow') : null;
      },

      enableButtonDisabled() {
        return !this.selectedRows.length || this.loading;
      },

      enableButtonTooltip() {
        return !this.selectedRows.length ? i18n('common.mustSelectARow') : null;
      },

      disableButtonDisabled() {
        return !this.selectedRows.length || this.loading;
      },

      disableButtonTooltip() {
        return !this.selectedRows.length ? i18n('common.mustSelectARow') : null;
      },

      destroyButtonDisabled() {
        return !this.selectedRows.length || this.loading || this.destroyLoading;
      },

      destroyButtonTooltip() {
        if (!this.selectedRows.length || this.loading) {
          return i18n('common.mustSelectARow');
        }

        return null;
      },

      shipButtonDisabled() {
        return !this.selectedRows.length || this.loading || this.shipLoading;
      },

      shipButtonTooltip() {
        if (!this.selectedRows.length || this.loading) {
          return i18n('common.mustSelectARow');
        }

        return null;
      },
    },

    methods: {
      ...mapActions({
        doExport: 'shipment/list/doExport',
        doRemoveAllSelected: 'shipment/list/doRemoveAllSelected',
        doDisableAllSelected: 'shipment/list/doDisableAllSelected',
        doEnableAllSelected: 'shipment/list/doEnableAllSelected',
        doDestroyAll: 'shipment/destroy/doDestroyAll',
        doShipAll: 'shipment/ship/doShipAll',
      }),

      async doShipAllSelected() {
        try {
          await this.$confirm(
            i18n('entities.shipment.markShipmentAsShippedConfirm', this.selectedRows.length),
            i18n('common.confirm'),
            {
              confirmButtonText: i18n('common.yes'),
              cancelButtonText: i18n('common.no'),
              type: 'warning',
            },
          );

          return this.doShipAll(this.selectedRows.map((item) => item.id));
        } catch (error) {
          // no
        }
      },

      async doDestroyAllSelected() {
        try {
          await this.$confirm(i18n('common.areYouSure'), i18n('common.confirm'), {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          });

          return this.doDestroyAll(this.selectedRows.map((item) => item.id));
        } catch (error) {
          // no
        }
      },
    },
  };
</script>

<style>
</style>
