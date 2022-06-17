import React from 'react'
//mui
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { IconButton } from '@mui/material';

export default function VideoCommentInput({...allProps}) {
  const {data,showCommentsInfo} = allProps;
  return (
    <Box>
      {
        showCommentsInfo &&  <Box className='pt-5 pb-2'>
          <h6
          className=' text-c2121 text-base font-normal rubik '>{data?.totalComments} Comments</h6>
      </Box>
      }
        
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className=" comment_input_parent mb-2">
            <style jsx global>{`
            .comment_input_parent label {
                font-size: 14px;
                font-family: 'Rubik', sans-serif !important;
                font-weight: 400;
            }
            .comment_input_parent input{
              font-size: 14px;
              font-family: 'Rubik', sans-serif !important;
              font-weight: 400;
            }
            .comment_input_parent input.Mui-focused,
            .comment_input_parent label.Mui-focused{
                color: #ED028C;
            }
            .comment_input_parent .Mui-focused::after{
                border-color: #ED028C;
            }
          `}</style>
            <CommentOutlinedIcon className='text-primary' sx={{ mr: 1, my: 0.5 }} />
            <TextField 
            className=" text-sm text-c6f6f font-normal rubik"
            id="input-with-sx" 
            label="Add A Comments" 
            variant="standard" fullWidth />
      </Box>
    </Box>
  )
}
