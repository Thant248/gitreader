import { Menu } from '@mui/icons-material'
import { AppBar, Container, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <>
        
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{mr:2}}
                    >
                     <Menu/>
                    </IconButton>
                    <Typography 
                    variant='h6'
                    component="div"
                    sx={{flexGrow:1}}
                    >
                        Employees
                    </Typography>
                    <Link href="/employees" underline='none'>
                        <Typography variant='h6' color={'white'}>Employees</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container sx={{marginTop:'2rem'}}>
            <Outlet />
            </Container>
            
      
    </>
  )
}
