import React from 'react'

function Task({ icon , text , id }) {
  return (
    <div className='task' id={id}>
        <img className='imageTaskMenu' src={icon} />
        <span className='textTaskMenu'>{text}</span>
    </div>
  )
}

export default Task