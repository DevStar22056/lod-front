<template>
  <el-aside :width="asideWidth">
    <h1 class="logo">
      <router-link to="/">
        <app-i18n code="app.title"></app-i18n>
      </router-link>
    </h1>

    <el-menu
      :class="{
        'el-menu-side-nav': true,
        collapsed: collapsed,
      }"
      :collapse="collapsed"
      :collapse-transition="false"
      :router="true"
      @select="collapseMenuIfMobile()"
    >
      <el-menu-item :class="classFor('/', true)" :route="{ path: '/' }" index="/">
        <i class="el-icon-fa-home"></i>
        <span slot="title">
          <app-i18n code="home.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/member')"
        :route="{ path: '/member' }"
        index="/member"
        v-if="hasPermissionToMember"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.member.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/shipment')"
        :route="{ path: '/shipment' }"
        index="/shipment"
        v-if="hasPermissionToShipment"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.shipment.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item :class="classFor('/sku')" :route="{ path: '/sku' }" index="/sku" v-if="hasPermissionToSku">
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.sku.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/subscription-payment')"
        :route="{ path: '/subscription-payment' }"
        index="/subscription-payment"
        v-if="hasPermissionToSubscriptionPayment"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.subscriptionPayment.menu"></app-i18n>
        </span>
      </el-menu-item>
      <el-menu-item :class="classFor('/iam')" :route="{ path: '/iam' }" index="/iam" v-if="hasPermissionToIam">
        <i class="el-icon-fa-user-plus"></i>
        <span slot="title">
          <app-i18n code="iam.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/audit-logs')"
        :route="{ path: '/audit-logs' }"
        index="/audit-logs"
        v-if="hasPermissionToAuditLog"
      >
        <i class="el-icon-fa-history"></i>
        <span slot="title">
          <app-i18n code="auditLog.menu"></app-i18n>
        </span>
      </el-menu-item>
      <el-menu-item
        :class="classFor('/settings')"
        :route="{ path: '/settings' }"
        index="/settings"
        v-if="hasPermissionToSettings"
      >
        <i class="el-icon-fa-cog"></i>
        <span slot="title">
          <app-i18n code="settings.menu"></app-i18n>
        </span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { SettingsPermissions } from '@/modules/settings/settings-permissions';
  import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
  import { IamPermissions } from '@/modules/iam/iam-permissions';
  import { MemberPermissions } from '@/modules/member/member-permissions';
  import { ShipmentPermissions } from '@/modules/shipment/shipment-permissions';
  import { SkuPermissions } from '@/modules/sku/sku-permissions';
  import { SubscriptionPaymentPermissions } from '@/modules/subscription-payment/subscription-payment-permissions';

  export default {
    name: 'app-menu',

    computed: {
      ...mapGetters({
        collapsed: 'layout/menuCollapsed',
        isMobile: 'layout/isMobile',
        currentUser: 'auth/currentUser',
      }),

      hasPermissionToSettings() {
        return new SettingsPermissions(this.currentUser).edit;
      },

      hasPermissionToAuditLog() {
        return new AuditLogPermissions(this.currentUser).read;
      },

      hasPermissionToIam() {
        return new IamPermissions(this.currentUser).read;
      },

      hasPermissionToMember() {
        return new MemberPermissions(this.currentUser).read;
      },
      hasPermissionToShipment() {
        return new ShipmentPermissions(this.currentUser).read;
      },
      hasPermissionToSku() {
        return new SkuPermissions(this.currentUser).read;
      },
      hasPermissionToSubscriptionPayment() {
        return new SubscriptionPaymentPermissions(this.currentUser).read;
      },

      asideWidth() {
        if (!this.collapsed) {
          return '200px';
        }

        return '0px';
      },
    },

    methods: {
      ...mapActions({
        collapseMenu: 'layout/collapseMenu',
      }),

      collapseMenuIfMobile() {
        if (this.isMobile) {
          this.collapseMenu();
        }
      },

      classFor(path, exact = false) {
        if (exact) {
          return {
            active: this.$route.path === path,
          };
        }

        return {
          active: this.$route.path.startsWith(path),
        };
      },
    },
  };
</script>

<style scoped>
.el-menu.collapsed span {
  visibility: hidden;
}
</style>
