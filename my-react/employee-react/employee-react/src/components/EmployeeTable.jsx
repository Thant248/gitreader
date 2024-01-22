import axios from 'axios';
import  { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';





export default function EmployeeTable() {
  const [employees] = useLoaderData();


  
  return (
    <>



<TableContainer   component={Paper}>
      <Table sx={{ minWidth: 800}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >FirstName</TableCell>
            <TableCell >LastName</TableCell>
            <TableCell >Email</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell key={emp.id} >{emp.id}</TableCell>
              <TableCell key={emp.id} >{emp.firstName}</TableCell>
              <TableCell key={emp.id} >{emp.lastName}</TableCell>
              <TableCell  key={emp.id}>  {emp.email}</TableCell>
              <TableCell key={emp.id}> 
              <Link href={`/employee/${emp.id}`} underline='none' color={'white'}>
                            <Typography color='blueviolet'  variant='h6'>Details</Typography>
                        </Link>
              </TableCell>
              <TableCell key={emp.id}> 
              <Link href={`/employee/${emp.id}`} underline='none' color={'white'}>
                            <Typography color='red'  variant='h6'>Delete</Typography>
                 </Link>
              </TableCell>
            </TableRow>
          ))};
        </TableBody>
      </Table>
    </TableContainer>
   

    </>
  )
}
