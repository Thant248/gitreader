import React from 'react'
import Greet from './Greet'

export default function PersonInfo({name, country}) {
  return (
    <div>

        <Greet name={name} country={country} ></Greet>

    </div>
  )
}
