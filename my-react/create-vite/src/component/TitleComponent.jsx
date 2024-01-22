import React, { useState } from 'react'

export default function TitleComponent() {
    const [title, setTitle] = useState ('React Developer Course....');

  return (
    <div>

        <h1 className='my-text'>{title}</h1>
        <button className='btn' onClick={()=> setTitle('I am java Developer')}>Change Title</button>
    </div>
  )
}
