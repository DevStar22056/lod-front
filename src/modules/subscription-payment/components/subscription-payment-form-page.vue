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
        <app-i18n code="entities.subscriptionPayment.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.subscriptionPayment.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.subscriptionPayment.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.subscriptionPayment.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-subscription-payment-form
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
import SubscriptionPaymentForm from '@/modules/subscription-payment/components/subscription-payment-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-subscription-payment-form-page',

  props: ['id'],

  components: {
    [SubscriptionPaymentForm.name]: SubscriptionPaymentForm,
  },

  computed: {
    ...mapGetters({
      record: 'subscriptionPayment/form/record',
      findLoading: 'subscriptionPayment/form/findLoading',
      saveLoading: 'subscriptionPayment/form/saveLoading',
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
      doFind: 'subscriptionPayment/form/doFind',
      doNew: 'subscriptionPayment/form/doNew',
      doUpdate: 'subscriptionPayment/form/doUpdate',
      doCreate: 'subscriptionPayment/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/subscription-payment');
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
