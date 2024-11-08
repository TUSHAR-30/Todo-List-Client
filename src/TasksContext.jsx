// TasksContext.js
import React, { createContext, useEffect, useState } from 'react';

// Create the context
const TasksContext = createContext();

// Create the provider component
export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Jogging',
            isCompleted: false,
            description: "This is Jogging",
            dueDate: "2024-11-28",  //YYYY-MM-DD
            taskCreationDate:"2024-02-20",
        },
        { 
            id: 2, 
            title: 'Cricket Practice', 
            isCompleted: false, 
            description: "This is Cricket", 
            dueDate: "2026-02-12",
            taskCreationDate:"2023-06-16",
        },
        { 
            id: 3, 
            title: 'Completing DSA course', 
            isCompleted: true, 
            description: "This is DSA", 
            dueDate: "2024-12-02",
            taskCreationDate:"2022-09-18",
        },
        { 
            id: 4, 
            title: 'Yoga', 
            isCompleted: false, 
            description: "This is Yoga", 
            dueDate: "2024-11-20",
            taskCreationDate:"2023-04-10",
        },
    ]);

    const [selectedFilter, setSelectedFilter] = useState("All Tasks");
    const [filterStartDate,setFilterStartDate]=useState("")
    const [filterEndDate,setFilterEndDate]=useState("")


    useEffect(()=>{
        console.log(tasks)
    },[tasks])

    return (
        <TasksContext.Provider value={{ tasks, setTasks, selectedFilter, filterStartDate , filterEndDate ,setSelectedFilter,setFilterStartDate,setFilterEndDate }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;
