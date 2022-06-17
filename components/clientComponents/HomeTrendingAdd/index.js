import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// Next js
import Link from 'next/link'
import Image from 'next/image'
// 
import {useStyles} from './HomeTrendingAddStyle'
import RightDoorGallery from '../RightDoorGallery';
// Data
import {OpenRightDoorsData} from 'data/OpenRightDoorsData'

function HomeTrendingAdd(props) {
    const classes = useStyles();
    
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <div >
            <Container maxWidth={false} disableGutters={true}>
                <Grid container  className=" pr-14">
                    <Grid item md={8}>
                        <Box>
                            <Image
                            loader={ImageLoader}
                            src="images/trending_add.png"
                            alt="trending add"
                            width={1250}
                            height={536}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className=" border border-slate-600 px-20 pt-20 pb-40 ml-12  relative">
                            <span className=' absolute left-2/4 -bottom-1'>
                                <Image
                                loader={ImageLoader}
                                src="images/baby_cartoon.png"
                                alt="cartoon"
                                width={161}
                                height={199}
                                />
                            </span>
                            <p className=' w-11/12 rubik text-base font-medium leading-8'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse modi earum odit, unde atque illo natus aut iste impedit! Corporis impedit t iste impedit! Corporis impe alias id, totam sunt illum distinctio tempore a quae!
                            </p>
                            <Button className=' bg-c26c1 text-white px-8 py-2 mt-10 rounded-none hover:bg-primary'>
                                <ArrowRightAltIcon className=' text-3xl'/>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <div className='pt-14 pb-14'>
            <Container className="he_container">
                <Box className=" flex flex-wrap">
                {
                    OpenRightDoorsData && OpenRightDoorsData.map((item,i)=>{
                        if(i <=4){
                            return(
                                <RightDoorGallery
                                key={i}
                                style={{
                                    maxWidth: `20%`,
                                    flex: `0 0 20%`,
    
                                }}
                                img={item.img}
                                text={item.text}
                                width={326}
                                height={336}
                                link={item.link}
                                />
                            )
                        }
                        
                    })
                }
                </Box>
            </Container>
            </div>
        </div>
    );
}

export default HomeTrendingAdd;