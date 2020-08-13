import React, { Component } from "react";
import EmployeeData from "./components/EmployeeProfile";
import employees from "./employees.json";
import NavBar from "./components/NavBar"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
  <>
  <NavBar/>
        {this.state.employees.map(employee => (
          <EmployeeData
            id={employee.id}
            name={employee.name}
            department={employee.department}
            active={employee.active}
          />
        ))}
      </>
    );
  }

}

export default App;
