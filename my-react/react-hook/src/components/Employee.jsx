import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Employee() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/list-products')
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className='container'>
            <table className='table table-auto min-w-sm bg-white border-collapse'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Id</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Description</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Price</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                {
                        employee.map( (post) => {
                            
                            return <div>
                                 <li> {post.id} </li>
                                 <li></li>
                                     <li key={post.id}>{post.last_name}</li>
                                     <li> {post.price} </li>
                            </div>
                                 
                        
                           
                        })
                    }     
                </tbody>
            </table>
        </div>
    
    </>
  );
}