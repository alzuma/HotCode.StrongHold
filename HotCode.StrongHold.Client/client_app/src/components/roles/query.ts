import gql from 'graphql-tag';

export const QUERY_ROLE_LIST = gql`
    query RolesList {
      roles {
        id
        name
        description
      }
    }
`;