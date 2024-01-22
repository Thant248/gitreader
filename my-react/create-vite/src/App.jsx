import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonInfo from './component/PersonInfo';
import {CiAirportSign1} from 'react-icons/ci'
import TitleComponent from './component/TitleComponent';
import ClickEventHandler from './component/ClickEventHandler';
import ConditionalRendering from './component/ConditionalRendering';
import ListComponent from './component/listComponent';
import CouterComponent from './component/CouterComponent';

function App() {
  
  return (
  
      <div>
    
          {/* <TitleComponent></TitleComponent> */}
          {/* <ClickEventHandler></ClickEventHandler> */}
          {/* <ConditionalRendering></ConditionalRendering> */}
          {/* <ConditionalRendering></ConditionalRendering> */}
          {/* <ListComponent primary={true}  ></ListComponent> */}
          <CouterComponent></CouterComponent>

      </div>
  
  )
}

export default App
