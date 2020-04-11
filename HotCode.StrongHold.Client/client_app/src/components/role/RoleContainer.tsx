import * as React from 'react';
import {useRoleQuery} from '../../generated/graphql';
import Role from './Role';

interface Props {
    id: string;
}

const RoleContainer = ({id}: Props) => {
    const {data, error, loading} = useRoleQuery({
        variables: {
            id: String(id)
        },
        skip: id.length === 0
    });

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