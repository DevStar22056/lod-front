import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class SubscriptionPaymentService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUBSCRIPTIONPAYMENT_UPDATE(
          $id: String!
          $data: SubscriptionPaymentInput!
        ) {
          subscriptionPaymentUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.subscriptionPaymentUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUBSCRIPTIONPAYMENT_DESTROY($ids: [String!]!) {
          subscriptionPaymentDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.subscriptionPaymentDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUBSCRIPTIONPAYMENT_CREATE($data: SubscriptionPaymentInput!) {
          subscriptionPaymentCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.subscriptionPaymentCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUBSCRIPTIONPAYMENT_IMPORT(
          $data: SubscriptionPaymentInput!
          $importHash: String!
        ) {
          subscriptionPaymentImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.subscriptionPaymentImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SUBSCRIPTIONPAYMENT_FIND($id: String!) {
          subscriptionPaymentFind(id: $id) {
            id
            stripeInvoice
            member {
              id
              name
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.subscriptionPaymentFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SUBSCRIPTIONPAYMENT_LIST(
          $filter: SubscriptionPaymentFilterInput
          $orderBy: SubscriptionPaymentOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          subscriptionPaymentList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              stripeInvoice
              member {
                id
                name
              }
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

    return response.data.subscriptionPaymentList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SUBSCRIPTIONPAYMENT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          subscriptionPaymentAutocomplete(query: $query, limit: $limit) {
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

    return response.data.subscriptionPaymentAutocomplete;
  }
}
