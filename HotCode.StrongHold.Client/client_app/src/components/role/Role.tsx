import * as React from 'react';
import {RoleQuery, RoleType} from '../../generated/graphql';
import './styles.scss';

interface Props {
    data: RoleQuery;
}

const className = 'Role';

const LaunchProfile: React.FC<Props> = ({ data }) => {
    
    if (!data.role) {
        return <div>No role available</div>;
    }

    return (
        <div className={className}>
            <div className={`${className}__name`}>
                {data.role.name}
            </div>
        </div>
    );
};

export default LaunchProfile;