import React from 'react'
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
// Next js
import Link from "next/link";
import Image from "next/image";
import RelatedVideo from 'clientComponents/RelatedVideo';
import SingleTubeVideo from 'clientComponents/SingleTubeVideo'
import VideoTubeFooter from 'clientComponents/SingleTubeVideo/VideoTubeFooter';
import SearchBar from 'clientComponents/SearchBar';

//icon
import LoginIcon from '@mui/icons-material/Login';
import BookIcon from '@mui/icons-material/Book';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

export default function SingleVideoTube() {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <div className="bg-ce7e7 pt-6" style={{marginBottom:80}}>
     <Container className=" he_container pb-2">
          <Grid container spacing={3}>
            <Grid item md={1} >
              <Link href="/">
                <a>
                  <Image
                    loader={ImageLoader}
                    src="images/dark-logo.png"
                    alt={"dark logo"}
                    width={92}
                    height={57}
                  />
                </a>
              </Link>
            </Grid>
            <Grid item md={5}>
              {/*  */}
              <Box className=" w-[46.80rem] ">
                  <SearchBar
                  searchbarType={'gray_form_box'}
                  size={''}
                  spacing={''}
                  />
                </Box>
                {/*  */}
            </Grid>
            <Grid item md={6} className=" text-right">
            <Box className=" inline-block mr-14" >
                        <ul className=' inline-flex items-center' >
                            <li>
                                <Link href="/">
                                    <a className=' text-base text-c6f6f mr-5 '>
                                        <LoginIcon className=" inline-flex mr-2"/>
                                        <span>
                                            Login
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <a className=' text-base text-c6f6f mr-5 '>
                                        <BookOutlinedIcon/>
                                        <span>
                                        Registar
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <a className=' bh text-base text-c6f6f bg-white  mr-5 border border-white px-3 py-3'>
                                        B.H
                                    </a>
                                </Link>
                            </li>
                            <li className=" sense relative -mt-8 ">
                                <Link href="/">
                                    <a className=' text-base text-white mr-20 ml-16 '>
                                        <BookOutlinedIcon className='text-c6f6f '/>
                                        <span className=" leading-4 rounded-sm upload_sensetional_content inline-flex text-center w-32 top-8 text-xs bg-primary px-2 py-2 absolute left-4 ">
                                        Upload Sensetional Video is prohibitted
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <span className="night_mode inline-flex h-10 w-11 bg-white inline-flex items-center justify-center">
                                    <NightlightOutlinedIcon className=" text-gray-600"/>
                                </span>
                            </li>
                        </ul>
                    </Box>
            </Grid>
          </Grid>
        </Container>
        </div>  
    <Container className="he_container">
      <Grid container spacing={6}>
        <Grid item md={6}>
          <SingleTubeVideo />
        </Grid>
        <Grid item md={6}>
          <RelatedVideo/>
        </Grid>
        <Grid item md={12}>
          <VideoTubeFooter />
        </Grid>
      </Grid>
    </Container>
        
    </>
  )
}
