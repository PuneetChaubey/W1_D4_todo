import React, { useState } from 'react'
import style from "../Style/TodoItem.module.css"
const CompletedTask = ({remove,completedTodos,mapCompletedTask,setMapCompletedTask}) => {



console.log("comp.:",completedTodos,mapCompletedTask)
    


  return (
    <>
    <div> <button  onClick={()=>{setMapCompletedTask(!mapCompletedTask)}}>{mapCompletedTask?   "Hide Completed Task":"Show Completed Task" }</button></div>
    <div>{mapCompletedTask ? completedTodos.map((p)=>{
   return  <div className={style.box} >

   <h3 >{p.value}</h3> 
  <button 
  className={style.remove_Button} 
   onClick={()=>remove(p.id)}
   >Delete</button>

</div>
    }) : null }</div>
    </>
  )
}

export default CompletedTask