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
            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.name.label" :prop="fields.name.name">
                    <el-input v-model="model[fields.name.name]" />
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.status.label" :prop="fields.status.name">
                    <el-select placeholder v-model="model[fields.status.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option
                            :key="option.id"
                            :label="option.label"
                            :value="option.id"
                            v-for="option in fields.status.options"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.subscriptionStatus.label" :prop="fields.subscriptionStatus.name">
                    <el-select placeholder v-model="model[fields.subscriptionStatus.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option
                            :key="option.id"
                            :label="option.label"
                            :value="option.id"
                            v-for="option in fields.subscriptionStatus.options"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.membershipYearRange.label" :prop="fields.membershipYearRange.name">
                    <app-number-range-input v-model="model[fields.membershipYearRange.name]" />
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.subscriptionLevel.label" :prop="fields.subscriptionLevel.name">
                    <el-select placeholder v-model="model[fields.subscriptionLevel.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option
                            :key="option.id"
                            :label="option.label"
                            :value="option.id"
                            v-for="option in fields.subscriptionLevel.options"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item :label="fields.stripeCustomerId.label" :prop="fields.stripeCustomerId.name">
                    <el-input v-model="model[fields.stripeCustomerId.name]" />
                </el-form-item>
            </el-col>

            <el-col :lg="12" :md="16" :sm="24">
                <el-form-item
                    :label="fields.subscriptionRenewsAtRange.label"
                    :prop="fields.subscriptionRenewsAtRange.name"
                >
                    <el-date-picker
                        type="datetimerange"
                        v-model="model[fields.subscriptionRenewsAtRange.name]"
                    ></el-date-picker>
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
    import { MemberModel } from '@/modules/member/member-model';

    const { fields } = MemberModel;

    const filterSchema = new FilterSchema([
        fields.name,
        fields.membershipYearRange,
        fields.status,
        fields.subscriptionLevel,
        fields.stripeCustomerId,
    ]);

    export default {
        name: 'app-member-list-filter',

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
                loading: 'member/list/loading',
                filter: 'member/list/filter',
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
                doReset: 'member/list/doReset',
                doFetch: 'member/list/doFetch',
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
