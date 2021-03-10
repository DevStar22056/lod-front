import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class MemberService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEMBER_UPDATE($id: String!, $data: MemberInput!) {
          memberUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.memberUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEMBER_DESTROY($ids: [String!]!) {
          memberDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.memberDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEMBER_CREATE($data: MemberInput!) {
          memberCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.memberCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEMBER_IMPORT($data: MemberInput!, $importHash: String!) {
          memberImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.memberImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_FIND($id: String!) {
          memberFind(id: $id) {
            id
            isInternational
            profileImage {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            name
            firstName
            lastName
            location
            membershipYear
            status
            subscriptionStatus
            subscriptionLevel
            subscriptionRenewsAt
            stripeSubscriptionStartedAt
            additionalCrystals
            additionalPlaques
            stripeSubscriptionId
            stripeCustomerId
            practiceAddress1
            practiceAddress2
            practiceAddressCity
            practiceAddressState
            practiceAddressZip
            practiceAddressCountry
            shipments {
              id
            }
            payments {
              id
              stripeInvoice
            }
            shippingAddress1
            shippingAddress2
            shippingAddressCity
            shippingAddressState
            shippingAddressZip
            shippingAddressCountry
            profileId
            slug
            profileDescription
            profileEmail
            profileFacebook
            profileTwitter
            profileWebsite
            profileLastSynced
            profileSpecialization
            profileAvvoReview
            profileAvvoRating
            profileGoogleReview
            profileGoogleRating
            createdAt
            updatedAt
            activedAt
            activedBy {
              id
              fullName
            }
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.memberFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_LIST($filter: MemberFilterInput, $orderBy: MemberOrderByEnum, $limit: Int, $offset: Int) {
          memberList(filter: $filter, orderBy: $orderBy, limit: $limit, offset: $offset) {
            count
            rows {
              id
              isInternational
              profileImage {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
              }
              name
              membershipYear
              status
              subscriptionStatus
              subscriptionLevel
              subscriptionRenewsAt
              stripeSubscriptionId
              stripeCustomerId
              practiceAddress1
              practiceAddress2
              practiceAddressCity
              practiceAddressState
              practiceAddressZip
              shipments {
                id
              }
              shippingAddress1
              shippingAddress2
              shippingAddressCity
              shippingAddressState
              shippingAddressZip
              profileSpecialization
              subscriptionRenewsAt
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.memberList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_AUTOCOMPLETE($query: String, $limit: Int) {
          memberAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.memberAutocomplete;
  }
}
