import { Box } from '@mui/material'
import React from 'react'
import VideoPlayer from '../VideoPlayer'
import VideoPlayerBottomMeta from './VideoPlayerBottomMeta'

export default function VideoPlayerCard ({...allPrps}) {
  const {data} = allPrps;
return (
    <Box className="related_video_box shadow-md rounded-md fadein transition-all">
        <VideoPlayer />
        <VideoPlayerBottomMeta data={data} className='text-c2121 text-2xl'/>
    </Box>
    
  )
}
