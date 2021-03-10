<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: `/member/${record.id}/edit` }" v-if="record && hasPermissionToEdit">
      <el-button icon="el-icon-fa-edit" type="primary">
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      :disabled="destroyLoading"
      @click="doDestroyWithConfirm"
      icon="el-icon-fa-trash"
      type="primary"
      v-if="record && hasPermissionToDestroy"
    >
      <app-i18n code="common.destroy"></app-i18n>
    </el-button>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityId: record.id },
      }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      @click="addNote"
      icon="el-icon-fa-comments"
      type="primary"
      v-if="record && hasPermissionToNote"
      class="add-note-btn"
    >
      <app-i18n code="entities.member.addNote.title"></app-i18n>
    </el-button>
    <el-button style="float:right" type="success" plain v-if="record.slug" @click="viewStripeCustomer(record)">
      Stripe</el-button
    >
    <el-button style="float:right" type="primary" plain v-if="record.slug" @click="openProfile(record)">
      View Profile</el-button
    >
    <portal to="modal">
      <app-member-note-form-modal
        :visible="dialogVisible"
        @close="onModalClose"
        @success="onModalSuccess"
        v-if="dialogVisible"
        :member-id="`${record.id}`"
      ></app-member-note-form-modal>
    </portal>
  </div>
</template>

<script>
  import { MemberPermissions } from '@/modules/member/member-permissions';
  import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
  import { mapGetters, mapActions } from 'vuex';
  import { i18n } from '@/i18n';
  import MemberNoteFormModal from '@/modules/member/components/member-note-form-modal';

  export default {
    name: 'app-member-view-toolbar',

    components: {
      [MemberNoteFormModal.name]: MemberNoteFormModal,
    },

    data() {
      return {
        dialogVisible: false,
      };
    },

    computed: {
      ...mapGetters({
        currentUser: 'auth/currentUser',
        record: 'member/view/record',
        loading: 'member/view/loading',
        destroyLoading: 'member/destroy/loading',
      }),
      hasPermissionToImport() {
        return new MemberPermissions(this.currentUser).import;
      },

      hasPermissionToDestroy() {
        return new MemberPermissions(this.currentUser).destroy;
      },

      hasPermissionToAuditLogs() {
        return new AuditLogPermissions(this.currentUser).read;
      },
      hasPermissionToEdit() {
        return new MemberPermissions(this.currentUser).edit;
      },
      hasPermissionToNote() {
        return new MemberPermissions(this.currentUser).note;
      },
    },
    methods: {
      ...mapActions({
        doDestroy: 'member/destroy/doDestroy',
        doFindByMemberId: 'member/subview/doFindByMemberId',
      }),

      openProfile(record) {
        window.open(`https://www.thelawyersofdistinction.com/profile/${record.slug}/`);
      },

      addNote() {
        this.dialogVisible = true;
      },

      async onModalSuccess() {
        await this.doFindByMemberId(this.record.id);
        this.onModalClose();
      },

      onModalClose() {
        this.dialogVisible = false;
      },

      viewStripeCustomer(record) {
        window.open(`https://dashboard.stripe.com/customers/${record.stripeCustomerId}`);
      },

      async doDestroyWithConfirm() {
        try {
          await this.$confirm(i18n('common.areYouSure'), i18n('common.confirm'), {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          });

          return this.doDestroy(this.record.id);
        } catch (error) {
          // no
        }
      },
    },
  };
</script>

<style scoped>
    .add-note-btn {
        float: right;
    }
    @media only screen and (max-width: 1200px) {
        .add-note-btn {
            float: unset;
        }
    }
</style>
