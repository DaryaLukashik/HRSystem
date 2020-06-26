import { createStore, createEvent } from "effector"

export const createEmployee = createEvent<any>()


export const employeeList = createStore([{
    id: 1,
    nameInRussian: "Darya",
    nameInEnglish: "Darya2",
    nationalIdNumber: "4130794",
    birthDay: "2020-04-01",
    jobTitle: "QA Engineer",
    fullOrPartTime: "full", 
    contractStartDate: "2020-04-01"

}])
employeeList.on(createEmployee, (employeeList, employee)=>[...employeeList, employee])
