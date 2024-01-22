import React, { useEffect, useState } from 'react'
import { getAllStudents } from '../services/EmployeeService';
import CreateStudent from './CreateStudent';
import { redirect, useNavigate } from 'react-router-dom';
import {MdDelete, MdOutlineSystemUpdateAlt} from 'react-icons/md'

export default function StudentList() {

    const [student, setStudent] = useState([]);
    const navigator  = useNavigate(); 
    useEffect(() => {
       

        getStudent();
    }, [])

    function getStudent() {
        getAllStudents().then(resp => setStudent(resp.data))
    }

    const toStudent = (e) =>  navigator('/student-form')

    function updateStudent (id) {
        navigator(`/update-student/${id}`)
    }

    const deleteStudentById = (id)  => {


            deleteStudentById(id).then( resp => getStudent())
                                .catch(error => console.log(error))

                        navigator("/student");
        
    }

    
  return (
    <>
        <div className="row">
            <div className="col">
            <button className='btn btn-outline-primary rounded mb-3' onClick={toStudent}>Create Student</button>
                <div className="card">
                    <div className="card-header">
                        <div className="h3">Student Table</div>
                    </div>
                    
                    <table className='table table-striped table-bordered'>
                        <thead className='thead-dark ms-auto'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>National Card</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Hobby</th>
                                <th>DateOfBirth</th>
                                <th>Graduated Year</th>
                                <th>Bachelor</th>
                                <th>Address's Name</th>
                                <th>Region</th>
                                <th>Capital</th>
                                <th>Township</th>
                                <th>Street</th> 
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.map( stu => (
                                    <tr key={stu.id}> 
                                        <td>{stu.id}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.NRC}</td>
                                        <td>{stu.email}</td>
                                        <td>{stu.phone}</td>
                                        <td>{stu.gender}</td>
                                        <td>{stu.hobby}</td>
                                        <td>{stu.DateOfBirth}</td>
                                       {
                                        stu.educations.map((edu) => (
                                           <React.Fragment key={edu.id}>
                                            <td>{edu.year}</td>
                                            <td>{edu.bachelor}</td>

                                           </React.Fragment>
                                        ))
                                       }
                                        <td>{stu.address.name}</td>
                                        <td>{stu.address.region}</td>
                                        <td>{stu.address.capital}</td>
                                        <td>{stu.address.township}</td>
                                        <td>{stu.address.street}</td>
                                        <td><button className='btn btn-danger rounded' onClick={ () => deleteStudentById(stu.id)}><MdDelete/>Delete</button></td>
                                        <td><button className='btn btn-primary rounded' onClick={ () => updateStudent(stu.id)} ><MdDelete/>Update</button></td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}
