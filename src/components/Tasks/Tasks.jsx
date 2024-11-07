import React, { useContext } from 'react'
import Task from './Task'

import "./Tasks.css"
import TasksContext from '../../TasksContext'
function Tasks() {
    const { tasks, setTasks } =useContext(TasksContext)

    return (
        <div className='tasks'>
            {tasks.length!=0?(
            <Task />
            ):(
                <>
                 <div className='notasks-animation' >
                <dotlottie-player
                    src="animation.json"
                    speed="1"
                    autoplay
                ></dotlottie-player>
                </div>
              <h3 style={{textAlign:'center'}}>No Tasks are present</h3>
                </>
           
            )
        }
           </div>
    )
}

export default Tasks