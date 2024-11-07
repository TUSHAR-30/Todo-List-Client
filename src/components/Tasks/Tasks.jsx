import React, { useContext } from 'react'
import TasksContext from '../../TasksContext';
import { MdDeleteOutline } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
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
                    <div className='task-deleteicon'>
                        <MdDeleteOutline size={20}  onClick={()=>deleteTask(task.id)} />
                    </div>
                    <div className='task-editicon'>
                        <GrEdit  size={17} />
                    </div>
                </div>
                )
            })}

        </div>
    )
}

export default Tasks