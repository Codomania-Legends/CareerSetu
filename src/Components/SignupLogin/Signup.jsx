import React, { useEffect, useState } from "react";
import "./login_signup.css";
import image from "../../assets/Login.png";
import logo from "../../assets/logo.png";
import TextBox from "../Fundamentals/TextBox";

function Signup() {
  const [ username , setUsername ] = useState(null)
  const [ password , setPassword ] = useState(null)
  const [ auth , setAuth ] = useState(null)
  const [ alert , setAlert ] = useState(false)
 
  useEffect( () => {
    const student = document.getElementById("Student")
    const faculty = document.getElementById("Faculty")
    const teacher = document.getElementById("Teacher")
    student.style.background = "#D9D9D9"
    faculty.style.background = "#D9D9D9"
    teacher.style.background = "#D9D9D9"
    const pos = document.getElementById(auth)
    if( !pos ) return
    pos.style.background = "red"
  } , [auth] )

  return (
    <main>
      { alert && <TextBox /> }
      <img className="image" src={image} alt="Login" />
      <div className="elements">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="details">
          <h1>
            <b>SignUp</b>
          </h1>
          <input className="userInput" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <div className="passwordDiv">
            <input className="passInput" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="alter">
              <span>
                <a className="haveAccount" href="/login">
                  Have an account?
                </a>
              </span>
              <span>
                <a className="haveAccount" href="/login">
                  Login
                </a>
              </span>
            </div>
          </div>
          <div className="options">
            <button onClick={() => {
              setAuth("Student")
            }} id="Student" className="buttons">Student</button>
            <button onClick={() => {
              setAuth("Teacher")
            }} id="Teacher" className="buttons">Teacher</button>
            <button onClick={() => {
              setAuth("Faculty")
            }} id="Faculty" className="buttons">Faculty</button>
          </div>
          <button
            onClick={() => {
              setAlert(true)
              if( !username ) return alert("Username is required")
              if( !password ) return alert("Create a password")
              if( !auth ) return alert("What is your position?")
              window.location.href = "/startup";
            }}
            className="signSubmit" >
              Submit
          </button>
        </div>
      </div>
    </main>
  );
}

export default Signup;
