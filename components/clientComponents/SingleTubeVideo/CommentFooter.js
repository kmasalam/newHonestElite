import React from 'react'
//mui
import { Avatar, Box } from '@mui/material';
import Button from '@mui/material/Button';
//icon
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
//
import HonestEliteCustomPlayer from '../HonestEliteCustomPlayer'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FlagIcon from '@mui/icons-material/Flag';
import AudioPlayer from '../AudioPlayer'

function CommentFooter({...allprops}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };

      const {size} = allprops;

    return (
        <Box className='comment-footer flex justify-between py-4 items-center'>
            <Box className='flex items-center'>
                <h6 
                className={` text-primary  font-semibold transition duration-300 tracking-wider transition duration-300 ${size == 'xs' ? 'text-sm': 'text-14'}`}>
                  1.2 K
                  </h6>
                <Box className='px-2'>
                <ul className="list-none flex">
                    <li className='py-1 pr-6'>
                      <Button className='text-c6f6f text-sm capitalize transition-all duration-300 hover:bg-transparent hover:text-primary'>
                        <ThumbUpOffAltIcon className=" inline-flex mr-2" /> Vote-up
                      </Button>
                    </li>
                    <li className='py-1  pr-6'>
                        <Button className='text-c6f6f text-sm capitalize hover:bg-transparent hover:text-primary'>
                          < ThumbDownOffAltIcon  className=" inline-flex mr-2"/> Vote-down
                        </Button>
                    </li>
                </ul>
                </Box>
            </Box>
            <Box>
                <Button className='text-c6f6f text-sm  transition-all duration-300 capitalize hover:bg-transparent hover:text-primary'>
                  < FlagIcon />Report Abuse
                </Button>
            </Box>
        </Box>
    );
}

export default CommentFooter;