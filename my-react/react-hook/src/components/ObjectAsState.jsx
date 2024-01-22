import React, { useState } from 'react'

export default function ObjectAsState() {
    const [emp, setEmp] = useState({name: "", country: ""})
  return (
    <div>
        <label htmlFor="name" >Name</label> : <br/>
       <input type="text"  value={emp.name} onChange={ ((e) => setEmp({ ...emp,name: e.target.value}))}/> <br />

       <label htmlFor="country">Country</label> :  <br/>
       <input type="text" value={emp.country} onChange={ ( (e) => setEmp ({ ...emp,country : e.target.value}))} /> <br/>
       <hr />

       <div>

            <p>My name is {emp.name} </p>
            <p>I am from {emp.country} </p>
       </div>
       <div>
        <p> {JSON.stringify(emp)} </p>
       </div>

    </div>
  )
}
