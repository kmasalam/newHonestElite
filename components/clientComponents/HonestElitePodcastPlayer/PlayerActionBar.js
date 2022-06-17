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

function PlayerActionBar(props) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };
    


    return (
        <div className='bg-white/[.20] py-4 px-4 flex items-center justify-between mt-8 '>
            <Button className=' text-white uppercase text-sm rubik bg-transparent max-w-fit inline-flex  font-light hover:text-primary group '>
                <InfoOutlinedIcon className=' text-white text-lg inline-flex mr-1 group-hover:text-primary'/>
                Calender
            </Button>
            <Button className=' text-white uppercase text-sm rubik bg-transparent max-w-fit inline-flex  font-light hover:text-primary group'>
                <AddOutlinedIcon className=' text-white text-lg inline-flex mr-1 group-hover:text-primary'/>
                Next Topic
            </Button>
            <Button className=' text-white uppercase text-sm rubik bg-transparent max-w-fit inline-flex  font-light hover:text-primary group'>
                <DoneOutlinedIcon className=' text-white text-lg inline-flex mr-1 group-hover:text-primary'/>
                Be Alerted
            </Button>
            <Button className=' text-white uppercase text-sm rubik bg-transparent max-w-fit inline-flex  font-light hover:text-primary group'>
                <ShareOutlinedIcon className=' text-white text-lg inline-flex mr-1 group-hover:text-primary'/>
                Share
            </Button>
            <Button className=' text-white uppercase text-sm rubik bg-transparent max-w-fit inline-flex  font-light hover:text-primary group'>
                <TourOutlinedIcon className=' text-white text-lg inline-flex mr-1 group-hover:text-primary'/>
                Report Abuse
            </Button>
        </div>
    );
}

export default PlayerActionBar;