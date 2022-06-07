import React, { useState } from 'react'
import style from "../Style/TodoInput.module.css"
const TodoInput = (props) => {
const [todo, setTodo] = useState("")


  return (
    <div className={style.input_div}>
         <h2>Todo App</h2>
        <input className={style.input_task} value={todo} type="text" placeholder='Enter Task here...' onChange={(e)=>setTodo(e.target.value)} />
        <button className={style.add_task} onClick={()=>{
            props.newTodo(todo)
            setTodo("")
        }}>Add</button>
    </div>
  )
}

export default TodoInput