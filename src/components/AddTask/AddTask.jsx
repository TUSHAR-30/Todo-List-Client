import React, { useEffect, useState,useContext } from 'react'
import Modal from '../../assets/Modal/Modal';
import { IoAddOutline } from "react-icons/io5";
import "./AddTask.css"
import TasksContext from '../../TasksContext';
function AddTask() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveButtonEnabled,setIsSaveButtonEnabled]=useState(true);
  const [taskDetails,setTaskDetails]=useState({
    title:"",
    description:"",
    dueDate:"",
  })

   // Get today’s date in YYYY-MM-DD format
   const today = new Date().toISOString().split('T')[0];
  console.log(today)
  function openModal() {
    setIsModalOpen(true)
  }
  function handleFormDetails(e){
    const {name,value}=e.target;
    setTaskDetails((prevDetails)=>{
      return(
        {
          ...prevDetails,
          [name]:value
        }
      )
    })
  }
  function handleFormSubmit(e){
    e.preventDefault(); // Prevent default form submission
    setTasks([...tasks, { id: tasks.length + 1, title: taskDetails.title, description: taskDetails.description , isCompleted: false }]);
    setTaskDetails({ title: "", description: "", dueDate: "" });
    setIsModalOpen(false)
  }
  
  function handleCancelFormSubmit(e){
    setIsModalOpen(false)
  }
  function validateForm(){
    console.log(typeof today, typeof taskDetails.dueDate)
    if(taskDetails.title.trim() && taskDetails.dueDate>=today) return setIsSaveButtonEnabled(true)
    return setIsSaveButtonEnabled(false)
  }
  useEffect(()=>{
    validateForm();
  },[taskDetails,isModalOpen])
  return (
    <div className='add-task'>
      <button onClick={openModal}><IoAddOutline size={22} />Add New Task</button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 style={{ textAlign: 'center' }}>Create Your Task</h2>
        <form className='taskdetailsform' onSubmit={handleFormSubmit}>
          <div className='taskdetails'>
            <label htmlFor="">Enter Task Title</label>
            <input 
            type="text" 
            name="title"
            value={taskDetails.title} 
            onChange={handleFormDetails}/>
          </div>
          <div className='taskdetails'>
            <label htmlFor="">Enter Task Description(Optional)</label>
            <textarea 
            rows={10} 
            style={{ resize: 'none' }} 
            name="description"
            value={taskDetails.description} 
            onChange={handleFormDetails}/>
          </div>
          <div className='taskdetails'>
            <label htmlFor="">Select Due Date</label>
            <input 
            type="date" 
            name="dueDate"
            min={today} 
            max="9999-12-31"
            value={taskDetails.dueDate} 
            onChange={handleFormDetails}/>
          </div>
          <div className='actionbuttons'>
            <button type="button"  onClick={handleCancelFormSubmit}>Cancel</button>
            <button type="submit" name='save-btn' disabled={!isSaveButtonEnabled} className={`${isSaveButtonEnabled?"":"savebtn-not-allowed"}`} >Save</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask  