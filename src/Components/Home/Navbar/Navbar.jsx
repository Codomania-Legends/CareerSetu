import homelogo from "../../../assets/homeLogo.png"
import loginicon from "../../../assets/Icons/loginicon.png"
import React from 'react'

function Navbar() {
  return (
    <div className = "navbar">
          <div className = "logo">
            <img src = {homelogo} className = "logo" />
          </div>
          <div className = "detail">
            <div className = "about" >About</div>
            <div className = "notification" >Notifications</div>
            <div className = "company" >Companies</div>
            <div className = "profile" >Profile</div>
          </div>
          <div className = "signup">
            <button className = "signupbtn">Signup<img src = {loginicon} className = "loginicon" /></button>
          </div>
        </div>
  )
}

export default Navbar