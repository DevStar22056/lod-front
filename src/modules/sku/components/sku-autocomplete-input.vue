<template>
  <div>
    <template v-for="(item, index) in model">
      <div class="row" style="display: flex; margin-top: 10px;" :key="index">
        <el-input-number :precision="0" :step="1" :min="1" style="margin-right: 16px" v-model="item.quantity"></el-input-number>
        <app-autocomplete-one-input :fetchFn="fetchFn" v-if="mode !== 'multiple'" :used-list="model" :clearable="index == model.length - 1 && !isfull" v-model="item.sku" @full="setIsfull"></app-autocomplete-one-input>
        <app-autocomplete-many-input :fetchFn="fetchFn" v-if="mode === 'multiple'" v-model="item.sku"></app-autocomplete-many-input>
        <el-button
          @click="removeItem(index)"
          icon="el-icon-minus"
          style="margin-left: 16px;"
          type="primary"
          v-if="hasPermissionToCreate && showCreate && !(index == 0 && model.length == 1)"
        ></el-button>
        <el-button
          @click="addItem()"
          icon="el-icon-plus"
          :disabled="!item.sku"
          :style="(index == 0 && model.length == 1)? 'margin-left: 16px;': 'margin-left: 16px; margin-right: -72px;'"
          type="primary"
          v-if="hasPermissionToCreate && showCreate && (index == model.length - 1) && !isfull"
        ></el-button>        
        <!-- <el-button
          @click="doOpenModal()"
          icon="el-icon-plus"
          style="margin-left: 16px"
          type="primary"
          v-if="hasPermissionToCreate && showCreate"
        ></el-button>
        <portal to="modal">
          <app-sku-form-modal
            :visible="dialogVisible"
            @close="onModalClose"
            @success="onModalSuccess"
            v-if="dialogVisible"
          ></app-sku-form-modal>
        </portal> -->
      </div>
    </template>
  </div>
</template>

<script>
import SkuFormModal from '@/modules/sku/components/sku-form-modal';
import { SkuPermissions } from '@/modules/sku/sku-permissions';
import { mapGetters } from 'vuex';

export default {
  name: 'app-sku-autocomplete-input',
  props: [
    'value',
    'mode',
    'fetchFn',
    'mapperFn',
    'showCreate',
  ],

  components: {
    [SkuFormModal.name]: SkuFormModal,
  },

  data() {
    return {
      dialogVisible: false,
      isfull: false,
    };
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),

    model: {
      get: function() {
        return this.value;
      },

      set: function(value) {
        this.$emit('input', value);
      },
    },

    hasPermissionToCreate() {
      return new SkuPermissions(this.currentUser)
        .create;
    },
  },

  methods: {
    setIsfull(isfull) {
      this.isfull = isfull;
    },
    removeItem(index) {
      this.model.splice(index, 1);
    },
    addItem() {
      this.model.push({
        sku: null,
        quantity: 1
      })
    },
    doOpenModal() {
      this.dialogVisible = true;
    },

    onModalSuccess(record) {
      if (this.mode === 'multiple') {
        this.model = [...this.model, this.mapperFn(record)];
      } else {
        this.model = this.mapperFn(record);
      }

      this.onModalClose();
    },

    onModalClose() {
      this.dialogVisible = false;
    },
  },

  created() {
    if (this.model.length === 0) {
      this.model = [{
        sku: null,
        quantity: 1
      }];
    }
  }
};
</script>

<style>
.el-form-item .el-form-item {
  margin-bottom: 22px;
}
</style>
