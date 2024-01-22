import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Student() {

    const [student, setStudent]= useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:8080/student/list')
        .then( (resp) => {
            setStudent(resp.data)
        }).catch( (error) => {
            console.log(error)
        })
    }, [])


  return (
    <>
        <div className='container'>
            <table className='table table-striped'>
                <thead className='thead-black'>
                    <tr>
                        <th>Id</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>FirstName</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>lastName</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>email</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>age</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>grade</th>


                    </tr>
                </thead>
                <tbody>
                {
                        student.map( (stu) => (

                            <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.firstName}</td>
                                <td>{stu.lastName}</td>
                                <td>{stu.email}</td>
                                <td>{stu.age}</td>
                                <td>{stu.grade}</td>
                            </tr>
                        ))
                    }     
                </tbody>
            </table>
        </div>


    </>
  )
}
