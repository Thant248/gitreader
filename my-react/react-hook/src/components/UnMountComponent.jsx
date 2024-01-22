import React, { useState } from 'react'
import UseEffect from './useEffect';

export default function UnMountComponent() {

    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle DisPlay</button>
        {display &&  <UseEffect/> }
    </div>
  )
}
