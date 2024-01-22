import React, { useEffect, useState } from 'react'

export default function ConditionallyUseEffect() {
   const [count, setCount] = useState(0);

   const [name, setName] = useState('');
   useEffect(() => {
    document.title = `You Clicked  : ${count} times`;
    console.log('UseEffect is called')
   },[]) 
  return (
    <div>

        {count} + {name}
        <button onClick={() => setCount (count+1)}>Add</button>
        <input type="text"  value={name} onChange={ (e) => setName(e.target.value)}/>
    </div>
  )
}
