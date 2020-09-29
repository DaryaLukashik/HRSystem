import { createStore, createEvent } from 'effector'

export const createEmployee = createEvent<any>()
export const fireEmployee = createEvent<number>()

export type Employee = {
    id: number
    nameInRussian: string
    nameInEnglish: string
    nationalIdNumber: string
    birthDay: string
    jobTitle: string
    fullOrPartTime: string
    contractStartDate: string
    dismissal: boolean
    firedDate: string
}
type HeadCell = {
    id: string
    label: string
}
const employeeListData: Employee[] = [
    {
        id: 1,
        nameInRussian: 'Дарья',
        nameInEnglish: 'Darya',
        nationalIdNumber: '4130794',
        birthDay: '1993-04-01',
        jobTitle: 'QA Engineer',
        fullOrPartTime: 'full',
        contractStartDate: '2020-04-01',
        dismissal: false,
        firedDate: '',
    },
    {
        id: 2,
        nameInRussian: 'Юра',
        nameInEnglish: 'Yura',
        nationalIdNumber: '4130794',
        birthDay: '2020-04-01',
        jobTitle: 'QA Engineer',
        fullOrPartTime: 'full',
        contractStartDate: '2020-04-01',
        dismissal: false,
        firedDate: '',
    },
    {
        id: 3,
        nameInRussian: 'Антон',
        nameInEnglish: 'Anton',
        nationalIdNumber: '4130394',
        birthDay: '2010-04-01',
        jobTitle: 'UI Designe',
        fullOrPartTime: 'full',
        contractStartDate: '2012-04-01',
        dismissal: false,
        firedDate: '',
    },
    {
        id: 4,
        nameInRussian: 'Евгений',
        nameInEnglish: 'Evgeny',
        nationalIdNumber: '2130394',
        birthDay: '2000-01-21',
        jobTitle: 'Engineer',
        fullOrPartTime: 'full',
        contractStartDate: '2012-04-01',
        dismissal: false,
        firedDate: '',
    },
    {
        id: 5,
        nameInRussian: 'Darya3',
        nameInEnglish: 'Darya2',
        nationalIdNumber: '4130794',
        birthDay: '2020-04-01',
        jobTitle: 'QA Engineer',
        fullOrPartTime: 'full',
        contractStartDate: '2020-04-01',
        dismissal: true,
        firedDate: '',
    },
]
const headCells: HeadCell[] = [
    { id: 'nameInRussian', label: 'Name in Russian' },
    { id: 'nameInEnglish', label: 'Name in English' },
    { id: 'nationalIdNumber', label: 'National ID number' },
    { id: 'birthDay', label: 'Birth day' },
    { id: 'jobTitle', label: 'Job' },
    { id: 'fullOrPartTime', label: 'Part time' },
    { id: 'contractStartDate', label: 'Contract tart date' },
    { id: 'firedDate', label: 'Fired date' },
]
export const tableHeaderNames = createStore(headCells)
export const employeeList = createStore(employeeListData)

employeeList.on(createEmployee, (employeeList, employee) => [...employeeList, employee])

employeeList.on(fireEmployee, (employeeList, employeeId) =>
    employeeList.map((employee) => {
        if (employee.id === employeeId) {
            return makeEmployeeFired(employee)
        }
        return employee
    })
)

function makeEmployeeFired(employee: Employee): Employee {
    return {
        ...employee,
        dismissal: true,
    }
}
