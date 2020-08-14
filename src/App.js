import React, { useState } from "react";
import EmployeeData from "./components/EmployeeProfile";
import employees from "./employees.json";
import NavBar from "./components/NavBar"

const employeeData = employees

const App = () => {

  const [employees, setEmployees] = useState(employeeData);

  const filterActive = () => {
    const filteredEmployees = [...employeeData].filter(employees => employees.active === "Yes");
    setEmployees(filteredEmployees);
  }

  const sortByName = () => {
    const sortedEmployees = [...employeeData].sort(function (a, b) {
      let nameA = a.name;
      let nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    setEmployees(sortedEmployees);
  }

  const sortByEmployeeID = () => {
    const sortedEmployees = [...employeeData].sort(function (a, b) {
      let idA = a.id;
      let idB = b.id;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }

      return 0;
    });

    setEmployees(sortedEmployees);
  }

  const sortByDepartment = () => {
    const sortedEmployees = [...employeeData].sort(function (a, b) {
      let departmentA = a.department;
      let departmentB = b.department;
      if (departmentA < departmentB) {
        return -1;
      }
      if (departmentA > departmentB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    setEmployees(sortedEmployees);
  }

  return (
  <>
  <NavBar
    sortNameClick={sortByName}
    sortEmployeeIDClick = {sortByEmployeeID}
    sortDepartmentClick = {sortByDepartment}
    filterActiveClick = {filterActive}
  />
        {employees.map(employee => (
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



export default App;
