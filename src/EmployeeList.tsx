import { useStore } from "effector-react"
import { employeeList, Employee, fireEmployee } from "./emloyeeList"
import * as React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import DeleteIcon from '@material-ui/icons/Delete';




export function EmployeeList() {

    const history = useHistory()

    function deleteEmployee(employee: Employee){
        let firedEmployee = employee
        firedEmployee.dismissal = true
        fireEmployee(firedEmployee)
    }

    function handleSubmit(e: any) {
        history.push('/new-employee')
    }

    const employees = useStore(employeeList).filter(employee => employee.dismissal === false)
    
    return <div>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <TableCell>Name in Russian</TableCell>
                    <TableCell>Name in English</TableCell>
                    <TableCell>National ID Number</TableCell>
                    <TableCell >contractStartDate</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { employees.map((employee) => (
                     <TableRow key={employee.id}>
                         <TableCell>{employee.nameInRussian}</TableCell>
                         <TableCell>{employee.nameInEnglish}</TableCell>
                         <TableCell>{employee.nationalIdNumber}</TableCell>
                        <TableCell>{employee.contractStartDate}</TableCell>
                         <TableCell><DeleteIcon onClick={()=>{deleteEmployee(employee)}}></DeleteIcon></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}>Add new employee</Button>
    </div>
}
