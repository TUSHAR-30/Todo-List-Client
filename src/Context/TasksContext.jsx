import React, { createContext, useEffect, useState } from 'react';
import { Task } from '../Classes/TaskClass';


// Create the context
const TasksContext = createContext();

// Create the provider component
export function TasksProvider({ children }) {

    // Retrieve tasks from localStorage and convert them back into instances of Task
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            // Map over the parsed tasks and create instances of the Task class
            return parsedTasks.map(task => new Task(
                task.title,
                task.description,
                task.isCompleted,
                task.taskCreationDate,
                task.dueDate,
                task.id,
            ));
        }
        return [];
    });

    const [selectedFilter, setSelectedFilter] = useState("All Tasks");
    const [filterStartDate, setFilterStartDate] = useState("")
    const [filterEndDate, setFilterEndDate] = useState("")
    const [selectedSort, setSelectedSort] = useState("")
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={{ tasks, selectedFilter, filterStartDate, filterEndDate, selectedSort, dateRange, setTasks, setSelectedFilter, setFilterStartDate, setFilterEndDate, setSelectedSort, setDateRange }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext;
