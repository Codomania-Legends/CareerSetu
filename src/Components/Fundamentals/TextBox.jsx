import React from 'react'
import "./TextBox.css"
import error from "../../assets/Icons/close.png"
import warning from "../../assets/Icons/warning.png"

function TextBox({msg , type , display}) {
  return (
    <div className='alert' style={ { "display" : { display } } }>
        <div className='circle'>
            <img className='imageLogo' src={
                ( type == "error" ) ? error : warning
            } />
        </div>
        <div className='textbox'>
            <div className='border'></div>
            <div className='content'>{msg}</div>
        </div>
        <div className='overlap'></div>
    </div >
  )
}

export default TextBox