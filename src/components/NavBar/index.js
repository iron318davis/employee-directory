import React from "react";


function NavBar(props) {
  return (
      <div>
    <h1>Employee Directory</h1>
    <button>Sort by Name</button>
    <button>Sort by Employee ID </button>
    <button>Sort by Department</button>
    <button>Filter Active Employees</button>
    </div>
  );
}

export default NavBar;
