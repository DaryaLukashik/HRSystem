import { createStore, createEvent } from "effector"

export const createEmployee = createEvent<any>()
export const fireEmployee = createEvent<any>()

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

}])
employeeList.on(createEmployee, (employeeList, employee)=>[...employeeList, employee])
employeeList.on(fireEmployee, (employeeList, employee)=>[...employeeList, employee])
