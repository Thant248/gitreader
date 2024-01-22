
import './App.css'
import CreateStudent from './component/CreateStudent'
import Student from './component/Student'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateStudetn from './component/UpdateStudetn'

function App() {
  

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element= {<Student/>}></Route>
        <Route path='/create' element={<CreateStudent/>}></Route>
        <Route path='/update/:id' element={<UpdateStudetn/>}> </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
