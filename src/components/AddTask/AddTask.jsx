import React, { useState } from 'react'
import Modal from '../../assets/Modal/ModalOverlay/Modal';
import { IoAddOutline } from "react-icons/io5";
import "./AddTask.css"
import AddTaskModalContent from '../../assets/Modal/AddTaskModalContent/AddTaskModalContent';
function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDetails,setTaskDetails]=useState({
    title:"",
    description:"",
    dueDate:"",
  })

  function openModal() {
    setIsModalOpen(true)
  }
  return (
    <div className='add-task'>
      <button onClick={openModal}><IoAddOutline size={22} />Add New Task</button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
       <AddTaskModalContent setIsModalOpen={setIsModalOpen} taskDetails={taskDetails} setTaskDetails={setTaskDetails}/>
      </Modal>
    </div>
  )
}

export default AddTask  