import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-light'>
        <div className="container-fluid">
            <a href="" className='navbar-brand'>Student Registration Form</a>
            <button className='navbar-toggler' data-bs-toggle='collpase' data-bs-target='#myNav'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div id='myNav' className='collapse navbar-collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container mt-5">
        <Outlet/>
    </div>
    </>
  )
}
