import React, { useEffect, useState, useContext } from 'react'
import TasksContext from '../../../Context/TasksContext';
import useNotification from '../../../Hooks/useNotification';


function EditTaskModalContent({ openedTask, setOpenedTask, setIsModalOpen }) {
    const { tasks, setTasks } = useContext(TasksContext);
    const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(true);
    const [notifications,closeNotification,addNotification]=useNotification()


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
        addNotification({
            type:"edit",
            message:"Task Updated Successfully"
          })

        // Update the existing task instead of adding a new one
        setTasks(tasks.map((task) =>
            task.id === openedTask.id
                ? { ...task, title: openedTask.title, description: openedTask.description, dueDate: openedTask.dueDate }
                : task
        ));
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
                    <label htmlFor="">Enter Task Title</label>
                    <input
                        type="text"
                        name="title"
                        value={openedTask.title}
                        onChange={handleFormDetails} />
                </div>
                <div className='taskdetails'>
                    <label htmlFor="">Enter Task Description(Optional)</label>
                    <textarea
                        rows={10}
                        style={{ resize: 'none' }}
                        name="description"
                        value={openedTask.description}
                        onChange={handleFormDetails} />
                </div>
                <div className='taskdetails'>
                    <label htmlFor="">Select Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        min={today}
                        max="9999-12-31"
                        value={openedTask.dueDate}
                        onChange={handleFormDetails} />
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