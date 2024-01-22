import { useState } from 'react'
import './App.css'

import TopNav from './component/TopNav'
import Featured from './component/Featured'
import Delivery from './component/Delivery'
import TopPick from './component/TopPick'
import Meal from './component/Meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPick/>
      <Meal/>
   
    </>
  )
}

export default App
