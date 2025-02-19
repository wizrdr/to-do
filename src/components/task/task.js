import React from "react";

import "./task.css";

const Task = ({ name, category, checked, deleteTask, id, addToCompleted }) => {
  const nameToLowerCase = name.toLowerCase();
//no anon func 
// change span delete-button to button
  return (
    <div className="task">
      <div className="container-checkbox">
        <div className="checkbox">
          <input
            type="checkbox"
            id={id}
            name={nameToLowerCase}
            checked={checked}
            readOnly
            onChange={checked ? null : () => addToCompleted(id)}
          />
          <label htmlFor={id}> {name}</label>
        </div>
        <span className="category-checkbox"> {category} </span>
      </div>

      <span className="delete-button" onClick={() => deleteTask(id)}>
        {" "}
        x{" "}
      </span>
    </div>
  );
};

export default Task;
