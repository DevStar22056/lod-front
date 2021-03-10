<template>
    <div>
        <el-form
            :label-position="labelPosition"
            :label-width="labelWidthForm1"
            @submit.prevent.native
            class="filter"
            v-if="record"
        >
            <h3>Basics</h3>
            <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')" :lg="20"></app-view-item-text>

            <app-view-item-text
                :label="fields.isInternational.label"
                :value="presenter(record, 'isInternational')"
                :lg="20"
            ></app-view-item-text>

            <app-view-item-image
                :label="fields.profileImage.label"
                :value="presenter(record, 'profileImage')"
            ></app-view-item-image>

            <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

            <app-view-item-text
                :label="fields.firstName.label"
                :value="presenter(record, 'firstName')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.lastName.label"
                :value="presenter(record, 'lastName')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.profileEmail.label"
                :value="presenter(record, 'profileEmail')"
            ></app-view-item-text>

            <h3>Membership</h3>

            <app-view-item-text
                :label="fields.subscriptionLevel.label"
                :value="presenter(record, 'subscriptionLevel')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.membershipYear.label"
                :value="presenter(record, 'membershipYear')"
            ></app-view-item-text>

            <app-view-item-text :label="fields.status.label" :value="presenter(record, 'status')"></app-view-item-text>

            <h3>Subscription</h3>

            <app-view-item-text
                :label="fields.subscriptionStatus.label"
                :value="presenter(record, 'subscriptionStatus')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.subscriptionRenewsAt.label"
                :value="presenter(record, 'subscriptionRenewsAt')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.stripeCustomerId.label"
                :value="presenter(record, 'stripeCustomerId')"
            ></app-view-item-text>

            <app-view-item-relation-to-many
                :label="fields.payments.label"
                :permission="fields.payments.readPermission"
                :url="fields.payments.viewUrl"
                :value="presenter(record, 'payments')"
            ></app-view-item-relation-to-many>

            <app-view-item-text
                :label="fields.stripeSubscriptionId.label"
                :value="presenter(record, 'stripeSubscriptionId')"
            ></app-view-item-text>

            <h3>Orders</h3>

            <app-view-item-text
                :label="fields.additionalCrystals.label"
                :value="presenter(record, 'additionalCrystals')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.additionalPlaques.label"
                :value="presenter(record, 'additionalPlaques')"
            ></app-view-item-text>

            <app-view-item-relation-to-many
                :label="fields.shipments.label"
                :permission="fields.shipments.readPermission"
                :url="fields.shipments.viewUrl"
                :value="presenter(record, 'shipments')"
            ></app-view-item-relation-to-many>

            <h3>Practice Address</h3>

            <app-view-item-text
                :label="fields.practiceAddress1.label"
                :value="presenter(record, 'practiceAddress1')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.practiceAddress2.label"
                :value="presenter(record, 'practiceAddress2')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.practiceAddressCity.label"
                :value="presenter(record, 'practiceAddressCity')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.practiceAddressState.label"
                :value="presenter(record, 'practiceAddressState')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.practiceAddressZip.label"
                :value="presenter(record, 'practiceAddressZip')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.practiceAddressCountry.label"
                :value="presenter(record, 'practiceAddressCountry')"
            ></app-view-item-text>

            <h3>Shipping Address</h3>

            <app-view-item-text
                :label="fields.shippingAddress1.label"
                :value="presenter(record, 'shippingAddress1')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.shippingAddress2.label"
                :value="presenter(record, 'shippingAddress2')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.shippingAddressCity.label"
                :value="presenter(record, 'shippingAddressCity')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.shippingAddressState.label"
                :value="presenter(record, 'shippingAddressState')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.shippingAddressZip.label"
                :value="presenter(record, 'shippingAddressZip')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.shippingAddressCountry.label"
                :value="presenter(record, 'shippingAddressCountry')"
            ></app-view-item-text>

            <div v-if="!record.isInternational">
                <h3>Profile</h3>

                <app-view-item-text
                    :label="fields.profileId.label"
                    :value="presenter(record, 'profileId')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.location.label"
                    :value="presenter(record, 'location')"
                ></app-view-item-text>

                <app-view-item-text :label="fields.slug.label" :value="presenter(record, 'slug')"></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileDescription.label"
                    :value="presenter(record, 'profileDescription')"
                    :lg="20"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileFacebook.label"
                    :value="presenter(record, 'profileFacebook')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileTwitter.label"
                    :value="presenter(record, 'profileTwitter')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileWebsite.label"
                    :value="presenter(record, 'profileWebsite')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileLastSynced.label"
                    :value="presenter(record, 'profileLastSynced')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileSpecialization.label"
                    :value="presenter(record, 'profileSpecialization')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileAvvoReview.label"
                    :value="presenter(record, 'profileAvvoReview')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileAvvoRating.label"
                    :value="presenter(record, 'profileAvvoRating')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileGoogleReview.label"
                    :value="presenter(record, 'profileGoogleReview')"
                ></app-view-item-text>

                <app-view-item-text
                    :label="fields.profileGoogleRating.label"
                    :value="presenter(record, 'profileGoogleRating')"
                ></app-view-item-text>
            </div>
            <h3>History</h3>
            <app-view-item-text
                :label="fields.createdAt.label"
                :value="presenter(record, 'createdAt')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.updatedAt.label"
                :value="presenter(record, 'updatedAt')"
            ></app-view-item-text>

            <app-view-item-text
                :label="fields.activedAt.label"
                :value="presenter(record, 'activedAt')"
            ></app-view-item-text>

            <app-view-item-relation-to-one
                :label="fields.activedBy.label"
                :permission="fields.activedBy.readPermission"
                :url="fields.activedBy.viewUrl"
                :value="presenter(record, 'activedBy')"
            ></app-view-item-relation-to-one>
        </el-form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { MemberModel } from '@/modules/member/member-model';

    const { fields } = MemberModel;

    export default {
        name: 'app-member-view-form',

        props: ['id'],

        computed: {
            ...mapGetters({
                record: 'member/view/record',
                labelPosition: 'layout/labelPosition',
                labelWidthForm: 'layout/labelWidthForm',
            }),

            fields() {
                return fields;
            },

            labelWidthForm1() {
                return this.labelWidthForm ? '150px' : undefined;
            },
        },

        async created() {
            await this.doFind(this.id);
        },

        methods: {
            ...mapActions({
                doFind: 'member/view/doFind',
            }),

            presenter(record, fieldName) {
                return MemberModel.presenter(record, fieldName);
            },
        },
    };
</script>