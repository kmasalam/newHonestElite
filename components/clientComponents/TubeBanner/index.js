import {useState, useEffect} from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
// Next js
import Link from "next/link";
import Image from "next/image";
// 
import KnowledgeBaseComponent from '../KnowledgeBaseComponent';
import { KnowledgeBaseData } from 'data/KnowledgeBaseData';

function index(props) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <div className=' the_tube_banner relative h-[34rem]' >
            <Image
                className=" absolute top-0 left-0"
                loader={ImageLoader}
                src='images/the-tube-bg.jpg'
                objectFit="cover"
               layout='fill'
                />
                <div className=' absolute left-1/2 -translate-x-2/4   w-11/12 top-[200px]  '>
                    <KnowledgeBaseComponent 
                    height={180}
                    width={180}
                    type={1} 
                    sliderData={KnowledgeBaseData}/>
                </div>
        </div>
    );
}

export default index;