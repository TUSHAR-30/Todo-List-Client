import React, { useContext } from 'react'
import TasksContext from '../../TasksContext';
import { MdDelete } from "react-icons/md";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";
import "./Tasks.css"
function Tasks() {
    const { tasks, setTasks } = useContext(TasksContext);
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
                    <input type='checkbox' checked={task.isCompleted} onChange={()=>toggleTaskCompletion(task.id)}/>
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