import * as React from 'react';
import {useRoleQuery} from '../../generated/graphql';
import Role from './Role';

const RoleContainer = () => {
    const {data, error, loading} = useRoleQuery({variables: {id: '00000000-0000-0000-0000-000000000000'}});

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a role from the panel</div>;
    }

    return <Role data={data}/>;
};

export default RoleContainer;