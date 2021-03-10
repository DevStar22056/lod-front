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
        <app-i18n code="entities.shipment.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.shipment.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.shipment.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.shipment.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-shipment-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ShipmentForm from '@/modules/shipment/components/shipment-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-shipment-form-page',

  props: ['id'],

  components: {
    [ShipmentForm.name]: ShipmentForm,
  },

  computed: {
    ...mapGetters({
      record: 'shipment/form/record',
      findLoading: 'shipment/form/findLoading',
      saveLoading: 'shipment/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'shipment/form/doFind',
      doNew: 'shipment/form/doNew',
      doUpdate: 'shipment/form/doUpdate',
      doCreate: 'shipment/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/shipment');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
