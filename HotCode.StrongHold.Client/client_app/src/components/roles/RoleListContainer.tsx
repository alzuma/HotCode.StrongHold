import * as React from 'react';
import { useRoleListQuery } from '../../generated/graphql';
import RoleList from './RoleList';

export interface OwnProps {
    handleIdChange: (newId: string) => void;
}

const RoleListContainer = (props: OwnProps) => {
    const { data, error, loading } = useRoleListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <RoleList data={data} {...props} />;
};

export default RoleListContainer;