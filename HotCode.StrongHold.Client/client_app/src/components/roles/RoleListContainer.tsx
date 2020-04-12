import * as React from 'react';
import { useRoleListQuery } from '../../generated/graphql';
import RoleList from './RoleList';

const RoleListContainer = () => {
    const { data, error, loading } = useRoleListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <RoleList data={data} />;
};

export default RoleListContainer;