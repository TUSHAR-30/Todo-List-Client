// TasksContext.js
import React, { createContext, useState } from 'react';

// Create the context
const TasksContext = createContext();

// Create the provider component
export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Jogging', isCompleted: false , description:"This is Jogging" ,dueDate:"2024-11-28" },
        { id: 2, title: 'Cricket Practice', isCompleted: false , description:"This is Cricket" ,dueDate:"2026-02-12" },
        { id: 3, title: 'Completing DSA course', isCompleted: false , description:"This is DSA" ,dueDate:"2024-08-02"},
        { id: 4, title: 'Yoga', isCompleted: false , description:"This is Yoga" ,dueDate:"2024-02-20"},
    ]);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;
