import { Grid } from '@mui/material'
import React from 'react'
import RelatedVideoCard from './RelatedVideoCard'
// next js
import Link from "next/link";
import Image from "next/image";
//data
import {RelatedVideoData} from 'data/RelatedVideoData'
import { Box } from '@mui/system'


export default function RelatedVideo() {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };

  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box className='text-center'>
                    <Link href="/">
                        <a>
                            <Image
                            loader={ImageLoader}
                            src='images/up_arrow.png'
                            alt='up arrow'
                            width={72}
                            height={76}
                            />
                        </a>
                    </Link>
                </Box>    
            </Grid>
            {
                RelatedVideoData && RelatedVideoData.map((item,i)=>{
                    return <Grid item md={4} key={item.id}>
                            <RelatedVideoCard item={item} key={item.id} textSize='text-xs' />    
                        </Grid> 
                })
            }
            <Grid item xs={12}>
                <Box className='text-center'>
                    <Link href="/">
                        <a>
                            <Image
                            loader={ImageLoader}
                            src='images/down_arrow.png'
                            alt='down arrow'
                            width={72}
                            height={76}
                            />
                        </a>
                    </Link>
                </Box>    
            </Grid>
           
        </Grid>
    </div>
  )
}
