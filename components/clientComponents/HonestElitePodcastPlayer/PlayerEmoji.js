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

function PlayerEmoji(props) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <div className=' flex items-center justify-start w-3/5'>
            <Button className=' mr-2'>
                <Image
                    loader={ImageLoader}
                    className=" "
                    src="images/ok-hand.svg"
                    alt="comments user"
                    width={25}
                    height={25}
                />
            </Button>
            <Button  className=' mr-2'>
                <Image
                    loader={ImageLoader}
                    className=" "
                    src="images/kissing.svg"
                    alt="comments user"
                    width={25}
                    height={25}
                />
            </Button>
            <Button  className=' mr-2'>
                <Image
                    loader={ImageLoader}
                    className=" rounded-full"
                    src="images/heart.svg"
                    alt="comments user"
                    width={25}
                    height={25}
                />
            </Button>
            <Button  className=' mr-2'>
                <Image
                    loader={ImageLoader}
                    className=" rounded-full"
                    src="images/grinning.svg"
                    alt="comments user"
                    width={25}
                    height={25}
                />
            </Button>
            <Button  className=' mr-2'>
                <Image
                    loader={ImageLoader}
                    className=" rounded-full"
                    src="images/crying.svg"
                    alt="comments user"
                    width={25}
                    height={25}
                />
            </Button>
        </div>
    );
}

export default PlayerEmoji;