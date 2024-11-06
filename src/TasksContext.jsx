// TasksContext.js
import React, { createContext, useState } from 'react';

// Create the context
const TasksContext = createContext();

// Create the provider component
export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Jogging', isCompleted: false },
        { id: 2, title: 'Cricket Practice', isCompleted: false },
        { id: 3, title: 'Completing DSA course', isCompleted: false },
        { id: 4, title: 'Yoga', isCompleted: false },
    ]);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;
