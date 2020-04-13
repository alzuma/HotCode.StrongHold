import * as React from 'react';
import { useRoleListQuery } from '../../generated/graphql';
import CustomTable from '../../components/table/CustomTable';

const RolePage = () => {
    const { data, error, loading } = useRoleListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    if (!data.roles) {
        return <div>no roles</div>;
    }

    const tableData: Array<Array<string>> = [];
    data.roles.forEach((value) => {
        if (value) {
            tableData.push([value.id, value.name, value.description]);
        }
    });

    return (
        <CustomTable
            tableHeaderColor="primary"
            tableHead={['Id', 'Name', 'Description']}
            tableData={tableData}
        />
    );
};

export default RolePage;
