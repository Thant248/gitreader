import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateStudent from './components/CreateStudent.jsx'
import Root from './components/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import StudentList from './components/StudentList.jsx'

const route  = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: 'student',
        element: <StudentList/>
      },
      {
        path: 'student-form',
        element: <CreateStudent/>
      },
      {
        path: 'update-student/:id',
        element:  <CreateStudent/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
