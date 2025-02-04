import React from 'react'
import cancel from "../../../assets/Icons/cancel.png"
import right from "../../../assets/Icons/checked.png"
import "./style.css"

function ActivityTracker() {
  return (
    <div className = "contain" id='activity'>
        <div className='heading'>
          <span>Activity Tracker</span>
        </div>
        <div className="ContentBody">
          <div className="ContentTask">
            <img src={cancel} className='contentLogo' />
            <div className="ContentTextBox">
              <span className='contentText'>Updated the notice board</span>
              <button className='timestamp'>4hr ago</button>
            </div>
          </div>
          <div className="ContentTask">
            <img src={right} className='contentLogo' />
            <div className="ContentTextBox">
              <span className='contentText'>Updated the notice board and hase mat</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
          <div className="ContentTask">
           <img src={cancel} className='contentLogo' />
           <div className="ContentTextBox">
              <span className='contentText'>Not</span>
              <button className='timestamp'>1d ago</button>
            </div>
          </div>
        </div>
    </div>
    )
}

export default ActivityTracker