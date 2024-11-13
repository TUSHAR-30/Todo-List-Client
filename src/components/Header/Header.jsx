import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { PiMoonStarsFill } from "react-icons/pi";
import { PiSunFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

import './Header.css'
import Searchbar from '../Searchbar/Searchbar';
function Header() {
  const [isLightMode, setisLightMode] = useState(true)
  function handleMode() {
    setisLightMode(!isLightMode);
    document.documentElement.classList.toggle('darkmode')
  }
  return (
    <header className='header'>
      <h1 className='app-name'>Todo List</h1>
      <div className='header-actions'>
        <div className='mode' onClick={handleMode}>
          {isLightMode ? <PiMoonStarsFill size={23} /> : <PiSunFill size={23} />}
        </div>
        <div className='profile'>
          <FaUserCircle size={23} />
          <span className='login'>Login</span>
          <IoIosArrowDown />
        </div>
        <Searchbar />
      </div>
    </header>
  )
}

export default Header