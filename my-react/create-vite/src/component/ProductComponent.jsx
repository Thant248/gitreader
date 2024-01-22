import React from 'react'
import TitleComponent from './TitleComponent'

export default function ProductComponent({id, name, price, className}) {
    
  return (
    <div style={{textAlign: 'center'}} >
        <h3 className= {className}> Product Id: {id}</h3>
        <h3 className= {className}> Product Title: {name} </h3>
        <h3 className= {className}> Product Price: ${price}</h3>
    </div>
  )
}
