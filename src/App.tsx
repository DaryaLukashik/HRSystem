
import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { EmployeeCreation } from './EmployeeCreation';

interface IState{
    employeeInformation: employeeInformation;
    employees: Array<IEmployee>;
}

interface employeeInformation{
    nameInRussian: string
    nameInEnglish: string
    startContract: string
}

interface IEmployee{
    id: number
    value: employeeInformation
    completed: boolean
}

const initializationEmployee = {
    nameInRussian: "",
    nameInEnglish: "",
    startContract: "2020-04-01"

}


export class App extends React.Component<{}, IState> {
    
    constructor(props:{}){
        super(props);

        this.state = {
            employeeInformation: initializationEmployee,
            employees: []
        };
    }
    

    deleteTask(id: number): void{
        const filterdEmployee: Array<IEmployee> = this.state.employees.filter((employee: IEmployee) => employee.id !== id)
        this.setState({employees: filterdEmployee})
    }
    renderListEmployees(): JSX.Element[]{
        return this.state.employees.map(
            (employee: IEmployee, index: number) => {
                return (
                <div key= {employee.id}>
                    <span style={{marginRight: 10}}>{employee.value.nameInRussian}</span>
                    <span style={{marginRight: 10}}>{employee.value.nameInEnglish}</span>
                    <span style={{marginRight: 10}}>{employee.value.startContract}</span>
                    <button onClick={() => this.deleteTask(employee.id)}>Delete</button>
                </div>
                )
        })
    }

    // sortingElementsByRussianName(array: Array<IEmployee>): void{
    //     const sortedEmployees: Array<IEmployee> = this.state.employees.sort(
    //         (a, b)=>(a.value.nameInRussian < b.value.nameInRussian) ? 1 : -1 
    //         )
    //     this.setState({employees: sortedEmployees})
    // }

    // sortingElementsByEnglishName(array: Array<IEmployee>): void{
    //     const sortedEmployees: Array<IEmployee> = this.state.employees.sort(
    //         (a, b)=>(a.value.nameInEnglish > b.value.nameInEnglish) ? 1 : -1 
    //         )
    //     this.setState({employees: sortedEmployees})
    // }

    // sortingElementsByStartContractDate(array: Array<IEmployee>): void{
    //     const sortedEmployees: Array<IEmployee> = this.state.employees.sort(
    //         (a, b)=>(a.value.nameInEnglish > b.value.nameInEnglish) ? 1 : -1 
    //         )
    //     this.setState({employees: sortedEmployees})
    // }

    render(): JSX.Element {
        console.log(this.state)
        const AddButton = {
            backgroundColor: "lightblue"
        }
        return (
           
            <div>
                <h1>Information about employee</h1>
                
                {/* <button onClick={()=>this.sortingElementsByRussianName(this.state.employees)}>Sort by RussianName</button>
                <button onClick={()=>this.sortingElementsByEnglishName(this.state.employees)}>Sort by EnglishName</button>
                <button onClick={()=>this.sortingElementsByStartContractDate(this.state.employees)}>Sort by StartContractDate</button>
                <section>{ this.renderListEmployees() }</section> */}
            </div>
            );
    }

 
}

 