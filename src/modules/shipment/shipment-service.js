import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class ShipmentService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHIPMENT_UPDATE($id: String!, $data: ShipmentInput!) {
          shipmentUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.shipmentUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHIPMENT_DESTROY($ids: [String!]!) {
          shipmentDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.shipmentDestroy;
  }

  static async shipAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHIPMENT_SHIP($ids: [String!]!) {
          shipmentShip(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.shipmentShip;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHIPMENT_CREATE($data: ShipmentInput!) {
          shipmentCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.shipmentCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHIPMENT_IMPORT($data: ShipmentInput!, $importHash: String!) {
          shipmentImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.shipmentImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SHIPMENT_FIND($id: String!) {
          shipmentFind(id: $id) {
            id
            sku {
              id
              name
              shipmentSku {
                quantity
              }
            }
            shipped
            member {
              id
              name
            }
            shipmentYear
            trackingId
            notes
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.shipmentFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SHIPMENT_LIST($filter: ShipmentFilterInput, $orderBy: ShipmentOrderByEnum, $limit: Int, $offset: Int) {
          shipmentList(filter: $filter, orderBy: $orderBy, limit: $limit, offset: $offset) {
            count
            rows {
              id
              sku {
                id
                name
                shipmentSku {
                  quantity
                }
              }
              shipped
              member {
                id
                name
                shippingAddress1
                shippingAddress2
                shippingAddressCity
                shippingAddressState
                shippingAddressZip
                shippingAddressCountry
                profileEmail
                profileSpecialization
                stripeSubscriptionStartedAt
              }
              shipmentYear
              trackingId
              notes
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

    return response.data.shipmentList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SHIPMENT_AUTOCOMPLETE($query: String, $limit: Int) {
          shipmentAutocomplete(query: $query, limit: $limit) {
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

    return response.data.shipmentAutocomplete;
  }
}
