import React from "react";
import { useState, useEffect } from "react";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// Next js
import Link from "next/link";
import Image from "next/image";
import RelatedVideo from "clientComponents/RelatedVideo";
import SingleTubeVideo from "clientComponents/SingleTubeVideo";
import VideoTubeFooter from "clientComponents/SingleTubeVideo/VideoTubeFooter";
import SearchBar from "clientComponents/SearchBar";
//
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { SingleTubeVideoData } from "data/SingleTubeVideoData";
import HonestEliteCustomPlayer from "clientComponents/HonestEliteCustomPlayer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoInfo from "clientComponents/SingleTubeVideo/VideoInfo";
import VideoStory from "clientComponents/SingleTubeVideo/VideoStory";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from '@mui/material/Snackbar';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
//
import PoetryCard from "clientComponents/PoetryCard";
import PoetryAuthorCard from "clientComponents/PoetryAuthorCard";
import { PoetryData } from "data/PoetryData";
//icon
import LoginIcon from "@mui/icons-material/Login";
import BookIcon from "@mui/icons-material/Book";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

export default function SingleVideoTube() {
    const [popularVideoItem, setPopularvideoItem] = useState(8);
    const [theaterView,setTheaterView] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const handleTheaterView = () =>{
        setSnackbarOpen(true)
        setTheaterView(!theaterView)
       
      }
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarOpen(false);
      };


  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <div className="bg-ce7e7 pt-6" style={{ marginBottom: 80 }}>
        <Container className=" he_container pb-3">
          <Grid container spacing={3}>
            <Grid item md={1}>
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
            <Grid item md={6}>
              <Box className=" w-[782px] ">
                <SearchBar 
                searchbarType={"lightFilledDark"} 
                pageType={'single_tube'}
                />
              </Box>
            </Grid>
            <Grid item md={5} className=" text-right">
              <Box className=" inline-block mr-14 mt-[9px]">
                <ul className=" inline-flex items-center">
                  <li>
                    <Link href="/">
                      <a className=" text-base text-c6f6f mr-5 hover:text-primary ">
                        <LoginIcon className=" inline-flex mr-2" />
                        <span>Login</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className=" text-base text-c6f6f mr-5 hover:text-primary ">
                        <BookOutlinedIcon />
                        <span>Registar</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className=" bh text-12 text-c6f6f inline-flex bg-white items-center justify-center  mr-5 border border-white  w-[32px] h-[28px] hover:text-primary">
                        B.H
                      </a>
                    </Link>
                  </li>
                  <li className=" sense relative -mt-[60px] ">
                    <Link href="/">
                      <a className=" text-base text-white mr-20 ml-16 ">
                        <FileDownloadOutlinedIcon className="text-c6f6f  -scale-100 " />
                        <span className=" leading-3  rubik rounded-sm upload_sensetional_content inline-flex text-center w-32 top-6 text-10 bg-primary px-[5px] py-[5px] absolute left-4  ">
                          Upload Sensetional Video is prohibitted
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <span className="night_mode cursor-pointer  inline-flex h-[26px] w-[26px] items-center justify-center bg-white inline-flex items-center justify-center">
                      <NightlightOutlinedIcon className=" text-gray-600 text-sm hover:text-primary" />
                    </span>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
     
     {/*  */}
     <Container className=" he_container pt-14">
          <Grid container spacing={3}>
            {
               !theaterView && <Grid item md={2} className="">
               <PoetryAuthorCard height={120} width={120} isSticky={true} />
             </Grid>
            }
            
            <Grid item md={theaterView ? 7 : 4}>
              <Box>
                {/*  */}
                <Box className=" rounded-t-[4px] pb-1  overflow-hidden pr-1">
                  <HonestEliteCustomPlayer handleTheaterView={handleTheaterView} />
                  <Box className=" rounded-b-[4px] bg-white flex  drop-shadow-[0px_2px_1px_rgba(0,0,0,0.10)] px-6 py-6">
                    <Box className=" w-3/4">
                      <h5 className=" text-lg text-c2121 font-medium">
                        Fitness girl showing how to make perfect Back Push-ups
                      </h5>
                    </Box>
                    <Box className=" w-1/4 flex flex-col ">
                      <span className=" text-base text-c2121 ">
                        <AccessTimeIcon className=" text-lg inline-flex mr-1" />
                        09 Jan 2022
                      </span>
                      <span className=" text-base text-c2121 ">
                        <RemoveRedEyeOutlinedIcon className=" text-lg inline-flex mr-1" />
                        1,23,455
                      </span>
                    </Box>
                  </Box>
                </Box>
                {/*  */}
                <VideoInfo type={2} size={"md"} />
                <VideoStory data={SingleTubeVideoData} />
                <VideoCommentInput data={SingleTubeVideoData} />
                <CommentCard
                  data={SingleTubeVideoData}
                  hasQuote={false}
                  hasGallery={false}
                  hasVideo={false}
                  hasAudio={false}
                  hasBorderBottom={true}
                  hasMeta={true}
                  size={"md"}
                  paddingRightSize={"xs"}
                />
                <CommentCard
                  data={SingleTubeVideoData}
                  hasQuote={false}
                  hasGallery={false}
                  hasVideo={false}
                  hasAudio={false}
                  hasBorderBottom={true}
                  hasMeta={true}
                  size={"md"}
                  paddingRightSize={"xs"}
                />
              </Box>
              <Box className=" text-center py-8">
                <Button>
                  <AddIcon className=" text-c6f6f text-4xl" />
                </Button>
              </Box>
            </Grid>
            <Grid item md={theaterView ? 5 : 6}>
              <PerfectScrollbar className={`${theaterView ? 'ml-24' : 'ml-20'} top-0 sticky h-screen  pt-20 overflow-x-hidden  `}>
                <Box className=" flex items-center justify-between pb-6 -mt-16">
                  <h5 className=" inline-flex text-c2121 font-medium text-lg rubik ">
                    Similar Video
                  </h5>
                  <p className=" inline-flex text-sm text-c6f6f rubik font-normal items-center justify-center">
                    Load 2nd 15
                    <Button className=" bg-black min-w-fit h-10 w-10 rounded-md  ml-2 inline-block ">
                      <MenuIcon className=" text-white" />
                    </Button>
                  </p>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    {PoetryData &&
                      [...PoetryData].splice(0, 12).map((item, i) => (
                        <Grid item md={theaterView ? 6: 4} key={item._id}>
                          <PoetryCard
                            size={"xs"}
                            item={item}
                            width={237}
                            height={120}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Box>
                <Box className=" text-center py-8">
                  <Button>
                    <AddIcon className=" text-c6f6f text-4xl" />
                  </Button>
                </Box>
              </PerfectScrollbar>
            </Grid>
          </Grid>
        </Container>
        <Container className=" he_container pt-8 pb-14">
            <Grid 
            justifyContent="flex-end"
            container 
            spacing={3} 
            >
              {
               theaterView && <Grid item md={2} className="">
               <PoetryAuthorCard height={120} width={120} isSticky={true} />
             </Grid>
            }
                <Grid item md={10}>
                    <Box className=" flex items-end justify-between mb-8">
                        <h4 className=" text-xl text-c2121 font-medium capitalize">
                            Trending
                        </h4>
                        <Button className=" transition-all duration-300  group  see_all_button bg-primary/[.10] text-primary text-12  py-2 px-4 font-medium capitalize rubik  hover:bg-primary hover:text-white  hover:rounded-sm ">
                            
                            See All
                            <style jsx>{`
                                
                            `}</style>
                            <ArrowForwardIcon className=" transition-all duration-300 text-sm text-primary  group-hover:text-white"/>
                        </Button>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                        {PoetryData &&
                            [...PoetryData].splice(0, 8).map((item, i) => (
                                <Grid item md={3} key={item._id}>
                                <PoetryCard
                                    size={"md"}
                                    item={item}
                                    width={343}
                                    height={200}
                                />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    </>
  );
}
