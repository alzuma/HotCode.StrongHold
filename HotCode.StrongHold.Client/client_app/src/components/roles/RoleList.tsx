import * as React from 'react';
import {RoleListQuery} from '../../generated/graphql';
import './styles.scss';

interface OwnProps {
    handleIdChange: (newId: string) => void;
}

interface Props extends OwnProps {
    data: RoleListQuery;
}

const className = 'RoleList';

const RoleList: React.FC<Props> = ({data, handleIdChange}) => (
    <div className={className}>
        <h3>Roles</h3>
        <ol className={`${className}__list`}>
            {!!data.roles &&
            data.roles.map(
                (role, i) =>
                    !!role && (
                        <li key={role.id} className={`${className}__item`} onClick={() => handleIdChange(role.id)}>
                            {role.id} ({role.name})
                        </li>
                    ),
            )}
        </ol>
    </div>
);

export default RoleList;