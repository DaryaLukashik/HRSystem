import { useStore } from 'effector-react'
import { employeeList, tableHeadersName } from './emloyeeList'
import * as React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useState } from 'react'
import { EmployeeListTable } from './EmployeeListTable'

export function EmployeeList() {
    const history = useHistory()

    function handleSubmit(e: any) {
        history.push('/new-employee')
    }

    const [displayedExEmployees, setDisplayedExEmployees] = useState(false)
    const employees = useStore(employeeList).filter(
        (employee) => employee.dismissal === displayedExEmployees
    )
    const headerNames = useStore(tableHeadersName)
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        onChange={(e) => {
                            setDisplayedExEmployees(e.target.checked)
                        }}
                    />
                }
                label="Ex-employees"
                labelPlacement="end"
            />
            <EmployeeListTable employees={employees} headerNames={headerNames} />
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Add new employee
            </Button>
        </div>
    )
}
