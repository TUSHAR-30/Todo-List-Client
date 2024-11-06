import React from 'react'
import "./Greetings.css"
function Greetings() {
  return (
    <div className='greetings'>
        <div className='greetings-message'>Good morning,<span className='username'>User</span></div>
        <div className='date'>03 July 2024</div>
    </div>
  )
}

export default Greetings