import React, { useEffect } from 'react'
import logo from "../../assets/logo.png"
import video from "../../assets/video.mp4"
import "./animation.css"

function StartAnimation() {
    useEffect( () => {
        setTimeout( () => {
            document.querySelector(".StartupContent").classList.add("StartAnimate")
        setTimeout( () => {
            document.querySelector(".StartupContent").classList.add("StartRemove")
        } , 5000 )
        setTimeout( () => {
            document.querySelector(".StartBackground").classList.add("STartbackgroundAnimate")
        } , 4800 )
        setTimeout( () => {
            document.querySelector(".StartBackground").style.background = "white"
            console.log("Level")
            document.body.innerHTML = `<video autoplay><source src=${video} type="video/mp4"></video>`
        } , 5500 )
        setTimeout( () => {
            document.body.innerHTML = ``
        } , 11500 )
        } , 500 )
    } , [] )
  return (
    <main className="StartBackground">
        <div className="StartupContent">
            <img className="startupImage" src={logo} />
        </div>
    </main>
  )
}

export default StartAnimation