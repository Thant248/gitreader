import React, { useState , useEffect } from 'react'

export default function UseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log( 'This is mouse event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect( () => {
    console.log( ' useEffect is called');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      window.removeEventListener('mousemove', logMousePosition);
      console.log('Component is unMounted nad code is clean')
    }
  }, [])
  return (
    <div>
      
        <p>mouse position</p>
        coordinate x,y = {x}, {y}
    </div>
  )
}
