import React from 'react'
import "./login_signup.css"
import image from "../../assets/Login.png"
import logo from "../../assets/logo.png"

function Login() {
  return (
    <main>
      <img className = "image" src={image} />
      <div className = "elements" >
        <div className = "logo" >
          <img src = {logo} />
        </div>
        <div className = "Login-Details" >
          <h1><b>Login</b></h1>
          <input placeholder='Username' />
          <div className='passwordDiv'>
            <input placeholder= 'Password' />
            <div className='alter'>
              <span><a className='haveAccount' href=''>Forgot Password?</a></span>
              <span><a className='haveAccount' href='/signup'>SignUp</a></span>
            </div>
          </div>
          <button onClick={() => {
            window.location.href = "/startup"
          }} className = "signSubmit" >Submit</button>
        </div>
      </div>
    </main>
  )
}

export default Login