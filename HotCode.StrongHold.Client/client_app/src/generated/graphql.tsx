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
  role?: Maybe<RoleType>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
};


export type CompositeQueryRoleArgs = {
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
  & { role?: Maybe<(
    { __typename?: 'RoleType' }
    & Pick<RoleType, 'id' | 'name' | 'description'>
    & { parent?: Maybe<(
      { __typename?: 'RoleType' }
      & Pick<RoleType, 'id' | 'name'>
    )> }
  )> }
);

export type RoleListQueryVariables = {};


export type RoleListQuery = (
  { __typename?: 'CompositeQuery' }
  & { roles?: Maybe<Array<Maybe<(
    { __typename?: 'RoleType' }
    & Pick<RoleType, 'id' | 'name' | 'description'>
  )>>> }
);


export const RoleDocument = gql`
    query Role($id: ID) {
  role(id: $id) {
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
export const RoleListDocument = gql`
    query RoleList {
  roles {
    id
    name
    description
  }
}
    `;
export type RoleListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoleListQuery, RoleListQueryVariables>, 'query'>;

    export const RoleListComponent = (props: RoleListComponentProps) => (
      <ApolloReactComponents.Query<RoleListQuery, RoleListQueryVariables> query={RoleListDocument} {...props} />
    );
    
export type RoleListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RoleListQuery, RoleListQueryVariables>
    } & TChildProps;
export function withRoleList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoleListQuery,
  RoleListQueryVariables,
  RoleListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RoleListQuery, RoleListQueryVariables, RoleListProps<TChildProps, TDataName>>(RoleListDocument, {
      alias: 'roleList',
      ...operationOptions
    });
};

/**
 * __useRoleListQuery__
 *
 * To run a query within a React component, call `useRoleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useRoleListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RoleListQuery, RoleListQueryVariables>) {
        return ApolloReactHooks.useQuery<RoleListQuery, RoleListQueryVariables>(RoleListDocument, baseOptions);
      }
export function useRoleListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RoleListQuery, RoleListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RoleListQuery, RoleListQueryVariables>(RoleListDocument, baseOptions);
        }
export type RoleListQueryHookResult = ReturnType<typeof useRoleListQuery>;
export type RoleListLazyQueryHookResult = ReturnType<typeof useRoleListLazyQuery>;
export type RoleListQueryResult = ApolloReactCommon.QueryResult<RoleListQuery, RoleListQueryVariables>;