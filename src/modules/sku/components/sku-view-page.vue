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
        <app-i18n code="entities.sku.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.sku.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-sku-view-toolbar v-if="record"></app-sku-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.year.label" :value="presenter(record, 'year')"></app-view-item-text>

        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.description.label" :value="presenter(record, 'description')"></app-view-item-text>

        <app-view-item-image :label="fields.photos.label" :value="presenter(record, 'photos')"></app-view-item-image>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SkuViewToolbar from '@/modules/sku/components/sku-view-toolbar.vue';
import { SkuModel } from '@/modules/sku/sku-model';

const { fields } = SkuModel;

export default {
  name: 'app-sku-view-page',

  props: ['id'],

  components: {
    [SkuViewToolbar.name]: SkuViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'sku/view/record',
      loading: 'sku/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'sku/view/doFind',
    }),

    presenter(record, fieldName) {
      return SkuModel.presenter(record, fieldName);
    },
  },
};
</script>
