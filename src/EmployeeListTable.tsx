import { Employee, fireEmployee } from './emloyeeList'
import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import { TableHead, TableSortLabel } from '@material-ui/core'

type HeaderNamesType = {
    id: string
    label: string
}

type TablePropsType = {
    employees: Employee[]
    headerNames: HeaderNamesType[]
}

export const EmployeeListTable = ({ employees, headerNames }: TablePropsType) => {
    const [activeSort, setActiveSort] = React.useState(false)
    const [sortArrowUp, setSortArrowUp] = React.useState(true)

    const clickToSort = (id: string) => {
        if (id === 'nameInRussian') {
            setActiveSort(true)
            setSortArrowUp(!sortArrowUp)
            sortArrowUp
                ? employees.sort((a, b) => (a.nameInRussian > b.nameInRussian ? 1 : a.nameInRussian < b.nameInRussian ? -1 : 0))
                : employees.sort((b, a) => (a.nameInRussian > b.nameInRussian ? 1 : a.nameInRussian < b.nameInRussian ? -1 : 0))
        }
    }
    return (
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    {headerNames.map((headerName: HeaderNamesType) => (
                        <TableCell>
                            <TableSortLabel
                                direction={sortArrowUp ? 'asc' : 'desc'}
                                active={headerName.id === 'nameInRussian' && activeSort}
                                onClick={() => clickToSort(headerName.id)}
                            >
                                {headerName.label}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                    <TableCell>Edit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map((employee: Employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.nameInRussian}</TableCell>
                        <TableCell>{employee.nameInEnglish}</TableCell>
                        <TableCell>{employee.nationalIdNumber}</TableCell>
                        <TableCell>{employee.birthDay}</TableCell>
                        <TableCell>{employee.jobTitle}</TableCell>
                        <TableCell>{employee.fullOrPartTime}</TableCell>
                        <TableCell>{employee.contractStartDate}</TableCell>
                        <TableCell>{employee.firedDate}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => {
                                    fireEmployee(employee.id)
                                }}
                            ></DeleteIcon>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
