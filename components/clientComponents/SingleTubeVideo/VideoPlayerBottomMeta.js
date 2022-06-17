import React from 'react'
//mui
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
//icon
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function VideoPlayerBottomMeta({...allProps}) {
    const {className, data} = allProps;
  return (
    <Box className='px-6 py-4'>
        <Grid container>
            <Grid item md={8}>
                <h3 className={`${className} font-medium  transition duration-300 hover:text-primary`}>{data?.title && data?.title}</h3>
            </Grid>
            <Grid item md={4}>
                <Box className='video-meta text-right'>
                    <div className='text-left inline-block'>
                        <ul className="list-none">
                            <li className='py-1 text-c2121'>
                                <span className='pr-2'><AccessTimeIcon/></span>{data?.publishDate && data?.publishDate}
                            </li>
                            <li className='py-1 text-c2121'>
                                <span className='pr-2'><RemoveRedEyeIcon/></span>{data?.totalView && data?.totalView}
                            </li>
                        </ul>
                    </div>
                       
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
