import React, { useContext } from 'react'
import "./DeleteTaskModalContent.css"
import TasksContext from '../../../Context/TasksContext'
import useNotification from '../../../Hooks/useNotification'

function DeleteTaskModalContent({ openedTask, setIsModalOpen , handleDeleteAnimation }) {
    const [notifications,closeNotification,addNotification]=useNotification()
    const { setTasks } = useContext(TasksContext)
    function deleteTask(userChoice) {
        if (userChoice){
            handleDeleteAnimation();
            setTimeout(() => {
                addNotification({
                    type:"delete",
                    message:"Task Deleted Successfully"
                })
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== openedTask.id));
            }, 800)  //200ms more than animation in order for better visibility.
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