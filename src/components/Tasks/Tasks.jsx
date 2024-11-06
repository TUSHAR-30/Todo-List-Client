import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";
import "./Tasks.css"
function Tasks() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Jogging', isCompleted: false },
        { id: 2, title: 'Cricket Practice', isCompleted: false },
        { id: 3, title: 'Completing DSA course', isCompleted: false },
        { id: 4, title: 'Yoga', isCompleted: false },
    ]);
    function deleteTask(taskId) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    function toggleTaskCompletion(taskId) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    }
    return (
        <div className='tasks'>
            {tasks.map((task) => {
                return(
                <div key={task.id} className='task'>
                    <input type='checkbox' checked={task.isCompleted} onClick={()=>toggleTaskCompletion(task.id)}/>
                    <p className={`task-title ${task.isCompleted?"completed-task":""}`}>{task.title}</p>
                    <MdDelete size={20} className='task-deleteicon' onClick={()=>deleteTask(task.id)} />
                    <PiDotsThreeCircleVerticalFill className='task-moreInfoicon' size={25} />
                </div>
                )
            })}

        </div>
    )
}

export default Tasks