import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
//
const _ = require('lodash');
// Next js
import Link from "next/link";
import Image from "next/image";
//

//

function PlayerPodcaster(props) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };
    


    return (
        <div>
            <Box className=' flex items-center justify-start'>
                <Box className=' inline-flex mr-3'>
                    <Image
                        loader={ImageLoader}
                        className=" rounded-full"
                        src="images/player-podcaster.jpg"
                        alt="dollar bag"
                        width={100}
                        height={100}
                    />
                </Box>
                <Box className=' flex items-start justify-start flex-col'>
                    <h4 className=' font-medium rubik text-2xl text-white capitalize pb-3'>
                        Sharon Winstone
                    </h4>
                    <div className=' flex items-center justify-start'>
                        <Button className=' text-white uppercase text-sm bg-primary px-1 py-1 rounded-sm '>
                            Live
                        </Button>
                        <p className=' text-base font-normal capitalize text-white  inline-flex px-2'>
                        1.2K People watching
                        </p>
                        <Button className=' bg-cd6d5 rounded-sm text-12 capitalize text-c2121 px-1 '>
                        <Image
                            loader={ImageLoader}
                            src="images/dollar_bag.svg"
                            alt="dollar bag"
                            width={12}
                            height={12}
                            />
                            $100
                        </Button>
                    </div>
                </Box>
            </Box>
            <p className=' text-white text-lg capitalize pb-6 pt-4'>
            Power of the  BIG dick and life after
going black  is always AWESOME things to do.

            </p>
            <div>
                <Button className=' bg-primary py-2 px-4 rounded-sm opacity-80 inline-flex items-center justify-center'>
                    <Image
                    loader={ImageLoader}
                    src="images/dollar_bag.svg"
                    alt="dollar bag"
                    width={24}
                    height={24}
                    />
                    <span className=' text-xl capitalize font-medium rubik text-white inline-flex ml-2'>
                    Promotional Tip
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default PlayerPodcaster;