import React, { useContext, useState } from 'react';
import Task from './Task';
import './Tasks.css';
import TasksContext from '../../TasksContext';

function Tasks() {
    const { tasks, setTasks } = useContext(TasksContext);
    const { selectedFilter, setSelectedFilter } = useContext(TasksContext)
    const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);
    let tempBooleanTaskCompleted=selectedFilter==="Completed"?true:false;

    // Handler to manage the drop and reorder tasks
    const handleDrop = (index) => {
        if (draggedTaskIndex === null) return;

        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        updatedTasks.splice(index, 0, movedTask);

        setTasks(updatedTasks);
        setDraggedTaskIndex(null); // Reset the dragged task index after drop
    };

    return (
        <div className='tasks'>
            {tasks.length !== 0 ? (
                tasks.map((task, index) => (
                    selectedFilter == "All Tasks" ? (
                        <Task
                            key={task.id}
                            task={task}
                            index={index}
                            onDragStart={() => setDraggedTaskIndex(index)}
                            onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
                            onDrop={() => handleDrop(index)}
                        />
                    ) : (
                        task.isCompleted === tempBooleanTaskCompleted && (
                            <Task
                                key={task.id}
                                task={task}
                                index={index}
                                onDragStart={() => setDraggedTaskIndex(index)}
                                onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
                                onDrop={() => handleDrop(index)}
                            />
                        )
                    )

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
