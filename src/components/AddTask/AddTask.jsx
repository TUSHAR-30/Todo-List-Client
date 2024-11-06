import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import "./AddTask.css"
function AddTask() {

  return (
    <div className='add-task'>
      <button><IoAddOutline size={22} />Add New Task</button>
    </div>
  )
}

export default AddTask