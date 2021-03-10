<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
                <app-i18n code="home.menu"></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/shipment' }">
                <app-i18n code="entities.shipment.menu"></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <app-i18n code="entities.shipment.view.title"></app-i18n>
            </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="app-content-page">
            <h1 class="app-content-title">
                <app-i18n code="entities.shipment.view.title"></app-i18n>
            </h1>

            <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

            <app-shipment-view-toolbar v-if="record"></app-shipment-view-toolbar>

            <el-form
                :label-position="labelPosition"
                :label-width="labelWidthForm"
                @submit.prevent.native
                class="form"
                v-if="record"
            >
                <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

                <app-view-item-relation-to-many
                    :label="fields.sku.label"
                    :permission="fields.sku.readPermission"
                    :url="fields.sku.viewUrl"
                    :value="presenter(record, 'sku')"
                ></app-view-item-relation-to-many>

                <app-view-item-text
                    :label="fields.shipped.label"
                    :value="presenter(record, 'shipped')"
                ></app-view-item-text>

                <app-view-item-relation-to-one
                    :label="fields.member.label"
                    :permission="fields.member.readPermission"
                    :url="fields.member.viewUrl"
                    :value="presenter(record, 'member')"
                ></app-view-item-relation-to-one>

                <!-- <app-view-item-text :label="fields.shipmentYear.label" :value="presenter(record, 'shipmentYear')"></app-view-item-text> -->

                <app-view-item-text
                    :label="fields.trackingId.label"
                    :value="presenter(record, 'trackingId')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.notes.label"
                    :value="presenter(record, 'notes')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.createdAt.label"
                    :value="presenter(record, 'createdAt')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.updatedAt.label"
                    :value="presenter(record, 'updatedAt')"
                ></app-view-item-text>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import ShipmentViewToolbar from '@/modules/shipment/components/shipment-view-toolbar.vue';
    import { ShipmentModel } from '@/modules/shipment/shipment-model';

    const { fields } = ShipmentModel;

    export default {
        name: 'app-shipment-view-page',

        props: ['id'],

        components: {
            [ShipmentViewToolbar.name]: ShipmentViewToolbar,
        },

        computed: {
            ...mapGetters({
                labelPosition: 'layout/labelPosition',
                labelWidthForm: 'layout/labelWidthForm',
                record: 'shipment/view/record',
                loading: 'shipment/view/loading',
            }),

            fields() {
                return fields;
            },
        },

        async created() {
            await this.doFind(this.id);
        },

        methods: {
            ...mapActions({
                doFind: 'shipment/view/doFind',
            }),

            presenter(record, fieldName) {
                return ShipmentModel.presenter(record, fieldName);
            },
        },
    };
</script>
