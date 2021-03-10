import { MemberModel } from '@/modules/member/member-model';

const { fields } = MemberModel;

export default [
  fields.id,
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
  fields.shippingAddress1,
  fields.shippingAddress2,
  fields.shippingAddressCity,
  fields.shippingAddressState,
  fields.shippingAddressZip,
  fields.createdAt,
  fields.profileSpecialization,
  fields.subscriptionRenewsAt,
];
