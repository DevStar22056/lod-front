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
            <h3>Basics</h3>
            <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input :disabled="true" v-model="model[fields.id.name]" />
                </el-col>
            </el-form-item>
            <el-form-item
                :label="fields.isInternational.label"
                :prop="fields.isInternational.name"
                :required="fields.isInternational.required"
            >
                <el-col :lg="11" :md="16" :sm="24">
                    <el-switch v-model="model[fields.isInternational.name]"></el-switch>
                </el-col>
            </el-form-item>
            <el-form-item
                :label="fields.profileImage.label"
                :prop="fields.profileImage.name"
                :required="fields.profileImage.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <app-image-upload
                        :max="fields.profileImage.max"
                        :path="fields.profileImage.path"
                        :schema="fields.profileImage.fileSchema"
                        v-model="model[fields.profileImage.name]"
                    ></app-image-upload>
                </el-col>
            </el-form-item>

            <el-form-item :label="fields.name.label" :prop="fields.name.name" :required="fields.name.required">
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.name.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.firstName.label"
                :prop="fields.firstName.name"
                :required="fields.firstName.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.firstName.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.lastName.label"
                :prop="fields.lastName.name"
                :required="fields.lastName.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.lastName.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.profileEmail.label"
                :prop="fields.profileEmail.name"
                :required="fields.profileEmail.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.profileEmail.name]" />
                </el-col>
            </el-form-item>

            <h3>Membership</h3>
            <el-form-item
                :label="fields.subscriptionLevel.label"
                :prop="fields.subscriptionLevel.name"
                :required="fields.subscriptionLevel.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-select placeholder v-model="model[fields.subscriptionLevel.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option
                            :key="option.id"
                            :label="option.label"
                            :value="option.id"
                            v-for="option in fields.subscriptionLevel.options"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item
                :label="fields.membershipYear.label"
                :prop="fields.membershipYear.name"
                :required="fields.membershipYear.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input-number
                        :precision="0"
                        :step="1"
                        v-model="model[fields.membershipYear.name]"
                    ></el-input-number>
                </el-col>
            </el-form-item>

            <el-form-item :label="fields.status.label" :prop="fields.status.name" :required="fields.status.required">
                <el-col :lg="16" :md="16" :sm="24">
                    <el-select placeholder v-model="model[fields.status.name]">
                        <el-option :value="undefined">--</el-option>
                        <el-option
                            :key="option.id"
                            :label="option.label"
                            :value="option.id"
                            v-for="option in fields.status.options"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-form-item>
            <h3>Subscription</h3>
            <el-form-item
                :label="fields.subscriptionStatus.label"
                :prop="fields.subscriptionStatus.name"
                :required="fields.subscriptionStatus.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input :disabled="true" v-model="model[fields.subscriptionStatus.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.stripeSubscriptionId.label"
                :prop="fields.stripeSubscriptionId.name"
                :required="fields.stripeSubscriptionId.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.stripeSubscriptionId.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.stripeCustomerId.label"
                :prop="fields.stripeCustomerId.name"
                :required="fields.stripeCustomerId.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.stripeCustomerId.name]" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.payments.label"
                :prop="fields.payments.name"
                :required="fields.payments.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <app-subscription-payment-autocomplete-input
                        :fetchFn="fields.payments.fetchFn"
                        :mapperFn="fields.payments.mapperFn"
                        :showCreate="!modal"
                        v-model="model[fields.payments.name]"
                        mode="multiple"
                    ></app-subscription-payment-autocomplete-input>
                </el-col>
            </el-form-item>

            <h3>Orders</h3>
            <el-form-item
                :label="fields.additionalCrystals.label"
                :prop="fields.additionalCrystals.name"
                :required="fields.additionalCrystals.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input-number
                        :precision="0"
                        :step="1"
                        v-model="model[fields.additionalCrystals.name]"
                    ></el-input-number>
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.additionalPlaques.label"
                :prop="fields.additionalPlaques.name"
                :required="fields.additionalPlaques.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input-number
                        :precision="0"
                        :step="1"
                        v-model="model[fields.additionalPlaques.name]"
                    ></el-input-number>
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.shipments.label"
                :prop="fields.shipments.name"
                :required="fields.shipments.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <app-shipment-autocomplete-input
                        :fetchFn="fields.shipments.fetchFn"
                        :mapperFn="fields.shipments.mapperFn"
                        :showCreate="!modal"
                        v-model="model[fields.shipments.name]"
                        mode="multiple"
                    ></app-shipment-autocomplete-input>
                </el-col>
            </el-form-item>

            <h3>Practice Address</h3>

            <el-form-item
                :label="fields.practiceAddress1.label"
                :prop="fields.practiceAddress1.name"
                :required="fields.practiceAddress1.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddress1.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.practiceAddress2.label"
                :prop="fields.practiceAddress2.name"
                :required="fields.practiceAddress2.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddress2.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.practiceAddressCity.label"
                :prop="fields.practiceAddressCity.name"
                :required="fields.practiceAddressCity.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddressCity.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.practiceAddressState.label"
                :prop="fields.practiceAddressState.name"
                :required="fields.practiceAddressState.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddressState.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.practiceAddressZip.label"
                :prop="fields.practiceAddressZip.name"
                :required="fields.practiceAddressZip.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddressZip.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <el-form-item
                :label="fields.practiceAddressCountry.label"
                :prop="fields.practiceAddressCountry.name"
                :required="fields.practiceAddressCountry.required"
            >
                <el-col :lg="16" :md="16" :sm="24">
                    <el-input v-model="model[fields.practiceAddressCountry.name]" @change="copyAddress" />
                </el-col>
            </el-form-item>

            <h3>Shipping Address</h3>
            <input type="checkbox" v-model="shippingMatchesProfileAddress" @change="copyAddress" />same as practice
            <transition mode="out-in" name="fade">
                <div v-show="!shippingMatchesProfileAddress">
                    <el-form-item
                        :label="fields.shippingAddress1.label"
                        :prop="fields.shippingAddress1.name"
                        :required="fields.shippingAddress1.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddress1.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>

                    <el-form-item
                        :label="fields.shippingAddress2.label"
                        :prop="fields.shippingAddress2.name"
                        :required="fields.shippingAddress2.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddress2.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>

                    <el-form-item
                        :label="fields.shippingAddressCity.label"
                        :prop="fields.shippingAddressCity.name"
                        :required="fields.shippingAddressCity.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddressCity.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>

                    <el-form-item
                        :label="fields.shippingAddressState.label"
                        :prop="fields.shippingAddressState.name"
                        :required="fields.shippingAddressState.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddressState.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>

                    <el-form-item
                        :label="fields.shippingAddressZip.label"
                        :prop="fields.shippingAddressZip.name"
                        :required="fields.shippingAddressZip.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddressZip.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>

                    <el-form-item
                        :label="fields.shippingAddressCountry.label"
                        :prop="fields.shippingAddressCountry.name"
                        :required="fields.shippingAddressCountry.required"
                    >
                        <el-col :lg="16" :md="16" :sm="24">
                            <el-input
                                v-model="model[fields.shippingAddressCountry.name]"
                                :disabled="shippingMatchesProfileAddress"
                            />
                        </el-col>
                    </el-form-item>
                </div>
            </transition>
            <div v-if="!model.isInternational">
                <h3>Profile</h3>

                <el-form-item
                    :label="fields.location.label"
                    :prop="fields.location.name"
                    :required="model.isInternational ? false : fields.location.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.location.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileId.label"
                    :prop="fields.profileId.name"
                    :required="fields.profileId.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileId.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item :label="fields.slug.label" :prop="fields.slug.name" :required="fields.slug.required">
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.slug.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileDescription.label"
                    :prop="fields.profileDescription.name"
                    :required="fields.profileDescription.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input :rows="4" type="textarea" v-model="model[fields.profileDescription.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileFacebook.label"
                    :prop="fields.profileFacebook.name"
                    :required="fields.profileFacebook.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileFacebook.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileTwitter.label"
                    :prop="fields.profileTwitter.name"
                    :required="fields.profileTwitter.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileTwitter.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileSpecialization.label"
                    :prop="fields.profileSpecialization.name"
                    :required="fields.profileSpecialization.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileSpecialization.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileWebsite.label"
                    :prop="fields.profileWebsite.name"
                    :required="fields.profileWebsite.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileWebsite.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileLastSynced.label"
                    :prop="fields.profileLastSynced.name"
                    :required="fields.profileLastSynced.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-date-picker
                            placeholder
                            type="datetime"
                            v-model="model[fields.profileLastSynced.name]"
                        ></el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileAvvoReview.label"
                    :prop="fields.profileAvvoReview.name"
                    :required="fields.profileAvvoReview.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileAvvoReview.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileAvvoRating.label"
                    :prop="fields.profileAvvoRating.name"
                    :required="fields.profileAvvoRating.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <!-- <el-input v-model="model[fields.profileAvvoRating.name]" /> -->
                        <el-input-number
                            :precision="0"
                            :step="1"
                            v-model="model[fields.profileAvvoRating.name]"
                        ></el-input-number>
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileGoogleReview.label"
                    :prop="fields.profileGoogleReview.name"
                    :required="fields.profileGoogleReview.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <el-input v-model="model[fields.profileGoogleReview.name]" />
                    </el-col>
                </el-form-item>

                <el-form-item
                    :label="fields.profileGoogleRating.label"
                    :prop="fields.profileGoogleRating.name"
                    :required="fields.profileGoogleRating.required"
                >
                    <el-col :lg="16" :md="16" :sm="24">
                        <!-- <el-input v-model="model[fields.profileGoogleRating.name]" /> -->
                        <el-input-number
                            :precision="0"
                            :step="1"
                            v-model="model[fields.profileGoogleRating.name]"
                        ></el-input-number>
                    </el-col>
                </el-form-item>
            </div>
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
    import { MemberModel } from '@/modules/member/member-model';

    const { fields } = MemberModel;
    const formSchema = new FormSchema([
        fields.id,
        fields.isInternational,
        fields.profileImage,
        fields.name,
        fields.firstName,
        fields.lastName,
        fields.location,
        fields.membershipYear,
        fields.status,
        fields.subscriptionStatus,
        fields.subscriptionLevel,
        fields.subscriptionRenewsAt,
        fields.additionalCrystals,
        fields.additionalPlaques,
        fields.stripeSubscriptionId,
        fields.stripeCustomerId,
        fields.practiceAddress1,
        fields.practiceAddress2,
        fields.practiceAddressCity,
        fields.practiceAddressState,
        fields.practiceAddressZip,
        fields.practiceAddressCountry,
        fields.shipments,
        fields.payments,
        fields.shippingAddress1,
        fields.shippingAddress2,
        fields.shippingAddressCity,
        fields.shippingAddressState,
        fields.shippingAddressZip,
        fields.shippingAddressCountry,
        fields.profileId,
        fields.slug,
        fields.profileDescription,
        fields.profileEmail,
        fields.profileFacebook,
        fields.profileTwitter,
        fields.profileWebsite,
        fields.profileLastSynced,
        fields.profileSpecialization,
        fields.profileAvvoReview,
        fields.profileAvvoRating,
        fields.profileGoogleReview,
        fields.profileGoogleRating,
    ]);

    export default {
        name: 'app-member-form',

        props: ['isEditing', 'record', 'saveLoading', 'modal'],

        data() {
            return {
                rules: formSchema.rules(),
                model: null,
                shippingMatchesProfileAddress: false,
            };
        },

        created() {
            this.model = formSchema.initialValues(this.record || {});

            if (
                this.model.shippingAddress1 === this.model.practiceAddress1 &&
                this.model.shippingAddress2 === this.model.practiceAddress2 &&
                this.model.shippingAddressCity === this.model.practiceAddressCity &&
                this.model.shippingAddressState === this.model.practiceAddressState &&
                this.model.shippingAddressZip === this.model.practiceAddressZip &&
                this.model.shippingAddressCountry === this.model.practiceAddressCountry
            ) {
                this.shippingMatchesProfileAddress = true;
            }
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

                delete this.model.subscriptionStatus;

                const { id, ...values } = formSchema.cast(this.model);

                return this.$emit('submit', {
                    id,
                    values,
                });
            },
            copyAddress() {
                if (this.shippingMatchesProfileAddress) {
                    this.model.shippingAddress1 = this.model.practiceAddress1;
                    this.model.shippingAddress2 = this.model.practiceAddress2;
                    this.model.shippingAddressCity = this.model.practiceAddressCity;
                    this.model.shippingAddressState = this.model.practiceAddressState;
                    this.model.shippingAddressZip = this.model.practiceAddressZip;
                    this.model.shippingAddressCountry = this.model.practiceAddressCountry;
                }
            },
        },
    };
</script>

<style>
</style>
