import React, { createContext , useEffect, useState } from 'react';

// Create the context
const TasksContext = createContext();

// Create the provider component
export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [selectedFilter, setSelectedFilter] = useState("All Tasks");
    const [filterStartDate,setFilterStartDate]=useState("")
    const [filterEndDate,setFilterEndDate]=useState("")
    const [selectedSort,setSelectedSort]=useState("")
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    return (
        <TasksContext.Provider value={{ tasks, selectedFilter, filterStartDate , filterEndDate , selectedSort, dateRange , setTasks , setSelectedFilter , setFilterStartDate , setFilterEndDate , setSelectedSort , setDateRange }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;
