import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './customTableStyle';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles(styles);

interface Props {
    tableHeaderColor: string;
    tableHead: Array<string>;
    tableData: Array<Array<string>>;
}

const CustomTable: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;

    function getMapValue(obj: any, key: any) {
        if (obj.hasOwnProperty(key)) return obj[key];
    }

    const tableHeaderColorClass = getMapValue(
        classes,
        tableHeaderColor + 'TableHeader'
    );

    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={tableHeaderColorClass}>
                        <TableRow className={classes.tableHeadRow}>
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={
                                            classes.tableCell +
                                            ' ' +
                                            classes.tableHeadCell
                                        }
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow
                                key={key}
                                className={classes.tableBodyRow}
                            >
                                {prop.map((prop, key) => {
                                    return (
                                        <TableCell
                                            className={classes.tableCell}
                                            key={key}
                                        >
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default CustomTable;
