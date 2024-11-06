import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import './Header.css'
function Header() {
  return (
    <header className='header'>
        <h1 className='app-name'>Todo List</h1>
        <div className='profile'><FaUserCircle size={30}/></div>
    </header>
  )
}

export default Header