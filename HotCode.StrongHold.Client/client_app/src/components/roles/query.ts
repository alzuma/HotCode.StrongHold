import gql from 'graphql-tag';

export const QUERY_ROLE_LIST = gql`
    query RoleList {
      roles {
        id
        name
        description
      }
    }
`;