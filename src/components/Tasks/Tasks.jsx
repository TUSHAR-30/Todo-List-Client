import React, { useContext, useState, useEffect } from 'react';
import Task from './Task';
import './Tasks.css';
import TasksContext from '../../TasksContext';
import { filterTasksByDateRange, sortedTasks_Alphabatically_Ascending, sortedTasks_CreationDate_Descending } from '../../utils';


function Tasks() {
    const { tasks , selectedFilter , filterStartDate , filterEndDate , selectedSort } = useContext(TasksContext);
    const [tasksToBeShown, setTasksToBeShown] = useState(tasks);
    const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);

    useEffect(() => {
        let temp=[...tasks]
        temp=filterTasksByDateRange(temp,filterStartDate,filterEndDate);
        let tempBooleanTaskCompleted = selectedFilter === "Completed" ? true : false;
        temp=selectedFilter == "All Tasks"?temp:(temp.filter((task) => task.isCompleted == tempBooleanTaskCompleted))

        if(selectedSort){
            temp=selectedSort=="Sort by Alphabatically"
            ?sortedTasks_Alphabatically_Ascending(temp)
            :sortedTasks_CreationDate_Descending(temp)
        }
        setTasksToBeShown(temp)
        
    }, [selectedFilter, tasks ,filterStartDate , filterEndDate ,selectedSort])


    return (
        <div className='tasks'>
            {tasks.length !== 0 ? (
                tasksToBeShown.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        draggedTaskIndex={draggedTaskIndex}
                        setDraggedTaskIndex={setDraggedTaskIndex}
                    />
                ))
            ) : (
                <>
                    <div className='notasks-animation'>
                        <dotlottie-player src="animation.json" speed="1" autoplay></dotlottie-player>
                    </div>
                    <h3 style={{ textAlign: 'center' }}>No Tasks are present</h3>
                </>
            )}
        </div>
    );
}

export default Tasks;