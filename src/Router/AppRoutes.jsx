import React from 'react'
import { Routes, Route } from 'react-router-dom';

import App from '../App'
import Login from '../Components/SignupLogin/Login';
import StartAnimation from '../Components/SignupLogin/StartAnimation';
import Signup from '../Components/SignupLogin/Signup';
import TextBox from '../Components/Fundamentals/TextBox';
import HomePage from '../Components/Home/HomePage';
import TaskBar from '../Components/Home/Taskbar/TaskBar';
function AppRoutes() {
  return (
    <>
        <Routes>
          <Route path ="/" element = {<App />}></Route>
          <Route path ="/login" element = {<Login />}></Route>
          <Route path ="/signup" element = {<Signup />}></Route>
          <Route path='/startup' element = { <StartAnimation /> } ></Route>
          <Route path='/textbox' element = { <TextBox /> } ></Route>
          <Route path='/homepage' element = { <HomePage /> } ></Route>
          <Route path='/taskbar' element = { <TaskBar /> } ></Route>
        </Routes>
    </>
  )
}

export default AppRoutes