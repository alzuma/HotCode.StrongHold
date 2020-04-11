import * as React from 'react';
import {RoleListQuery} from '../../generated/graphql';
import './styles.scss';

interface Props {
    data: RoleListQuery;
}

const className = 'RoleList';

const RoleList: React.FC<Props> = ({data}) => (
    <div className={className}>
        <h3>Roles</h3>
        <ol className={`${className}__list`}>
            {!!data.roles &&
            data.roles.map(
                (role, i) =>
                    !!role && (
                        <li key={role.id} className={`${className}__item`}>
                            {role.id} ({role.name})
                        </li>
                    ),
            )}
        </ol>
    </div>
);

export default RoleList;