
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function EmployeeDetial() {
    const {employee} = useLoaderData();
  return (
     <>
        <Grid2 container columns={{ xs: 1, sm: 2, md: 10 }}>
            <Grid xs={4}>
                <img   src="https://picsum.photos/seed/picsum/400/300" />

               
            </Grid>
            <Grid xs={8}>
                <Card sx={{minWidth: 400}}>
                    <CardContent>
                      <Typography sx={{fontSize: 16}} color="text.secondary">
                        {employee.firstName}
                      </Typography>
                      <Typography sx={{fontSize: 16}} color="text.secondary">
                        {employee.lastName}
                      </Typography>
                      <Typography sx={{fontSize: 16}} color="text.secondary">
                        {employee.email}
                      </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid2>
     </>
  )
}
