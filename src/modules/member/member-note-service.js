import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class MemberNoteService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEMBER_NOTE_UPDATE($id: String!, $data: MemberNoteInput!) {
          memberNoteUpdate(id: $id, data: $data) {
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
        mutation MEMBER_NOTE_DESTROY($ids: [String!]!) {
          memberNoteDestroy(ids: $ids)
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
        mutation MEMBER_NOTE_CREATE($data: MemberNoteInput!) {
          memberNoteCreate(data: $data) {
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

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_NOTE_FIND($id: String!) {
          memberNoteFind(id: $id) {
            id
            note
            memberId
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.memberNoteFind;
  }

  static async findByMemberId(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_NOTE_LIST_BY_ID($id: String!) {
          memberNoteListById(id: $id) {
            count
            rows {
              id
              note
              memberId
              updatedAt
              updatedBy {
                id
                fullName
              }
            }
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.memberNoteListById;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query MEMBER_NOTE_LIST(
          $filter: MemberFilterInput
          $orderBy: MemberOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          memberNoteList(filter: $filter, orderBy: $orderBy, limit: $limit, offset: $offset) {
            count
            rows {
              id
              note
              memberId
              createdAt
              updatedAt
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
}
