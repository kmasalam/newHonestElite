import React from 'react'
import Masonry from 'react-masonry-component';

import {useState, useEffect} from 'react';
// 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require('lodash');


function GalleryHoverCard({...allprops}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    const {item, style} = allprops

    console.log('item',item)
    return (
        <>
            <Box className="he_gallery_hover_card p-5 rounded-none fadein ">
                <div className="he_gallery_hover_card__inner relative">
                    <div className="relative w-full  mb-5" style={{
                        height: `600px`,
                        width: `1000px`
                    }}>
                        <Image
                        className=" random gallery_img "
                        loader={ImageLoader}
                        src={item.galleryImg}
                        objectFit='cover'
                        alt='relation image'
                        layout='fill'
                        />
                    </div>
                    <div className="he_gallery_hover_card__content ">
                        <h6 className=" flex items-center pb-3 ">
                            
                            <Image
                            className=" random gallery_img shadow-md rounded-md "
                            loader={ImageLoader}
                            src={item.avatar}
                            alt='relation image'
                            height={30}
                            width={30}
                            />
                            <Link href="/">
                                <a className="authorName text-lg text-c2121 inline-flex ml-2">
                                    {item.authorName}
                                </a>
                            </Link>
                        </h6>
                        <Link href={item.postLink}>
                            <a className=' text-xl text-black font-medium pb-1 flex '>
                                {item.postTitle}
                            </a>
                        </Link>
                        <p className=' text-base text-c6f6f py-1'>
                        {item.postContent}
                        </p>
                    </div>
                    <div className="he_gallery_hover_card__footer w-full mt-3">
                        <ul className=' flex items-center justify-start w-full '>
                            <li className=' text-base mr-14 inline-flex flex-row items-center justify-center'>
                                <MessageOutlinedIcon className=" text-c6f6f"/>
                                <p className=' text-c6f6f text-base ml-2'>
                                    {item.postComments} Comments
                                </p>
                            </li>
                            <li className=' text-base mr-14 inline-flex items-center justify-center flex-row'>
                                <FavoriteIcon className=" text-c6f6f text-base"/>
                                <span className=' text-c6f6f text-base inline-block ml-2'>
                                    {item.postHeart}
                                </span>
                            </li>
                            <li className=" text-base inline-flex flex-row items-center justify-center">
                                <ShareIcon className="text-c6f6f text-base"/>
                                <span className=' text-c6f6f text-base inline-block ml-2'>
                                    Share
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default GalleryHoverCard;