import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { ShipmentField } from '@/modules/shipment/shipment-field';
import { SubscriptionPaymentField } from '@/modules/subscription-payment/subscription-payment-field';
import ImagesField from '@/shared/fields/images-field';
import { UserField } from '@/modules/auth/user-field';
import BooleanField from '@/shared/fields/boolean-field';

function label(name) {
  return i18n(`entities.member.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.member.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  isInternational: new BooleanField('isInternational', label('isInternational')),
  profileImage: new ImagesField('profileImage', label('profileImage'), 'member/profileImage', {}),
  name: new StringField('name', label('name'), {
    required: true,
    min: 2,
    max: 255,
  }),
  firstName: new StringField('firstName', label('firstName'), {
    required: true,
    min: 2,
    max: 255,
  }),
  lastName: new StringField('lastName', label('lastName'), {
    required: true,
    min: 2,
    max: 255,
  }),
  location: new StringField('location', label('location'), {
    required: true,
    min: 2,
    max: 255,
  }),
  membershipYear: new IntegerField('membershipYear', label('membershipYear'), {
    required: true,
    min: 2015,
    max: 2030,
  }),
  status: new EnumeratorField(
    'status',
    label('profileStatus'),
    [
      { id: 'pending', label: enumeratorLabel('status', 'pending') },
      { id: 'active', label: enumeratorLabel('status', 'active') },
      { id: 'suspended', label: enumeratorLabel('status', 'suspended') },
      { id: 'canceled', label: enumeratorLabel('status', 'canceled') },
      { id: 'denied', label: enumeratorLabel('status', 'denied') },
    ],
    {
      required: true,
    },
  ),
  subscriptionStatus: new EnumeratorField(
    'subscriptionStatus',
    label('subscriptionStatus'),
    [
      { id: 'trialing', label: enumeratorLabel('subscriptionStatus', 'trialing') },
      { id: 'active', label: enumeratorLabel('subscriptionStatus', 'active') },
      { id: 'past_due', label: enumeratorLabel('subscriptionStatus', 'past_due') },
      { id: 'unpaid', label: enumeratorLabel('subscriptionStatus', 'unpaid') },
      { id: 'canceled', label: enumeratorLabel('subscriptionStatus', 'canceled') },
    ],
    {
      required: false,
    },
  ),
  subscriptionLevel: new EnumeratorField(
    'subscriptionLevel',
    label('subscriptionLevel'),
    [
      { id: 'charter', label: enumeratorLabel('subscriptionLevel', 'charter') },
      { id: 'featured', label: enumeratorLabel('subscriptionLevel', 'featured') },
      { id: 'distinguished', label: enumeratorLabel('subscriptionLevel', 'distinguished') },
    ],
    {
      required: true,
    },
  ),
  stripeSubscriptionStartedAt: new DateTimeField('stripeSubscriptionStartedAt', label('stripeSubscriptionStartedAt')),
  subscriptionRenewsAt: new DateTimeField('subscriptionRenewsAt', label('subscriptionRenewsAt')),
  additionalCrystals: new IntegerField('additionalCrystals', label('additionalCrystals'), {}),
  additionalPlaques: new IntegerField('additionalPlaques', label('additionalPlaques'), {}),
  stripeSubscriptionId: new StringField('stripeSubscriptionId', label('stripeSubscriptionId'), {}),
  stripeCustomerId: new StringField('stripeCustomerId', label('stripeCustomerId'), {}),
  practiceAddress1: new StringField('practiceAddress1', label('practiceAddress1'), {
    required: true,
  }),
  practiceAddress2: new StringField('practiceAddress2', label('practiceAddress2'), {}),
  practiceAddressCity: new StringField('practiceAddressCity', label('practiceAddressCity'), {
    required: true,
  }),
  practiceAddressState: new StringField('practiceAddressState', label('practiceAddressState'), {
    required: true,
  }),
  practiceAddressZip: new StringField('practiceAddressZip', label('practiceAddressZip'), {
    required: true,
  }),
  practiceAddressCountry: new StringField('practiceAddressCountry', label('practiceAddressCountry'), {}),
  shipments: ShipmentField.relationToMany('shipments', label('shipments'), {}),
  payments: SubscriptionPaymentField.relationToMany('payments', label('payments'), {}),
  shippingAddress1: new StringField('shippingAddress1', label('shippingAddress1'), {
    required: true,
  }),
  shippingAddress2: new StringField('shippingAddress2', label('shippingAddress2'), {}),
  shippingAddressCity: new StringField('shippingAddressCity', label('shippingAddressCity'), {
    required: true,
  }),
  shippingAddressState: new StringField('shippingAddressState', label('shippingAddressState'), {
    required: true,
  }),
  shippingAddressZip: new StringField('shippingAddressZip', label('shippingAddressZip'), {
    required: true,
  }),
  shippingAddressCountry: new StringField('shippingAddressCountry', label('shippingAddressCountry'), {}),
  profileId: new StringField('profileId', label('profileId'), {}),
  slug: new StringField('slug', label('slug'), {}),

  profileDescription: new StringField('profileDescription', label('profileDescription'), {}),
  profileEmail: new StringField('profileEmail', label('profileEmail'), {
    required: true,
  }),
  profileFacebook: new StringField('profileFacebook', label('profileFacebook'), {}),
  profileTwitter: new StringField('profileTwitter', label('profileTwitter'), {}),
  profileWebsite: new StringField('profileWebsite', label('profileWebsite'), {}),
  profileLastSynced: new DateTimeField('profileLastSynced', label('profileLastSynced'), {}),
  profileSpecialization: new StringField('profileSpecialization', label('profileSpecialization'), {}),
  profileAvvoReview: new StringField('profileAvvoReview', label('profileAvvoReview'), {}),
  profileAvvoRating: new IntegerField('profileAvvoRating', label('profileAvvoRating'), {}),
  profileGoogleReview: new StringField('profileGoogleReview', label('profileGoogleReview'), {}),
  profileGoogleRating: new IntegerField('profileGoogleRating', label('profileGoogleRating'), {}),

  createdAt: new DateTimeField('createdAt', label('createdAt')),
  updatedAt: new DateTimeField('updatedAt', label('updatedAt')),
  activedAt: new DateTimeField('activedAt', label('activedAt')),
  activedBy: UserField.relationToOne('activedBy', label('activedBy'), {}),
  createdAtRange: new DateTimeRangeField('createdAtRange', label('createdAtRange')),
  subscriptionRenewsAtRange: new DateTimeRangeField('subscriptionRenewsAtRange', label('subscriptionRenewsAtRange')),
  membershipYearRange: new IntegerRangeField('membershipYearRange', label('membershipYearRange')),
  practiceAddressZipRange: new IntegerRangeField('practiceAddressZipRange', label('practiceAddressZipRange')),
  shippingAddressZipRange: new IntegerRangeField('shippingAddressZipRange', label('shippingAddressZipRange')),
  profileLastSyncedRange: new DateTimeRangeField('profileLastSyncedRange', label('profileLastSyncedRange')),
};

export class MemberModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
