import {  Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


import { useLoaderData } from 'react-router-dom';

export default function EmployeeTable() {
    const [employees] = useLoaderData();
    
    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell>LastName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(emp => (
                            <TableRow key={emp.id}>
                                <TableCell >{emp.id}</TableCell>
                                <TableCell >{emp.firstName}</TableCell>
                                <TableCell >{emp.lastName}</TableCell>
                                <TableCell >{emp.email}</TableCell>
                                <TableCell>
                                    <Link underline='none' href={`/employees/${emp.id}`}>
                                        <Typography sx={{fontSize:'1rem'}}>Details</Typography>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                        )
                        };
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
