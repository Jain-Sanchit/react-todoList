import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function TodoFrom({addTodo}) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleInput = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit=(e)=>{
      e.preventDefault()
      if(todo.task.trim()){
          addTodo({...todo,id: uuid()})

          setTodo({...todo,task:""})
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={todo.task}
          name="task"
          className="input-box"
          placeholder="Enter a task..."
        />
        <button type="submit" className="add-btn"> Add Task </button>
      </form>
    </div>
  );
}

export default TodoFrom;
