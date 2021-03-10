<template>
    <el-form
        :label-position="labelPosition"
        :label-width="labelWidthFilter"
        :model="model"
        :rules="rules"
        @submit.native.prevent="doFilter"
        class="filter"
        ref="form"
        size="small"
    >
        <el-row>
            <!-- <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.id.label" :prop="fields.id.name">
          <el-input v-model="model[fields.id.name]"/>
        </el-form-item>
      </el-col> -->
            <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
                    <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
                </el-form-item>
            </el-col>
            <!-- <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.shipmentYearRange.label" :prop="fields.shipmentYearRange.name">
          <app-number-range-input v-model="model[fields.shipmentYearRange.name]" />
        </el-form-item>
      </el-col> -->

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.shipped.label" :prop="fields.shipped.name">
                    <el-select placeholder v-model="model[fields.shipped.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option :label="fields.shipped.yesLabel" :value="true">{{
                            fields.shipped.yesLabel
                        }}</el-option>
                        <el-option :label="fields.shipped.noLabel" :value="false">{{
                            fields.shipped.noLabel
                        }}</el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.member.label" :prop="fields.member.name">
                    <app-autocomplete-one-input
                        :fetchFn="fields.member.fetchFn"
                        v-model="model[fields.member.name]"
                    ></app-autocomplete-one-input>
                </el-form-item>
            </el-col>
        </el-row>

        <div class="filter-buttons">
            <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
                <app-i18n code="common.search"></app-i18n>
            </el-button>

            <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
                <app-i18n code="common.reset"></app-i18n>
            </el-button>
        </div>
    </el-form>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { FilterSchema } from '@/shared/form/filter-schema';
    import { ShipmentModel } from '@/modules/shipment/shipment-model';

    const { fields } = ShipmentModel;

    const filterSchema = new FilterSchema([
        fields.id,
        fields.createdAtRange,
        fields.shipped,
        fields.member,
        // fields.shipmentYearRange,
    ]);

    export default {
        name: 'app-shipment-list-filter',

        data() {
            return {
                rules: filterSchema.rules(),
                model: {},
            };
        },

        computed: {
            ...mapGetters({
                labelPosition: 'layout/labelPosition',
                labelWidthFilter: 'layout/labelWidthFilter',
                loading: 'shipment/list/loading',
                filter: 'shipment/list/filter',
            }),

            fields() {
                return fields;
            },
        },

        async mounted() {
            this.model = filterSchema.initialValues(this.filter, this.$route.query);

            return this.doFilter();
        },

        methods: {
            ...mapActions({
                doReset: 'shipment/list/doReset',
                doFetch: 'shipment/list/doFetch',
            }),

            async doResetFilter() {
                this.model = filterSchema.initialValues();
                this.$refs.form.clearValidate();
                return this.doReset();
            },

            async doFilter() {
                try {
                    await this.$refs.form.validate();
                    this.$refs.form.clearValidate();
                } catch (error) {
                    return;
                }

                const filter = filterSchema.cast(this.model);
                return this.doFetch({
                    filter,
                });
            },
        },
    };
</script>

<style>
</style>
