import React, { useEffect, useState } from 'react'
import "./Greetings.css"
import {convertDateFormat} from "../../utils"
import {computedDate} from "../../utils"

function Greetings() {
  const [today,setToday]=useState(null);
  useEffect(() => {
    let temp;
    temp=convertDateFormat(computedDate());
    setToday(temp);
  }, [today])
  return (
    <div className='greetings'>
      <div className='greetings-message'>Good morning,<span className='username'>User</span></div>
      <div className='date'>{ today}</div>
    </div>
  )
}

export default Greetings