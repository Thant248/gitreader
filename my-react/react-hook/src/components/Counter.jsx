import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState (0);

    let changeCount = ()=> setCount(count + 1);
    let removeCount = () => setCount(count - 1);
    let resetCount = () => setCount(0);
    useEffect( ()=> {
        document.title = `You Click ${count} times`
    })

    
  return (
    <div>

            <h1>Counter is {count} </h1>
            <button  onClick={ ()=> setCount(count+5)}>Increment</button>
            <button onClick={changeCount}>ADD</button>
            <button onClick={  ()=> setCount(count-5)}>Decrement</button>
            <button onClick={removeCount}>REMOVE</button>
            <button onClick={resetCount}>Reset</button>
    </div>
  )
}
