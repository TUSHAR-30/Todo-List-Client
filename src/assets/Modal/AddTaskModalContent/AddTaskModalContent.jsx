import React, { useEffect, useState,useContext } from 'react'
import TasksContext from '../../../Context/TasksContext';
import { calculateNewTaskId } from '../../../utils';
import useNotification from '../../../Hooks/useNotification';

function AddTaskModalContent({taskDetails,setTaskDetails,setIsModalOpen}) {
    const { tasks, setTasks } = useContext(TasksContext);
    const [isSaveButtonEnabled,setIsSaveButtonEnabled]=useState(false);
    const [notifications,closeNotification,addNotification]=useNotification()
  
     // Get today’s date in YYYY-MM-DD format
     const today = new Date().toISOString().split('T')[0];
  
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
      const newTaskId=calculateNewTaskId(tasks)
      addNotification({
        type:"add",
        message:"Task Added Successfully"
      })
      setTasks([...tasks, { id: newTaskId, title: taskDetails.title, description: taskDetails.description , isCompleted: false , taskCreationDate :today ,dueDate:taskDetails.dueDate}]);
      setTaskDetails({ title: "", description: "", dueDate: "" });
      setIsModalOpen(false)
    }
    
    function handleCancelFormSubmit(e){
      setIsModalOpen(false)
    }
    function validateForm(){
      if(taskDetails.title.trim() && taskDetails.dueDate>=today) setIsSaveButtonEnabled(true)
      else setIsSaveButtonEnabled(false)
    }
    useEffect(()=>{
      validateForm();
    },[taskDetails])
  return (
    <>
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
    </>
  )
}

export default AddTaskModalContent