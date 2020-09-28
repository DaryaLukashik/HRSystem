import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { Employee } from './emloyeeList'

type Order = 'asc' | 'desc'

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Employee) => void
    order: Order
    orderBy: string
    rowCount: number
}
type TablePropsType = {
    employees: Employee[]
    headerNames: string[]
}

export const EnhancedTable = ({ employees, headerNames }: TablePropsType) => {
    function EnhancedTableHead(props: EnhancedTableProps) {
        const { order, orderBy, rowCount, onRequestSort } = props
        debugger
        const createSortHandler = (property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property)
        }

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        )
    }

    const rows = employees

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1
        }
        if (b[orderBy] > a[orderBy]) {
            return 1
        }
        return 0
    }

    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key
    ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
        return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
    }

    function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if (order !== 0) return order
            return a[1] - b[1]
        })
        return stabilizedThis.map((el) => el[0])
    }

    const headCells: HeadCell[] = [
        { id: 'name', label: 'Dessert ' },
        { id: 'calories', label: 'Calories' },
        { id: 'fat', label: 'Fat ' },
        { id: 'carbs', label: 'Carbs ' },
        { id: 'protein', label: 'Protein ' },
    ]

    //_____________
    const [order, setOrder] = React.useState<Order>('asc')
    const [orderBy, setOrderBy] = React.useState<keyof Data>('calories')

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    return (
        <TableContainer>
            <Table aria-labelledby="tableTitle" aria-label="enhanced table">
                <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                <TableBody>
                    {stableSort(rows, getComparator(order, orderBy)).map((row) => {
                        return (
                            <TableRow hover tabIndex={-1} key={row.name}>
                                <TableCell component="th" scope="row" padding="none">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
