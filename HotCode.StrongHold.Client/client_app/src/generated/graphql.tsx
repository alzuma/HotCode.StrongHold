import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: any;
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any;
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any;
  Decimal: any;
  Uri: any;
  Guid: any;
  Short: any;
  UShort: any;
  UInt: any;
  Long: any;
  BigInt: any;
  ULong: any;
  Byte: any;
  SByte: any;
};

















export type CompositeQuery = {
   __typename?: 'CompositeQuery';
  roles?: Maybe<Array<Maybe<RoleType>>>;
};


export type CompositeQueryRolesArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type RoleType = {
   __typename?: 'RoleType';
  /** Role description */
  description: Scalars['String'];
  /** Unique Role Id */
  id: Scalars['String'];
  /** Role name */
  name: Scalars['String'];
  /** Parent role */
  parent?: Maybe<RoleType>;
  /** Parent Id */
  parentId: Scalars['String'];
};

export type RoleQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type RoleQuery = (
  { __typename?: 'CompositeQuery' }
  & { roles?: Maybe<Array<Maybe<(
    { __typename?: 'RoleType' }
    & Pick<RoleType, 'id' | 'name' | 'description'>
    & { parent?: Maybe<(
      { __typename?: 'RoleType' }
      & Pick<RoleType, 'id' | 'name'>
    )> }
  )>>> }
);

export type RolesListQueryVariables = {};


export type RolesListQuery = (
  { __typename?: 'CompositeQuery' }
  & { roles?: Maybe<Array<Maybe<(
    { __typename?: 'RoleType' }
    & Pick<RoleType, 'id' | 'name' | 'description'>
  )>>> }
);


export const RoleDocument = gql`
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
}
    `;
export type RoleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoleQuery, RoleQueryVariables>, 'query'>;

    export const RoleComponent = (props: RoleComponentProps) => (
      <ApolloReactComponents.Query<RoleQuery, RoleQueryVariables> query={RoleDocument} {...props} />
    );
    
export type RoleProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RoleQuery, RoleQueryVariables>
    } & TChildProps;
export function withRole<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoleQuery,
  RoleQueryVariables,
  RoleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RoleQuery, RoleQueryVariables, RoleProps<TChildProps, TDataName>>(RoleDocument, {
      alias: 'role',
      ...operationOptions
    });
};

/**
 * __useRoleQuery__
 *
 * To run a query within a React component, call `useRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RoleQuery, RoleQueryVariables>) {
        return ApolloReactHooks.useQuery<RoleQuery, RoleQueryVariables>(RoleDocument, baseOptions);
      }
export function useRoleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RoleQuery, RoleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RoleQuery, RoleQueryVariables>(RoleDocument, baseOptions);
        }
export type RoleQueryHookResult = ReturnType<typeof useRoleQuery>;
export type RoleLazyQueryHookResult = ReturnType<typeof useRoleLazyQuery>;
export type RoleQueryResult = ApolloReactCommon.QueryResult<RoleQuery, RoleQueryVariables>;
export const RolesListDocument = gql`
    query RolesList {
  roles {
    id
    name
    description
  }
}
    `;
export type RolesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RolesListQuery, RolesListQueryVariables>, 'query'>;

    export const RolesListComponent = (props: RolesListComponentProps) => (
      <ApolloReactComponents.Query<RolesListQuery, RolesListQueryVariables> query={RolesListDocument} {...props} />
    );
    
export type RolesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RolesListQuery, RolesListQueryVariables>
    } & TChildProps;
export function withRolesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RolesListQuery,
  RolesListQueryVariables,
  RolesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RolesListQuery, RolesListQueryVariables, RolesListProps<TChildProps, TDataName>>(RolesListDocument, {
      alias: 'rolesList',
      ...operationOptions
    });
};

/**
 * __useRolesListQuery__
 *
 * To run a query within a React component, call `useRolesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useRolesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RolesListQuery, RolesListQueryVariables>) {
        return ApolloReactHooks.useQuery<RolesListQuery, RolesListQueryVariables>(RolesListDocument, baseOptions);
      }
export function useRolesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RolesListQuery, RolesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RolesListQuery, RolesListQueryVariables>(RolesListDocument, baseOptions);
        }
export type RolesListQueryHookResult = ReturnType<typeof useRolesListQuery>;
export type RolesListLazyQueryHookResult = ReturnType<typeof useRolesListLazyQuery>;
export type RolesListQueryResult = ApolloReactCommon.QueryResult<RolesListQuery, RolesListQueryVariables>;