import { Employee, fireEmployee } from './emloyeeList'
import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import { TableHead, TableSortLabel } from '@material-ui/core'

type TablePropsType = {
    employees: Employee[]
    headerNames: string[]
}

export const EmployeeListTable = ({ employees, headerNames }: TablePropsType) => {
    return (
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    {headerNames.map((headerName: string) => (
                        <TableCell>
                            <TableSortLabel>{headerName}</TableSortLabel>
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
