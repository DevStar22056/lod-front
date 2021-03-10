<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm1"
      @submit.prevent.native
      class="filter note-container"
      v-if="records && records.count"
    >

      <h1 class="app-content-title">
          <app-i18n
              code="entities.member.addNote.header"
          ></app-i18n>
      </h1>

      <el-timeline :reverse="false">
        <el-timeline-item
          v-for="(record, index) in records.rows"
          :key="index"
          :timestamp="presenter(record, 'updatedAt')">
          {{presenter(record, 'note')}}
          <app-view-item-relation-to-one 
            :permission="fields.updatedBy.readPermission"
            :url="fields.updatedBy.viewUrl"
            :value="presenter(record, 'updatedBy')"
            :lg="24"
            class="noted-by"
          ></app-view-item-relation-to-one>
        </el-timeline-item>
      </el-timeline>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MemberNoteModel } from '@/modules/member/member-note-model';

const { fields } = MemberNoteModel;

export default {
    name: 'app-member-view-note',

    props: ['id'],

    computed: {
        ...mapGetters({
            records: 'member/subview/records',
            labelPosition: 'layout/labelPosition',
            labelWidthForm: 'layout/labelWidthForm',
        }),

        fields() {
            return fields;
        },

        labelWidthForm1() {
          return this.labelWidthForm? '0px': undefined;
        }
    },

    async created() {
        await this.doFindByMemberId(this.id);
    },

    methods: {
        ...mapActions({
            doFindByMemberId: 'member/subview/doFindByMemberId',
        }),

        presenter(record, fieldName) {
            return MemberNoteModel.presenter(record, fieldName);
        },
    },
}
</script>

<style scoped>
  .note-container {
    overflow: scroll;
    max-height: 63vh;
  }

  .el-timeline {
    padding: 0px;
  }

  .noted-by{
    position: absolute;
    bottom: -13px;
    right: 0px;
    margin-bottom: 0px;
  }

  .el-timeline-item__timestamp {
    margin-top: 15px;
  }

  @media only screen and (max-width: 1200px) {
    .note-container {
      max-height: 44vh;
    }
  }
</style>