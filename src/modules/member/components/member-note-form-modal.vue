<template>
  <div>
    <el-dialog class="member-note-form-modal-dialog" :title="title" :visible.sync="dialogVisible" width="80%">
      <app-member-note-form
        :modal="true"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
      />
    </el-dialog>
  </div>
</template>

<script>
import MemberNoteForm from '@/modules/member/components/member-note-form';
import { MemberNoteService } from '@/modules/member/member-note-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default {
  name: 'app-member-note-form-modal',

  props: ['visible', 'memberId'],

  components: {
    [MemberNoteForm.name]: MemberNoteForm,
  },

  data() {
    return {
      record: null,
      saveLoading: false,
    };
  },

  computed: {
    dialogVisible: {
      get: function() {
        return this.visible;
      },

      set: function(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },

    title() {
      return i18n('entities.member.addNote.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        this.saveLoading = true;
        payload.values.memberId = this.memberId;
        await MemberNoteService.create(
          payload.values,
        );
        this.$emit('success');
      } catch (error) {
        Errors.handle(error);
      } finally {
        this.saveLoading = false;
      }
    },

    doCancel() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>

</style>
