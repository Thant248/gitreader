
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import './index.css'
import EmployeeTable from './components/EmployeeTable';
import MainLayout from './components/MainLayout';
import ErrorPage from './components/ErrorPage';
import {  getAllEmployee as allEmployee ,getAllEmployeeByiD as allEmp, deleteEmployeeById as deleteEmp } from './DataAccessObject/EmployeeDao';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Employee from './components/Employee';


const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
       {
         path: "employee",
         element: <EmployeeTable/>,
         errorElement: <ErrorPage/>,
         loader: allEmployee,
         loader: deleteEmp,
       },
       {
        path: 'employee/:employeeId',
        element: <Employee/>,
        errorElement: <ErrorPage/>,
        loader: allEmp
       }
    ]

  },
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)