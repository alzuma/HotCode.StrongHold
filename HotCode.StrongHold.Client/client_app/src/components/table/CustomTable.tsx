import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './customTableStyle';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TablePagination } from '@material-ui/core';

const useStyles = makeStyles(styles);

interface Props {
    tableHeaderColor: string;
    tableHead: Array<string>;
    tableData: Array<Array<string>>;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const CustomTable: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;

    function getMapValue(obj: any, key: any) {
        if (obj.hasOwnProperty(key)) return obj[key];
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const tableHeaderColorClass = getMapValue(
        classes,
        tableHeaderColor + 'TableHeader'
    );

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
                    {tableData
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((prop, key) => {
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
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default CustomTable;
