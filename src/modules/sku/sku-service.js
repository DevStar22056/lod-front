import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class SkuService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SKU_UPDATE(
          $id: String!
          $data: SkuInput!
        ) {
          skuUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.skuUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SKU_DESTROY($ids: [String!]!) {
          skuDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.skuDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SKU_CREATE($data: SkuInput!) {
          skuCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.skuCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SKU_IMPORT(
          $data: SkuInput!
          $importHash: String!
        ) {
          skuImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.skuImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SKU_FIND($id: String!) {
          skuFind(id: $id) {
            id
            year
            name
            description
            photos {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
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

    return response.data.skuFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SKU_LIST(
          $filter: SkuFilterInput
          $orderBy: SkuOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          skuList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              year
              name
              description
              photos {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
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

    return response.data.skuList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SKU_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          skuAutocomplete(query: $query, limit: $limit) {
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

    return response.data.skuAutocomplete;
  }
}
