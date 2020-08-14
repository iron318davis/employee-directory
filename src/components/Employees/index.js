import React from "react";

function Employee(props) {
  return (
    <div className="card" onClick={() => props.displayBio(props.id)}>
      <div className="content">
        <div className="cell"><strong>Name:</strong> {props.name}</div>
        <div className="cell"><strong>Alter Ego:</strong> {props.alterego}</div>
        </div>
   
    </div>
  );
}

export default Employee;
