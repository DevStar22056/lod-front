<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/sku' }">
        <app-i18n code="entities.sku.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.sku.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.sku.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sku.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.sku.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-sku-form
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
import SkuForm from '@/modules/sku/components/sku-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-sku-form-page',

  props: ['id'],

  components: {
    [SkuForm.name]: SkuForm,
  },

  computed: {
    ...mapGetters({
      record: 'sku/form/record',
      findLoading: 'sku/form/findLoading',
      saveLoading: 'sku/form/saveLoading',
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
      doFind: 'sku/form/doFind',
      doNew: 'sku/form/doNew',
      doUpdate: 'sku/form/doUpdate',
      doCreate: 'sku/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/sku');
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
