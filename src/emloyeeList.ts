import { createStore, createEvent } from "effector"

export const createEmployee = createEvent<any>()
export const fireEmployee = createEvent<number>()

export type Employee = {
    id: number,
    nameInRussian: string,
    nameInEnglish: string,
    nationalIdNumber: string,
    birthDay: string,
    jobTitle: string,
    fullOrPartTime: string,
    contractStartDate: string,
    dismissal: boolean,
    firedDate: string

}

export const employeeList = createStore([{
    id: 1,
    nameInRussian: "Darya",
    nameInEnglish: "Darya2",
    nationalIdNumber: "4130794",
    birthDay: "2020-04-01",
    jobTitle: "QA Engineer",
    fullOrPartTime: "full",
    contractStartDate: "2020-04-01",
    dismissal: false,
    firedDate: ""

},
{
    id: 2,
    nameInRussian: "Yura",
    nameInEnglish: "Darya2",
    nationalIdNumber: "4130794",
    birthDay: "2020-04-01",
    jobTitle: "QA Engineer",
    fullOrPartTime: "full",
    contractStartDate: "2020-04-01",
    dismissal: false,
    firedDate: ""

},
{
    id: 3,
    nameInRussian: "Darya3",
    nameInEnglish: "Darya2",
    nationalIdNumber: "4130794",
    birthDay: "2020-04-01",
    jobTitle: "QA Engineer",
    fullOrPartTime: "full",
    contractStartDate: "2020-04-01",
    dismissal: true,
    firedDate: ""

}])

employeeList.on(createEmployee, (employeeList, employee) => [...employeeList, employee])

employeeList.on(fireEmployee, (employeeList, employeeId) => employeeList.map(employee => {
    if (employee.id === employeeId) {
        return makeEmployeeFired(employee)
    }
    return employee
}))

function makeEmployeeFired(employee: Employee): Employee {
    return {
        ...employee,
        dismissal: true,
    }
}
