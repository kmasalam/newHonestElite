import { Box } from '@mui/system'
import React from 'react'
import CommentCard from './CommentCard'
import VideoCommentInput from './VideoCommentInput'
import VideoInfo from './VideoInfo'
import VideoPlayerCard from './VideoPlayerCard'
import VideoStory from './VideoStory'
import {SingleTubeVideoData} from 'data/SingleTubeVideoData.js'
export default function index() {
  return (
      <>
        <VideoPlayerCard data={SingleTubeVideoData}/>
        <Box className='pl-6'>
            <VideoInfo data={SingleTubeVideoData}/>
            <VideoStory data={SingleTubeVideoData}/>
            <VideoCommentInput data={SingleTubeVideoData}/>
            <CommentCard data={SingleTubeVideoData}/>
        </Box>
      </>
    
  )
}
