import React, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClickTitleApp from './clickCount.jsx'

function App() {
  const[NoOfClick,setNoOfClick]=useState(0)
    const[isClicked,setisClicked]=useState(false)

    useEffect(()=>{
        document.title=`Clicked ${NoOfClick}times`
    },[NoOfClick])


    const clickCount=()=>{
        setNoOfClick(NoOfClick+1)
        setisClicked(true)
        // console.log(NoOfClick)
    
        // alert("clicked "+NoOfClick +" Times")
        

    }
    // const showAlert=(NoOfClick)=>{
    // }
    return(
        <div>
            <p>{isClicked?("Clicked  " + NoOfClick + "  times"):"Count No of Clicks"}</p>
            <button onClick={clickCount}>Click Here !</button>
        </div>

    )
    




}



export default App
