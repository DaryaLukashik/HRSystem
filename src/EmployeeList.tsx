import { useStore } from "effector-react"
import { employeeList } from "./emloyeeList"
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

    const deleteEmployee = () => {
        const y = document.getElementsByTagName("tr")[1];
        // y.innerHTML = 'f ' + y.parentNode.nodeName;
    }

    function handleSubmit(e: any) {
        history.push('/new-employee')
    }

    const employees = useStore(employeeList)
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
                {employees.map((employee) => (
                    <TableRow key={employee.id} >
                        <TableCell>{employee.nameInRussian}</TableCell>
                        <TableCell>{employee.nameInEnglish}</TableCell>
                        <TableCell>{employee.nationalIdNumber}</TableCell>
                        <TableCell>{employee.contractStartDate}</TableCell>
                        <TableCell><DeleteIcon cursor="pointer" onClick={deleteEmployee}></DeleteIcon></TableCell>
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