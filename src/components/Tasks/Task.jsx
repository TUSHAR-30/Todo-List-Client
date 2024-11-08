import React, { useContext, useState } from 'react';
import TasksContext from '../../TasksContext';
import { MdDeleteOutline } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import './Task.css';
import Modal from '../../assets/Modal/ModalOverlay/Modal';
import EditTaskModalContent from '../../assets/Modal/EditTaskModalContent/EditTaskModalContent';
import ViewTaskModalContent from '../../assets/Modal/ViewTaskModalContent/ViewTaskModalContent';

function Task({ task, index, onDragStart, onDragOver, onDrop }) {
    const { setTasks } = useContext(TasksContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openedTask, setOpenedTask] = useState({});
    const [openedTaskOperation, setOpenedTaskOperation] = useState('');

    function deleteTask(e, taskId) {
        e.stopPropagation();
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

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

    return (
        <>
            <div
                className='task'
                draggable
                onDragStart={() => onDragStart(index)}
                onDragOver={onDragOver}
                onDrop={() => onDrop(index)}
                onClick={(e) => openModal(e, task, 'view')}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <input
                        type='checkbox'
                        checked={task.isCompleted}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                </div>
                <p className={`task-title ${task.isCompleted ? 'completed-task' : ''}`}>
                    {task.title}
                </p>
                <div className='task-deleteicon'>
                    <MdDeleteOutline size={20} onClick={(e) => deleteTask(e, task.id)} />
                </div>
                <div
                    className='task-editicon'
                    onClick={(e) => openModal(e, task, 'edit')}
                >
                    <GrEdit size={17} />
                </div>
            </div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {openedTaskOperation === 'edit' ? (
                    <EditTaskModalContent
                        openedTask={openedTask}
                        setOpenedTask={setOpenedTask}
                        setIsModalOpen={setIsModalOpen}
                    />
                ) : (
                    <ViewTaskModalContent
                        openedTask={openedTask}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
            </Modal>
        </>
    );
}

export default Task;
