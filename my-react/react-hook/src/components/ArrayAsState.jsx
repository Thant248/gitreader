import React, { useId, useState } from 'react'

export default function ArrayAsState() {
    const [items, setItems] = useState ([]);
    const [fruits, setFruits]   = useState ("");
    const addItems = () => {
        setItems([...items, fruits])

        
    }
  return (
    <div>
        <h2>Add Fruits</h2>
        <input type="text" value={fruits}  onChange={ (e) => setFruits(e.target.value)}/>
        <button onClick={ () => addItems()}> Add Items</button>

        <ul>
            {
                items.map ( (i) => {
                   return <li key={i}>{i}</li>
                })
            }
        </ul>
    </div>
  )
}
