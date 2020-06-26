import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { EmployeeCreation } from "./EmployeeCreation";
import { EmployeeList } from "./EmployeeList";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <EmployeeList/>
                </Route>
                <Route exact path="/new-employee">
                    <EmployeeCreation />
                </Route>
            </Switch>
        </Router>
    );
}
