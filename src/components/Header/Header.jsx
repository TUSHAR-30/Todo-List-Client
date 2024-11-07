import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { PiMoonStarsFill } from "react-icons/pi";
import { PiSunFill } from "react-icons/pi";
import './Header.css'
function Header() {
  const [isLightMode,setisLightMode]=useState(true)
  function handleMode(){
    setisLightMode(!isLightMode);
    document.documentElement.classList.toggle('darkmode')
  }
  return (
    <header className='header'>
      <h1 className='app-name'>Todo List</h1>
      <div className='header-actions'>
        <div className='mode' onClick={handleMode}>
          { isLightMode?<PiMoonStarsFill size={30} />:<PiSunFill size={30}/>}
        </div>
        <div className='profile'><FaUserCircle size={30} /></div>
      </div>
    </header>
  )
}

export default Header