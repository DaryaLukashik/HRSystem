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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';





export function EmployeeList() {

    function handleSubmit(e: any) {
        history.push('/new-employee')
    }
    function showFireEmployee(){}
    
    const employees = useStore(employeeList).filter(employee => employee.dismissal === false)

    const history = useHistory()

    return <div>
        <FormControlLabel
          value="top"
          control={
          <Checkbox 
          color="primary" 
          onChange={()=>console.log('test')}/>
        }
          label="Top"
          labelPlacement="end"
        />
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
                         <TableCell><DeleteIcon onClick={()=>{fireEmployee(employee.id)}}></DeleteIcon></TableCell>
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
