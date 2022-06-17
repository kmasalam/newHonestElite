import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';

//
import PlayerEmoji from './PlayerEmoji';
const _ = require('lodash');
// Next js
import Link from "next/link";
import Image from "next/image";
//

//

function ViewerComments(props) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <div>
            <Box className='  rounded-t-lg mr-16 ' >
                {/*  */}
                <Box className=' opacity-50 rounded-t-xl flex items-center justify-start pr-10 pl-2 bg-gradient-to-b from-[#2E001B]/[.60]' >
                    <Image
                        loader={ImageLoader}
                        className=" rounded-full"
                        src="images/comment_avater.png"
                        alt="comments user"
                        width={42}
                        height={42}
                    />
                   <p className=' ml-3'>
                        <span  className=' rubik text-lg text-white font-medium inline-flex pr-2'>
                           Shela Ortega:
                       </span>
                       <span className=' rubik font-normal text-white text-lg' >
                       Imagine for a second that someone claims to love you so much that thsoft.
                       </span>
                   </p>
                </Box>
                {/*  */}
                {/*  */}
                <Box className=' rounded-3xl py-2 flex items-center mt-4 justify-start pr-10 pl-2 bg-gradient-to-b bg-[#0298ED]/[.60]' >
                    <Image
                        loader={ImageLoader}
                        className=" rounded-full"
                        src="images/comment_avater.png"
                        alt="comments user"
                        width={42}
                        height={42}
                    />
                   <p className=' ml-3'>
                        <span  className=' rubik text-lg text-white font-medium inline-flex pr-2'>
                           Shela Ortega:
                       </span>
                       <span className=' rubik font-normal text-white text-lg' >
                       Why you guys so hot?
                       </span>
                   </p>
                </Box>
                {/*  */}
                {/*  */}
                <Box className=' rounded-3xl py-2 flex items-center mt-4 justify-start pr-10 pl-2 bg-gradient-to-b bg-[#ED028C]/[.60]' >
                    <Image
                        loader={ImageLoader}
                        className=" rounded-full"
                        src="images/comment_avater.png"
                        alt="comments user"
                        width={42}
                        height={42}
                    />
                   <p className=' ml-3'>
                        <span  className=' rubik text-lg text-white font-medium inline-flex pr-2'>
                           Shela Ortega:
                       </span>
                       <span className=' rubik font-normal text-white text-lg' >
                       Why you guys so hot?
                       </span>
                   </p>
                </Box>
                {/*  */}
                <textarea name="comments" id="comments" cols="30" rows="3" placeholder='Write Comments' className='bg-transparent  border w-full  border-c6f6f p-3 mt-3 text-c6f6f rubik' style={{
                    height: '64px',
                    borderRadius: '30px'
                }}>

                </textarea>
                {/*  */}
                <Box className=' flex items-center justify-between'>
                    <div>
                        <PlayerEmoji/>
                    </div>
                    <FormControlLabel className="   mr-4 mb-2 text-base text-white rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Anytime" />
                </Box>
            </Box>
        </div>
    );
}

export default ViewerComments;