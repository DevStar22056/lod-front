import { MemberModel } from '@/modules/member/member-model';

const { fields } = MemberModel;

export default [
  fields.profileImage,
  fields.name,
  fields.membershipYear,
  fields.status,
  fields.subscriptionLevel,
  fields.stripeSubscriptionId,
  fields.stripeCustomerId,
  fields.practiceAddress1,
  fields.practiceAddress2,
  fields.practiceAddressCity,
  fields.practiceAddressState,
  fields.practiceAddressZip,
  fields.shipments,
  fields.payments,
  fields.shippingAddress1,
  fields.shippingAddress2,
  fields.shippingAddressCity,
  fields.shippingAddressState,
  fields.shippingAddressZip,
  fields.profileId,
  fields.profileDescription,
  fields.profileEmail,
  fields.profileFacebook,
  fields.profileTwitter,
  fields.profileWebsite,
  fields.profileLastSynced,
  fields.profileSpecialization,
];
