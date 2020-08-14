import React from "react";



const NavBar = (props) => {
  return (
      <div>
    <h1>Employee Directory</h1>
    <button onClick={()=>props.sortNameClick()}>Sort by Name</button>
    <button onClick={()=>props.sortEmployeeIDClick()}>Sort by Employee ID </button>
    <button onClick={()=>props.sortDepartmentClick()}>Sort by Department</button>
    <button onClick={()=>props.filterActiveClick()}>Show only Active Employees</button>
    </div>
  );
}

export default NavBar;
