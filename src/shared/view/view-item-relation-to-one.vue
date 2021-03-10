<template>
  <el-form-item :label="label" v-if="!isBlank">
    <el-col :lg="lg" :md="md" :sm="sm">
      <router-link :to="urlWithId" v-if="hasPermissionToRead">
        <strong>{{ display }}</strong>
      </router-link>
      <strong v-if="!hasPermissionToRead">{{ display }}</strong>
    </el-col>
  </el-form-item>
</template>

<script>
import { mapGetters } from 'vuex';
import PermissionChecker from '@/modules/iam/permission-checker';

export default {
  name: 'app-view-item-relation-to-one',

  props: {
    label: {},
    value: {},
    url: {},
    permission: {},
    lg: {
      type: Number,
      default: 11,
    },
    md: {
      type: Number,
      default: 16,
    },
    sm: {
      type: Number,
      default: 24,
    }
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),

    hasPermissionToRead() {
      return new PermissionChecker(this.currentUser).match(
        this.permission,
      );
    },

    urlWithId() {
      if (!this.value) {
        return null;
      }

      return `${this.url}/${this.value.id}`;
    },

    isBlank() {
      return !this.value || !this.value.id;
    },

    display() {
      if (!this.value) {
        return null;
      }

      return this.value.label;
    },
  },
};
</script>

<style>
</style>
