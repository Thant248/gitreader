import React from 'react'
import ProductComponent from './ProductComponent';

export default function ListComponent(props) {
    const className = props.primary ? 'primary' : 'secondary'
    const employees = [ 'daisy', 'mike', 'harry', 'john'];
    const products = [
         {
            id: 1,
            name: 'apple',
            price: 25.3
         },
         {
            id: 2,
            name: 'orange',
            price: 26.3
        },
         {
            id: 3,
            name: 'cucumber',
            price: 27.3

         }
    ]
  return (
    <div className={className}>

       {
            products.map( p => {
                 
              return <ProductComponent key={p.id} id={p.id} name={p.name} price={p.price} />
            })
        
       }
    </div>
  )
}
