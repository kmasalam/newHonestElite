import React from 'react'
//mui
import { Box } from '@mui/material'

export default function VideoStory({data}) {
  return (
    <Box>
        <h5 
        className='text-c2121 text-18 pb-4  font-medium  transition duration-300'>
          Story Description</h5>
        <p 
        className='text-c6f6f text-base pr-24'>
          {data?.discription && data.discription}
        </p>
    </Box>
  )
}
