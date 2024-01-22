import React, { useState } from 'react'

export default function CouterComponent() {

    const [count, setCount] = useState (0);

    function addCount(){
        setCount(count + 1 );
    }
    function removeCount(){
        setCount(count - 1);
    }
  return (
    <div className='my-text'>
        <h1 style={{textAlign: 'center', color: 'red'}}> You Clicked {count} Times</h1>
        <button className='btn' style={{justifyContent: 'center'}} onClick={addCount}>Add</button>
        <button className='btn' style={{justifyContent: 'center'}} onClick={removeCount}>Remove</button>
    </div>
  )
}
