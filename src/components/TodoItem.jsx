import React, { useState } from 'react'
import style from "../Style/TodoItem.module.css"
const TodoItem = ({todo,remove,completedTask}) => {
  
const [isComleted, setIsComleted] = useState("")
const handleCheck = (e,todo)=>{

    setIsComleted(e)
    completedTask(e, todo)
}


  return (
      <>
    <div className={style.box} >
        <input 
         className={style.checkBox} 
         onChange={(e)=>{handleCheck(e.target.checked,todo)}} 
         type="checkBox"
         />
        
        <h3 className={isComleted ? style.lineThrough: ""}>{todo.value}</h3> 
       <button 
       className={style.remove_Button} 
        onClick={()=>remove(todo.id)}
        >Delete</button>
     
    </div>
   
    </>
  )
}

export default TodoItem