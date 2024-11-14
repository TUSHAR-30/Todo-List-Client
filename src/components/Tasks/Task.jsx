import React, { useContext, useEffect, useState } from 'react';
import TasksContext from '../../Context/TasksContext';
import { MdDeleteOutline } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import './Task.css';
import Modal from '../../assets/Modal/ModalOverlay/Modal';
import EditTaskModalContent from '../../assets/Modal/EditTaskModalContent/EditTaskModalContent';
import ViewTaskModalContent from '../../assets/Modal/ViewTaskModalContent/ViewTaskModalContent';
import DeleteTaskModalContent from '../../assets/Modal/DeleteTaskModalContent/DeleteTaskModalContent';

function Task({ task, draggedTaskIndex, setDraggedTaskIndex, isDraggable }) {
    const { tasks, setTasks } = useContext(TasksContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openedTask, setOpenedTask] = useState({});
    const [openedTaskOperation, setOpenedTaskOperation] = useState('');

    function toggleTaskCompletion(taskId) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    }

    function openModal(e, task, operation) {
        e.stopPropagation();
        setOpenedTask(task);
        setIsModalOpen(true);
        setOpenedTaskOperation(operation);
    }

    function handleDragStart(taskId) {
        const index = tasks.findIndex(item => item.id == taskId);
        setDraggedTaskIndex(index)
    }

    // Handler to manage the drop and reorder tasks
    function handleDrop(taskId) {
        if (draggedTaskIndex === null) return;

        const index = tasks.findIndex(item => item.id == taskId);
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        updatedTasks.splice(index, 0, movedTask);

        setTasks(updatedTasks);
        setDraggedTaskIndex(null); // Reset the dragged task index after drop
    }

    return (
        <>
            <div
                className='task'
                draggable
                onDragStart={() => isDraggable && handleDragStart(task.id)}
                onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
                onDrop={() => isDraggable && handleDrop(task.id)}
                onClick={(e) => openModal(e, task, 'view')}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <input
                        type='checkbox'
                        checked={task.isCompleted}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                </div>
                <div className="task-title-container">
                    <p className={`task-title`}>
                        {task.title}
                    </p>
                    {task.isCompleted && <span className="completed-text">Completed</span>}
                </div>

                <div className='task-deleteicon'>
                    <MdDeleteOutline size={20}
                        onClick={(e)=>openModal(e,task,'delete')}
                    />
                </div>
                <div
                    className='task-editicon'
                    onClick={(e) => openModal(e, task, 'edit')}
                >
                    <GrEdit size={17} />
                </div>
            </div>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {openedTaskOperation === 'edit' && (
                    <EditTaskModalContent
                        openedTask={openedTask}
                        setOpenedTask={setOpenedTask}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
                {openedTaskOperation === 'view' && (
                    <ViewTaskModalContent
                        openedTask={openedTask}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
                {openedTaskOperation === 'delete' && (
                    <DeleteTaskModalContent
                        openedTask={openedTask}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
            </Modal>
        </>
    );
}

export default Task;