import React from 'react'
import homebackground from "../../assets/homeBackground.png"
import "./HomePage.css"
import TaskBar from "./Taskbar/TaskBar"
import ActivityTracker from './Containers/ActivityTracker'
import NoticeBoard from './Containers/NoticeBoard'
import TaskAudit from './Containers/TaskAudit'
import Navbar from './Navbar/Navbar'

function HomePage() {
  return (
    <main className='homeMain'>
      <div className = "homediv" >
        <img className= "image" src = {homebackground}/>
        {/* navbar start */}
        <Navbar />
        {/* navbar finished */}

        {/* task menu  */}
        <div className = "headinDiv" >  
          <div className="allTaskDiv">
            
            {/* hover of task */}
            <div className='taskbar'>
              <TaskBar/>
            </div>
            {/* hover of task completed */}
            
            {/* heading */}
            <div className = "tagline">
              <p>Empowering Connections</p>
            </div>
          </div>
        </div>
        {/* heading completed */}
        
        <div className ="containerGrid" >
          <div className="innerContainer">
            <ActivityTracker />
          </div>
          <div className="innerContainer">
            <NoticeBoard/>
          </div>
          <div className="innerContainer">
            <TaskAudit/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage