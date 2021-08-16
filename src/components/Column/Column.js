import React from "react";
import Task from "components/Task/Task";

import "./Column.scss";

function Column() {
  return (
    <div class="column">
      <header>BrainStom</header>
      <ul className="task-list">
        <Task />
        <Task />
        <Task />
        <li className="task-item">Add anythings</li>
        <li className="task-item">Add anythings</li>
        <li className="task-item">Add anythings</li>
        <li className="task-item">Add anythings</li>
      </ul>
      <footer>Add another</footer>
    </div>
  );
}

export default Column;
