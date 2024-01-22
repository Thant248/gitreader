import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import EmployeeTable from './components/EmployeeTable'
import MainLayout from './components/MainLayout'
import ErrorPage from './ErrorPage'
import { getAllEmployees as allEmployees, getEmployeeById as getEmployee } from './dao/EmployeeDao'
import EmployeeDetial from './components/EmployeeDetial'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    
    children:[
      {
        path:'employees',
        element: <EmployeeTable />,
        errorElement: <ErrorPage />,
        loader: allEmployees,
      },
      {
        path:'employees/:employeeId',
        element: <EmployeeDetial />,
        errorElement: <ErrorPage />,
        loader:getEmployee
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
