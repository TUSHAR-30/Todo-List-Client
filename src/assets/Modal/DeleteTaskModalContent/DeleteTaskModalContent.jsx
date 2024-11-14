import React, { useContext, useState } from 'react'
import "./DeleteTaskModalContent.css"
import TasksContext from '../../../Context/TasksContext'
import useNotification from '../../../Hooks/useNotification'

function DeleteTaskModalContent({ openedTask, setIsModalOpen }) {
    const [notifications,closeNotification,addNotification]=useNotification()
    const { setTasks } = useContext(TasksContext)
    function deleteTask(userChoice) {
        if (userChoice){
            addNotification({
                type:"delete",
                message:"Task Deleted Successfully"
            })
            return setTasks((prevTasks) => prevTasks.filter((task) => task.id !== openedTask.id));
        }
        setIsModalOpen(false)
    }
    return (
        <>
            <div className='deleteQuestion'>Are you sure that you want to delete this task?</div>
            <div className='deleteOptions'>
                <button onClick={() => deleteTask(true)}>Yes</button>
                <button onClick={() => deleteTask(false)}>No</button>
            </div>
        </>

    )
}

export default DeleteTaskModalContent