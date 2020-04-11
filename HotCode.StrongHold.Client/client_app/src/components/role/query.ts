import gql from 'graphql-tag';

export const QUERY_ROLE = gql` 
query Role($id: ID) {
  roles(id: $id) {
    id
    name
    description
    parent {
      id
      name
    }
  }
}`;