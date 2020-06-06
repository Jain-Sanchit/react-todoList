import React from 'react'

function Todo({ todo, toggleCompleted ,removeTodo}) {
  const checkboxClick = () => {
    toggleCompleted(todo.id)
  };
  
  const handleRemove=()=>{
      removeTodo(todo.id)
  }

  return (
    <div style={{ display: "flex" }} className="list-item">
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          color: "white",
        }}
        className="itm"
      >
        {todo.task}
      </li>
      <div className="btns">
        <input type="checkbox" onClick={checkboxClick} className="chkbox" />
        <button onClick={handleRemove} className="del-btn">X</button>
      </div>
    </div>
  );
}

export default Todo