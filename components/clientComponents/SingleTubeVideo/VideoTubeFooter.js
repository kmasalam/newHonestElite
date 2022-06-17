import { Avatar, Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import RelatedVideoCard from 'clientComponents/RelatedVideo/RelatedVideoCard'
import { RelatedVideoData } from 'data/RelatedVideoData'
import React from 'react'

// import styles from 'styles/client/VideoTubeFooter.module.scss'


export default function VideoTubeFooter() {
  return (
    <>
        <Grid container className='border-zinc-200 border-t pt-8' spacing={2}>
            <Grid item md={2}>
                <Box>
                    <Avatar className='mb-2' src='images/footer_avater.png' alt='footer avater' sx={{ width: 120, height: 120 }}></Avatar>
                    <h5 className='text-c2121 text-18 font-semibold tracking-wider transition duration-300 py-2'>Channel Name</h5>
                    <p className='text-c6f6f text-base'>235K  Subscriber</p>
                    <Box className='py-3'>
                        <Button className='py-3 px-6 bg-primary rounded-sm font-semibold text-base text-white mr-3 ' variant='contained' color='primary'>SUBSCRIBE</Button>
                        <Button className='py-3 px-6 bg-primary rounded-sm font-semibold text-base text-white' variant='contained' color='primary'>TIP ME</Button>
                    </Box>
                    <p className='text-c6f6f text-base pt-2'>
                        The home soup and teritories on the bold hash omlet next to the building across
                        paying rent and honest money horse with blue commercial pick fork and spoon
                        torwads Zimbabwe victory against ruling <b className='text-c2121 text-base'>Read More</b>
                    </p>
                </Box>
            </Grid>
            <Grid item md={10}>
                <Box className='flex justify-between mb-6'>
                    <p className='text-c2121 text-base'>1000 Videos available</p>
                    <Button className='text-c2121 text-base bg-transparent capitalize'>View all</Button>
                </Box>
                <Box >
                    <Box className="flex flex-wrap">
                    {
                            RelatedVideoData && [...RelatedVideoData].splice(0, 10).map((item,i)=>{
                                return(
                                    <Box className=" flex-[0_0_20%] p-3" key={i}>
                                        <RelatedVideoCard item={item}  textSize='text-xs' />    
                                    </Box> 
                                )
                            })
                        }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}
