import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Next js
import Link from 'next/link'
import Image from 'next/image'

// 
import {useStyles} from './HomeOpenRightDoorsStyle'

// Data
import {OpenRightDoorsData} from 'data/OpenRightDoorsData'
import RightDoorGallery from '../RightDoorGallery';

function HomeOpenRightDoors(props) {

    const classes = useStyles();
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className=' pb-14 pt-14'>
            <Container className="he_container">
                <Box>
                    <h4 className=' text-c2121 text-xl capitalize pb-4'>
                    Open the right Doors
                    </h4>
                </Box>
            </Container>
            <Container className="he_container">
                <Box className=" flex flex-wrap">
                {
                    OpenRightDoorsData && OpenRightDoorsData.map((item,i)=>{
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
                    })
                }
                </Box>
            </Container>
        </div>
    );
}

export default HomeOpenRightDoors;