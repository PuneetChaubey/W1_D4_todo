import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import CompletedTask from './CompletedTask';
const TodoApp = () => {

const [newTodo, setNewTodo] = useState([]);
const [check, setCheck] = useState("")
const [completedTodos, setCompletedTodos] = useState([])

const [mapCompletedTask, setMapCompletedTask] = useState(false)
const upDateTodo = (task)=>{
setNewTodo([...newTodo, {
    value:task,
   id: uuidv4()
}])
   
}

const removeTask = (ind)=>{

  setNewTodo(newTodo.filter((e)=>{
    return (e.id!==ind)
  }))
}

const completedTask = (checked,checkedTask)=>{
  if(checked){
    setCompletedTodos([...completedTodos,checkedTask])
  }
}

// const removeCompletedTask = ()=>{

//   setNewTodo(completedTodos.filter((el)=>{
    
//     return 
//   }))


// }

// console.log(completedTodos)


  return (
    <div>TodoApp
        <TodoInput  newTodo={upDateTodo} />
        <TodoList>
          {
              newTodo.map((p)=>{
              return <TodoItem 
              key={p.id} 
              todo = {p}
              remove={removeTask}
              completedTask={completedTask}
              />
              })
          }

        </TodoList>
        <CompletedTask  completedTodos={completedTodos}  remove={removeTask}  mapCompletedTask={mapCompletedTask} setMapCompletedTask={setMapCompletedTask} />
    </div>
  )
}

export default TodoApp