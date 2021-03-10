<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/subscription-payment' }">
        <app-i18n code="entities.subscriptionPayment.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.subscriptionPayment.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.subscriptionPayment.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-subscription-payment-view-toolbar v-if="record"></app-subscription-payment-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text
          :label="fields.id.label"
          :value="presenter(record, 'id')"
        ></app-view-item-text>

        <app-view-item-text
          :label="fields.stripeInvoice.label"
          :value="JSON.parse(record.stripeInvoice).id"
        ></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.member.label"
          :permission="fields.member.readPermission"
          :url="fields.member.viewUrl"
          :value="presenter(record, 'member')"
        ></app-view-item-relation-to-one>

        <app-view-item-text
          :label="fields.createdAt.label"
          :value="presenter(record, 'createdAt')"
        ></app-view-item-text>

        <app-view-item-text
          :label="fields.updatedAt.label"
          :value="presenter(record, 'updatedAt')"
        ></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import SubscriptionPaymentViewToolbar from '@/modules/subscription-payment/components/subscription-payment-view-toolbar.vue';
  import { SubscriptionPaymentModel } from '@/modules/subscription-payment/subscription-payment-model';

  const { fields } = SubscriptionPaymentModel;

  export default {
    name: 'app-subscription-payment-view-page',

    props: ['id'],

    components: {
      [SubscriptionPaymentViewToolbar.name]: SubscriptionPaymentViewToolbar,
    },

    computed: {
      ...mapGetters({
        labelPosition: 'layout/labelPosition',
        labelWidthForm: 'layout/labelWidthForm',
        record: 'subscriptionPayment/view/record',
        loading: 'subscriptionPayment/view/loading',
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
        doFind: 'subscriptionPayment/view/doFind',
      }),

      presenter(record, fieldName) {
        return SubscriptionPaymentModel.presenter(record, fieldName);
      },
    },
  };
</script>
