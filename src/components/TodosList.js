import React from 'react'
import Todo from './Todo'
function TodosList({ todos, toggleCompleted , removeTodo }) {
  return (
    <div>
      <ul style={{listStyle:"none", margin: "25px"}} className="ull">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodosList
