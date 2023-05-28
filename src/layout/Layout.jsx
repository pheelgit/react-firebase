import React from 'react'
import { AppRouter } from 'AppRouter'
import { Navbar } from './Navbar'
import { Box, Paper } from '@mui/material'

export const Layout = () => {
  return (
    <Box className='flex flex-col gap-4 p-2 h-screen '>
      <Paper
        children={<Navbar />}
        elevation={10}
        className=' basis-1/12 sticky  top-2 opacity-100'
      />
      <Paper
        component='main'
        children={<AppRouter />}
        elevation={10}
        className='rounded-xl  basis-11/12 mt-1/12 overflow-scroll'
      />
    </Box>
  )
}
