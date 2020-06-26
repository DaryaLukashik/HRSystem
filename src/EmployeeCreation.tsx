import * as React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { createEmployee } from './emloyeeList';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function EmployeeCreation() {

    const [nameInRussian, setNameInRussian] = useState('')
    const [nameInEnglish, setNameInEnglish] = useState('')
    const [nationalIdNumber, setNationalIdNumber] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [fullOrPartTime, setFullOrPartTime] = useState('')
    const [contractStartDate, setContractStartDate] = useState('')
    const history = useHistory()

    function handleSubmit(e: any) {
        if (!nameInRussian || !nameInEnglish || !nationalIdNumber) {
            alert('fill the fields')
        }
        else {
            createEmployee({
                id: Date.now(),
                nameInRussian,
                nameInEnglish,
                nationalIdNumber,
                birthDay,
                jobTitle,
                fullOrPartTime,
                contractStartDate
            })
            history.push('/')
        }
    }

    return <div>
        <FormElement>
            <TextField
                label="Name in Russian"
                variant="outlined"
                value={nameInRussian}
                onChange={e => setNameInRussian(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                label="Name in English"
                variant="outlined"
                value={nameInEnglish}
                onChange={e => setNameInEnglish(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                label="National Id Number"
                variant="outlined"
                value={nationalIdNumber}
                onChange={e => setNationalIdNumber(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                label="Job Title"
                variant="outlined"
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                label="Full Or PartTime"
                variant="outlined"
                value={fullOrPartTime}
                onChange={e => setFullOrPartTime(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                type="date"
                variant="outlined"
                value={birthDay}
                onChange={e => setBirthDay(e.target.value)} />
        </FormElement>
        <FormElement>
            <TextField
                type="date"
                variant="outlined"
                value={contractStartDate}
                onChange={e => setContractStartDate(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }} />
        </FormElement>
        <FormElement>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleSubmit}>Create</Button>
        </FormElement>
    </div>
}

const FormElement = styled.div`
    margin-top: 20px
`