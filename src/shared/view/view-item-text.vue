<template>
  <el-form-item :label="label" v-if="!isBlank">
    <el-col :lg="lg" :md="md" :sm="sm">
      <span v-if="lightWeight">{{ value }}</span>
      <template v-else>
        <strong v-if="prefix">{{ prefix }} {{ value }}</strong>
        <strong v-if="!prefix">{{ value }}</strong>
      </template>
    </el-col>
  </el-form-item>
</template>

<script>
export default {
  name: 'app-view-item-text',

  props: {
    label: {},
    value: {},
    prefix: {},
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
    },
    lightWeight: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    isBlank() {
      return !this.value || this.value === 0;
    },
  },
};
</script>

<style>
</style>
