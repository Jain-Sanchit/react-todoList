import React, { useState, useEffect } from 'react';

import './App.css';
import TodoFrom from './components/TodoFrom';
import TodosList from './components/TodosList';

const LOCAL_STORAGE_KEY="react-todo"

function App() {
  const [todos, setTodos]=useState([]);

  useEffect(()=>{
    const storageTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

   const addTodo =(todo)=>{
     setTodos([todo,...todos]);
   }

   const toggleCompleted=(id)=>{
     setTodos(
       todos.map(todo =>{
         if(todo.id === id){
           return {
              ...todo,
              completed: !todo.completed
           };
         }
         return todo;
       })
     )
   }

   const removeTodo=(id)=>{
     setTodos( todos.filter(todo => todo.id !== id))
   }

  return (
    <div className="App">
      <div className="heading">React Todo</div>
      <TodoFrom addTodo={addTodo} />
      <TodosList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
