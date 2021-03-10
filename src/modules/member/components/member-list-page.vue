<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.member.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.member.list.title"></app-i18n>
      </h1>

      <app-member-list-toolbar></app-member-list-toolbar>
      <app-member-list-filter></app-member-list-filter>
      <app-member-list-table></app-member-list-table>
    </div>
  </div>
</template>

<script>
  import MemberListFilter from '@/modules/member/components/member-list-filter.vue';
  import MemberListTable from '@/modules/member/components/member-list-table.vue';
  import MemberListToolbar from '@/modules/member/components/member-list-toolbar.vue';

  export default {
    name: 'app-member-list-page',

    components: {
      [MemberListFilter.name]: MemberListFilter,
      [MemberListTable.name]: MemberListTable,
      [MemberListToolbar.name]: MemberListToolbar,
    },
  };
</script>

<style>
</style>
