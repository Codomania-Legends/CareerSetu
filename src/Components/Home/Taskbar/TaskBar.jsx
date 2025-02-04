import React, { useEffect, useState } from 'react'
import "./TaskBar.css";
import Task from './Task';

import assessment from "../../../assets/Icons/TeacherHome/assessment.png"
import assignment from "../../../assets/Icons/TeacherHome/assignment.png"
import attendence from "../../../assets/Icons/TeacherHome/attendence.png"
import project from "../../../assets/Icons/TeacherHome/project.png"
import verify from "../../../assets/Icons/TeacherHome/verify.png"

function TaskBar() {

  const [ isVisible , setIsVisible ] = useState(false)
  const [ div1 , setDiv1 ] = useState(false)
  const [ div2 , setDiv2 ] = useState(false)
  const [ div3 , setDiv3 ] = useState(false)
  const [ div4 , setDiv4 ] = useState(false)
  const [ div5 , setDiv5 ] = useState(false)

  useEffect( () => {
    if( isVisible ){
      setDiv1("div1")
      setDiv2("div2")
      setDiv3("div3")
      setDiv4("div4")
      setDiv5("div5")
    }else{
      setDiv1(true)
      setDiv2(true)
      setDiv3(true)
      setDiv4(true)
      setDiv5(true)
    }
  } , [isVisible] )

  return (
    <div className = "alltask">
        <div className = "taskmenu">
            <div id='menu' className = "task" onMouseOver={() => {
              document.querySelector(".triangle").style.display = "block"
              setIsVisible(true)
              document.addEventListener( "click" , () => {
                document.querySelector(".triangle").style.display = "none"
                setIsVisible(false)
              } )
        }}>
                <div className='gridBox'>
                    <div className="box1" ></div>
                    <div className="box2"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                </div>
                <span className ="menu">Menu</span>
            </div>
        </div>
        <div className= "triangle">
          <div className='upperDiv'>
            { div1 && <Task id={ div1 }  icon={assessment} text="Assessment" /> }
            { div2 && <Task id={ div2 } icon={assignment} text="Assignment" /> }
          </div>
          <div className='midDiv'>
            { div3 && <Task id={ div3 } icon={verify} text="Verify" /> }
            { div4 && <Task id={ div4 } icon={attendence} text="Attendence" /> }
          </div>
          <div className='lowerDiv'>
            { div5 && <Task id={ div5 } icon={project} text="Project" /> }
          </div>
        </div>
    </div>
  )
}

export default TaskBar