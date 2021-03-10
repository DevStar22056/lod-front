<template>
    <div>
        <el-form
            :label-position="labelPosition"
            :label-width="labelWidthForm"
            :model="model"
            :rules="rules"
            @submit.native.prevent="doSubmit"
            class="form"
            ref="form"
            v-if="model"
        >
            <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
                <el-col :lg="11" :md="16" :sm="24">
                    <el-input :disabled="true" v-model="model[fields.id.name]" />
                </el-col>
            </el-form-item>
            <el-form-item :label="fields.sku.label" :prop="fields.sku.name" :required="fields.sku.required">
                <el-col :lg="11" :md="16" :sm="24">
                    <app-sku-autocomplete-input
                        :fetchFn="fields.sku.fetchFn"
                        :mapperFn="fields.sku.mapperFn"
                        :showCreate="!modal"
                        v-model="model[fields.sku.name]"
                        mode="single"
                    ></app-sku-autocomplete-input>
                </el-col>
            </el-form-item>

            <el-form-item :label="fields.shipped.label" :prop="fields.shipped.name" :required="fields.shipped.required">
                <el-col :lg="11" :md="16" :sm="24">
                    <el-switch v-model="model[fields.shipped.name]"></el-switch>
                </el-col>
            </el-form-item>

            <el-form-item :label="fields.member.label" :prop="fields.member.name" :required="fields.member.required">
                <el-col :lg="11" :md="16" :sm="24">
                    <app-member-autocomplete-input
                        :fetchFn="fields.member.fetchFn"
                        :mapperFn="fields.member.mapperFn"
                        :showCreate="!modal"
                        v-model="model[fields.member.name]"
                        mode="single"
                    ></app-member-autocomplete-input>
                </el-col>
            </el-form-item>

            <!-- <el-form-item
        :label="fields.shipmentYear.label"
        :prop="fields.shipmentYear.name"
        :required="fields.shipmentYear.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.shipmentYear.name]"></el-input-number>
        </el-col>
      </el-form-item> -->

            <el-form-item
                :label="fields.trackingId.label"
                :prop="fields.trackingId.name"
                :required="fields.trackingId.required"
            >
                <el-col :lg="11" :md="16" :sm="24">
                    <el-input v-model="model[fields.trackingId.name]" />
                </el-col>
            </el-form-item>

            <el-form-item :label="fields.notes.label" :prop="fields.notes.name" :required="fields.notes.required">
                <el-col :lg="11" :md="16" :sm="24">
                    <el-input v-model="model[fields.notes.name]" />
                </el-col>
            </el-form-item>

            <el-form-item>
                <div class="form-buttons">
                    <el-button :disabled="saveLoading" @click="doSubmit" icon="el-icon-fa-floppy-o" type="primary">
                        <app-i18n code="common.save"></app-i18n>
                    </el-button>

                    <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
                        <app-i18n code="common.reset"></app-i18n>
                    </el-button>

                    <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
                        <app-i18n code="common.cancel"></app-i18n>
                    </el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { FormSchema } from '@/shared/form/form-schema';
    import { ShipmentModel } from '@/modules/shipment/shipment-model';

    const { fields } = ShipmentModel;
    const formSchema = new FormSchema([
        fields.id,
        fields.sku,
        fields.shipped,
        fields.member,
        fields.shipmentYear,
        fields.trackingId,
        fields.notes,
    ]);

    export default {
        name: 'app-shipment-form',

        props: ['isEditing', 'record', 'saveLoading', 'modal'],

        data() {
            return {
                rules: formSchema.rules(),
                model: null,
            };
        },

        created() {
            this.model = formSchema.initialValues(this.record || {});
            if (this.isEditing) this.model.sku = this.record.sku;
        },

        computed: {
            ...mapGetters({
                labelPosition: 'layout/labelPosition',
                labelWidthForm: 'layout/labelWidthForm',
            }),

            fields() {
                return fields;
            },
        },

        methods: {
            doReset() {
                this.model = formSchema.initialValues(this.record);
            },

            doCancel() {
                this.$emit('cancel');
            },

            async doSubmit() {
                try {
                    await this.$refs.form.validate();
                } catch (error) {
                    return;
                }

                const { id, ...values } = formSchema.cast(this.model);

                let payload = {
                    id,
                    values,
                };
                let temp = [];
                for (let item of this.model.sku) {
                    temp.push({
                        id: item.sku.id,
                        quantity: item.quantity,
                    });
                }
                payload.values.sku = temp;

                return this.$emit('submit', payload);
            },
        },
    };
</script>

<style>
</style>
