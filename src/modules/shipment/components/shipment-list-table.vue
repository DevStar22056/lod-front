<template>
    <div>
        <el-table :border="true" :data="rows" @sort-change="doChangeSort" ref="table" row-key="id" v-loading="loading">
            <el-table-column type="selection" width="55"></el-table-column>

            <el-table-column :label="fields.id.label" :prop="fields.id.name" sortable="custom">
                <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
            </el-table-column>

            <el-table-column :label="fields.sku.label" :prop="fields.sku.name">
                <template slot-scope="scope">
                    <app-list-item-relation-to-many
                        :label="fields.sku.label"
                        :permission="fields.sku.readPermission"
                        :url="fields.sku.viewUrl"
                        :value="presenter(scope.row, 'sku')"
                    ></app-list-item-relation-to-many>
                </template>
            </el-table-column>

            <el-table-column :label="fields.shipped.label" :prop="fields.shipped.name" sortable="custom">
                <template slot-scope="scope">{{ presenter(scope.row, 'shipped') }}</template>
            </el-table-column>

            <el-table-column :label="fields.member.label" :prop="fields.member.name">
                <template slot-scope="scope">
                    <app-list-item-relation-to-one
                        :label="fields.member.label"
                        :permission="fields.member.readPermission"
                        :url="fields.member.viewUrl"
                        :value="presenter(scope.row, 'member')"
                    ></app-list-item-relation-to-one>
                </template>
            </el-table-column>
            <el-table-column
                :label="fields.stripeSubscriptionStartedAt.label"
                sortable="custom"
                :prop="fields.stripeSubscriptionStartedAt.name"
            >
                <template slot-scope="scope">{{ presenter(scope.row, 'stripeSubscriptionStartedAt') }}</template>
            </el-table-column>

            <el-table-column :label="fields.createdAt.label" :prop="fields.createdAt.name" sortable="custom">
                <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
            </el-table-column>

            <el-table-column :label="fields.notes.label" :prop="fields.notes.name" sortable="custom">
                <template slot-scope="scope">{{ presenter(scope.row, 'notes') }}</template>
            </el-table-column>

            <el-table-column :fixed="isMobile ? undefined : 'right'" align="center" width="180">
                <template slot-scope="scope">
                    <div class="table-actions">
                        <router-link :to="`/shipment/${scope.row.id}`">
                            <el-button type="text">
                                <app-i18n code="common.view"></app-i18n>
                            </el-button>
                        </router-link>

                        <router-link :to="`/shipment/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
                            <el-button type="text">
                                <app-i18n code="common.edit"></app-i18n>
                            </el-button>
                        </router-link>

                        <el-button
                            :disabled="destroyLoading"
                            @click="doDestroyWithConfirm(scope.row.id)"
                            type="text"
                            v-if="hasPermissionToDestroy"
                        >
                            <app-i18n code="common.destroy"></app-i18n>
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <div class="el-pagination-wrapper">
            <el-pagination
                :current-page="pagination.currentPage || 1"
                :disabled="loading"
                :layout="paginationLayout"
                :total="count"
                :page-size="pageSize"
                :page-sizes="[10, 25, 50, 100, 1000, 10000]"
                @current-change="doChangePaginationCurrentPage"
                @size-change="doChangePaginationPageSize"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
    import { ShipmentModel } from '@/modules/shipment/shipment-model';
    import { mapGetters, mapActions } from 'vuex';
    import { ShipmentPermissions } from '@/modules/shipment/shipment-permissions';
    import { i18n } from '@/i18n';
    import moment from 'moment';

    const { fields } = ShipmentModel;

    export default {
        name: 'app-shipment-list-table',

        mounted() {
            this.doMountTable(this.$refs.table);
        },

        computed: {
            ...mapGetters({
                rows: 'shipment/list/rows',
                count: 'shipment/list/count',
                loading: 'shipment/list/loading',
                pagination: 'shipment/list/pagination',
                isMobile: 'layout/isMobile',
                currentUser: 'auth/currentUser',
                destroyLoading: 'shipment/destroy/loading',
                paginationLayout: 'layout/paginationLayout',
                pageSize: 'shipment/list/limit',
            }),

            hasPermissionToEdit() {
                return new ShipmentPermissions(this.currentUser).edit;
            },

            hasPermissionToDestroy() {
                return new ShipmentPermissions(this.currentUser).destroy;
            },

            fields() {
                return fields;
            },
        },

        methods: {
            ...mapActions({
                doChangeSort: 'shipment/list/doChangeSort',
                doChangePaginationCurrentPage: 'shipment/list/doChangePaginationCurrentPage',
                doChangePaginationPageSize: 'shipment/list/doChangePaginationPageSize',
                doMountTable: 'shipment/list/doMountTable',
                doDestroy: 'shipment/destroy/doDestroy',
            }),

            presenter(row, fieldName) {
                if (fieldName === 'stripeSubscriptionStartedAt') {
                    return row.member.stripeSubscriptionStartedAt
                        ? moment(row.member.stripeSubscriptionStartedAt).format('YYYY-MM-DD HH:mm')
                        : '';
                }
                return ShipmentModel.presenter(row, fieldName);
            },

            async doDestroyWithConfirm(id) {
                try {
                    await this.$confirm(i18n('common.areYouSure'), i18n('common.confirm'), {
                        confirmButtonText: i18n('common.yes'),
                        cancelButtonText: i18n('common.no'),
                        type: 'warning',
                    });

                    return this.doDestroy(id);
                } catch (error) {
                    // no
                }
            },
        },
    };
</script>

<style>
</style>
