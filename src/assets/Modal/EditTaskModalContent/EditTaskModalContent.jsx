import React, { useEffect, useState, useContext, useRef } from 'react'
import TasksContext from '../../../Context/TasksContext';
import useNotification from '../../../Hooks/useNotification';
import useInputFocus from '../../../Hooks/useInputFocus';

function EditTaskModalContent({ openedTask, setOpenedTask, setIsModalOpen }) {
    const { tasks, setTasks } = useContext(TasksContext);
    const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(true);
    const [notifications, closeNotification, addNotification] = useNotification()
    const {titleInputRef,descriptionInputRef,dueDateInputRef,handleKeyDown}= useInputFocus()

    // Get today’s date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    function handleFormDetails(e) {
        const { name, value } = e.target;
        setOpenedTask((prevDetails) => {
            return (
                {
                    ...prevDetails,
                    [name]: value
                }
            )
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        // Update the existing task instead of adding a new one
        setTasks(tasks.map((task) =>
            task.id === openedTask.id ? task.editTask(openedTask.title, openedTask.description, openedTask.dueDate) : task
        ));

        addNotification("edit", "Task Updated Successfully")
        setOpenedTask({ title: "", description: "", dueDate: "" });
        setIsModalOpen(false)
    }

    function handleCancelFormSubmit() {
        setIsModalOpen(false)
    }
    function validateForm() {
        if (openedTask.title.trim() && openedTask.dueDate >= today) setIsSaveButtonEnabled(true)
        else setIsSaveButtonEnabled(false)
    }
  
    useEffect(() => {
        validateForm();
    }, [openedTask])

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Edit Your Task</h2>
            <form className='taskdetailsform' onSubmit={handleFormSubmit}>
                <div className='taskdetails'>
                    <div>Enter Task Title</div>
                    <input
                        ref={titleInputRef}
                        type="text"
                        name="title"
                        value={openedTask.title}
                        onChange={handleFormDetails}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className='taskdetails'>
                    <div>Enter Task Description(Optional)</div>
                    <textarea
                        ref={descriptionInputRef}
                        rows={10}
                        style={{ resize: 'none' }}
                        name="description"
                        value={openedTask.description}
                        onChange={handleFormDetails}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className='taskdetails'>
                    <div>Select Due Date</div>
                    <input
                        ref={dueDateInputRef}
                        type="date"
                        name="dueDate"
                        min={today}
                        max="9999-12-31"
                        value={openedTask.dueDate}
                        onChange={handleFormDetails} 
                    />
                </div>
                <div className='actionbuttons'>
                    <button type="button" onClick={handleCancelFormSubmit}>Cancel</button>
                    <button type="submit" name='save-btn' disabled={!isSaveButtonEnabled} className={`${isSaveButtonEnabled ? "" : "savebtn-not-allowed"}`} >Save</button>
                </div>
            </form>
        </>
    )
}

export default EditTaskModalContent