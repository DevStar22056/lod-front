<template>
    <div>
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
        >
            <el-breadcrumb-item :to="{ path: '/' }">
                <app-i18n code="home.menu"></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/member' }">
                <app-i18n
                    code="entities.member.menu"
                ></app-i18n>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <app-i18n
                    code="entities.member.view.title"
                ></app-i18n>
            </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="app-content-page">
            <h1 class="app-content-title">
                <app-i18n
                    code="entities.member.view.title"
                ></app-i18n>
            </h1>

            <div
                class="app-page-spinner"
                v-if="loading"
                v-loading="loading"
            ></div>

            <app-member-view-toolbar
                v-if="record"
            ></app-member-view-toolbar>
            <div class="content-container">
                <app-member-view-form :id="id" class="view-form"></app-member-view-form>
                <app-member-view-note :id="id" class="view-note"></app-member-view-note>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import MemberViewToolbar from '@/modules/member/components/member-view-toolbar.vue';
    import MemberViewForm from '@/modules/member/components/member-view-form.vue';
    import MemberViewNote from '@/modules/member/components/member-view-note.vue';

    export default {
        name: 'app-member-view-page',

        props: ['id'],

        components: {
            [MemberViewToolbar.name]: MemberViewToolbar,
            [MemberViewForm.name]: MemberViewForm,
            [MemberViewNote.name]: MemberViewNote,
        },

        computed: {
            ...mapGetters({
                record: 'member/view/record',
                loading: 'member/view/loading',
            }),
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
