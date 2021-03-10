<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
                <app-i18n code="home.menu"></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/member' }">
                <app-i18n code="entities.member.menu"></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <app-i18n code="entities.member.edit.title" v-if="isEditing"></app-i18n>
                <app-i18n code="entities.member.new.title" v-if="!isEditing"></app-i18n>
            </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="app-content-page">
            <h1 class="app-content-title">
                <app-i18n code="entities.member.edit.title" v-if="isEditing"></app-i18n>
                <app-i18n code="entities.member.new.title" v-if="!isEditing"></app-i18n>
            </h1>

            <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
            <div class="content-container">
                <app-member-form
                    :isEditing="isEditing"
                    :record="record"
                    :saveLoading="saveLoading"
                    @cancel="doCancel"
                    @submit="doSubmit"
                    v-if="!findLoading"
                    class="view-form"
                />
                <app-member-view-note v-if="id" :id="id" class="view-note"></app-member-view-note>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import MemberForm from '@/modules/member/components/member-form';
    import MemberViewNote from '@/modules/member/components/member-view-note.vue';

    import { routerAsync } from '@/app-module';

    export default {
        name: 'app-member-form-page',

        props: ['id'],

        components: {
            [MemberForm.name]: MemberForm,
            [MemberViewNote.name]: MemberViewNote,
        },

        computed: {
            ...mapGetters({
                record: 'member/form/record',
                findLoading: 'member/form/findLoading',
                saveLoading: 'member/form/saveLoading',
            }),

            isEditing() {
                return !!this.id;
            },
        },

        async created() {
            if (this.isEditing) {
                await this.doFind(this.id);
            } else {
                await this.doNew();
            }
        },

        methods: {
            ...mapActions({
                doFind: 'member/form/doFind',
                doNew: 'member/form/doNew',
                doUpdate: 'member/form/doUpdate',
                doCreate: 'member/form/doCreate',
            }),

            doCancel() {
                routerAsync().push('/member');
            },

            async doSubmit(payload) {
                if (this.isEditing) {
                    return this.doUpdate(payload);
                } else {
                    return this.doCreate(payload.values);
                }
            },
        },
    };
</script>

<style scoped>
    .content-container {
        display: flex;
    }
    .view-form {
        width: 60%;
        margin-right: 20px;
    }
    .view-note {
        width: 40%;
        max-height: 69vh;
    }

    @media only screen and (max-width: 1200px) {
        .content-container {
            display: block;
        }
        .view-form {
            width: 100%;
            margin-right: 0;
        }
        .view-note {
            width: 100%;
            max-height: 50vh;
        }
    }
</style>

