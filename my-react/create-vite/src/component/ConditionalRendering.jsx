import { useState } from "react";
import React from 'react'

export default function ConditionalRendering() {

  
    const [isLoggedIn, setLoggedIn] = useState (true);

    function changeState(){

       setLoggedIn(!isLoggedIn);
    }

  return (
    <div>
       {
        isLoggedIn ? <h1>Welcome to our Project</h1>
        : <h2>You cannot access this project</h2>
       }
       
       <button className='btn' onClick={changeState}>Click State</button>
    </div>
  )
}
