import React from "react";
import "./style.css";

function EmployeeData(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Active:</strong> {props.active}
          </li>

        </ul>
  
      </div>
  {/* <p className="more"><a href="#">More &rarr; </a></p> */}
    </div>
  );
}

export default EmployeeData;
