import React, { useContext, useEffect, useRef, useState } from 'react';
import "./FilterBy.css";
import TasksContext from '../../TasksContext';

function FilterBy() {
    const {selectedFilter, setSelectedFilter }=useContext(TasksContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);  // Create a ref for the modal
    const buttonRef = useRef(null);  // Create a ref for the button

    function toggleModalVisibility() {
        setIsModalOpen(prev => !prev); // Toggle modal open/close on button click
    }

    function handleFilterChange(event) {
        setSelectedFilter(event.target.value);  
    }

    useEffect(() => {
        function handleClickOutside(event) {

            // Check if the click is outside the modal or the button
            if (modalRef.current && !modalRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsModalOpen(false); // Close the modal on outside click
            }
        }

        if (isModalOpen) {
            // Attach the event listener only when the modal is open
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            // Remove the event listener when the modal is closed
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup function to remove the listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]); // Re-run effect when isModalOpen changes

    useEffect(()=>{
        setIsModalOpen(false)
    },[selectedFilter])

    return (
        <div className='filterby-option'>
            <button onClick={toggleModalVisibility} ref={buttonRef} >Filter by </button>
            {isModalOpen && (
                <div className='filterby-modal' ref={modalRef} >
                    <header>
                        <h4>Filter by:</h4>
                        <input type="date" />
                    </header>
                    <div className='filterby-list'>
                    <div  className={`filterby-listitem ${selectedFilter === "All Tasks"?"checkedfilter":""}`}>
                            <input type="radio"
                                id='All Tasks'
                                name="selectedFilterOption"
                                value="All Tasks" 
                                onChange={handleFilterChange}
                                checked={selectedFilter === "All Tasks"}
                            />
                            <label htmlFor="All Tasks">All Tasks</label>
                        </div>
                        <div className={`filterby-listitem ${selectedFilter === "Completed"?"checkedfilter":""}`}>
                            <input 
                                type="radio" 
                                id='Completed' 
                                name="selectedFilterOption"
                                value="Completed"
                                onChange={handleFilterChange} 
                                checked={selectedFilter === "Completed"}
                            />
                            <label htmlFor="Completed">Completed</label>
                        </div>
                        <div  className={`filterby-listitem ${selectedFilter === "Incompleted"?"checkedfilter":""}`}>
                            <input 
                                type="radio" 
                                id='Incompleted'
                                name="selectedFilterOption"
                                value="Incompleted" 
                                onChange={handleFilterChange}
                                checked={selectedFilter === "Incompleted"}
                            />
                            <label htmlFor="Incompleted">Incompleted</label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterBy;