import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import SearchBar from "clientComponents/SearchBar";
// User Defined Components

// 
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import {default as ReactSlider} from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";

import Typography from "@mui/material/Typography";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Popper from "@mui/material/Popper";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import ListIcon from "@mui/icons-material/List";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CommentIcon from "@mui/icons-material/Comment";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HomeNavigation from "clientComponents/HomeNavigation";
import InterestingGallery from "clientComponents/InterestingGallery";
import HomeMagazineAdd from "clientComponents/HomeMagazineAdd";
import ModellingGallery from "clientComponents/ModellingGallery";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Footer from "clientComponents/Footer";
import ModellingGallerySlide from "clientComponents/ModellingGallerySlide";
import Slider from "@mui/material/Slider";
import HomeOpenRightDoors from "clientComponents/HomeOpenRightDoors";
import HomeTrendingAdd from "clientComponents/HomeTrendingAdd";
import ShortRealityVideo from "clientComponents/ShortRealityVideo";
import RelationLounges from "clientComponents/RelationLounges";
import PersonalLinks from "clientComponents/PersonalLinks";
import SectionTitle from "clientComponents/SectionTitle";
import HomeBanner from "clientComponents/HomeBanner";
import { PodcastData } from "data/PodcastData";
import PodcastCard from "clientComponents/PodcastCard";
import HonestElitePodcastPlayer from "clientComponents/HonestElitePodcastPlayer";
import {PrivateCourtLoungesData} from 'data/PrivateCourtLounges'
// new sdf
import { RelationshipDiagonosisData } from "data/RelationshipDiagonosisData";
const _ = require('lodash');
// Next js
import Link from "next/link";
import Image from "next/image";
import { DoneOutlined, FlatwareOutlined } from "@mui/icons-material";
import {upcommingEventsData} from 'data/VideoListData'

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [age, setAge] = React.useState("all");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = (event) => {
    if (anchorEl !== null) {
      setAnchorEl(null);
      anchorEl.classList.remove("active");
    } else {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      event.currentTarget.classList.add("active");
    }
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    anchorEl.classList.remove("active");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const textAreaStyle = {
    border: "none",
    width: "100%",
    outline: "none",
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "&:focusVisible": {
      border: "none",
      outline: "none",
    },
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`  z-10  h-10 w-10 inline-flex items-center justify-center  top-1/3 absolute cursor-pointer  -right-14 `}
        onClick={onClick}
      >
          <ArrowForwardIosOutlinedIcon className=" text-5xl text-white"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` -left-6  z-10  h-10 w-10 inline-flex items-center justify-center  top-1/3 absolute cursor-pointer  `}
        onClick={onClick}
      >
          <ArrowBackIosOutlinedIcon className=" text-5xl text-white"/>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeNavigation navigationType={1} />
        <HomeBanner 
        pageTitleOnBanner={'Podcast'}
        bannerType={3} 
        hideLeftMenu={true} 
        VideoListData={upcommingEventsData} 
        />

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          className=" left-0 w-full top-6"
        >
          <div>
            <Container className=" he_container ">
              <Box className=" bg-c2121 px-8 pt-20  pb-10">
                <Grid container spacing={0}>
                  <Grid item md={4}>
                    <Box className=" border-r border-c6f6f  pr-14 pb-12 ">
                      <Box className="flex items-center justify-start pr-0 pb-12">
                        <div className=" inline-flex">
                          <Image
                            loader={ImageLoader}
                            src="images/podcast-img6.jpg"
                            alt="author image"
                            height={160}
                            width={160}
                          />
                        </div>
                        <Box className=" flex-1 ml-4">
                          <h4 className=" text-2xl font-medium rubik text-white uppercase pb-3">
                            AUTHOR NAME
                          </h4>
                          <p className=" text-12 rubik text-cd6d5">
                            Imagine for a second that someone claims to love you
                            so much that thsoft, cotton-lined bubble wrap it up
                            <Link href="/">
                              <a className=" uppercase text-sm rubik font-medium inline-flex text-white">
                                ... READ MORE
                              </a>
                            </Link>
                          </p>
                          <Button className=" mt-3 bg-primary text-white rubik capitalize font-medium  text-sm px-3 py-2">
                            Subscribe me
                          </Button>
                        </Box>
                      </Box>
                      <Box>
                        <Box className=" flex items-center justify-between pb-8">
                          <h4 className=" font-medium rubik text-white text-lg inline-flex rubik ">
                            Recent Work
                          </h4>
                          <span className=" text-cd6d5 rubik capitalize text-sm">
                            44 Videos
                          </span>
                        </Box>
                        <Box
                          className="overflow-y-auto  pb-4  "
                          style={{
                            height: `380px`,
                          }}
                        >
                          {/*  */}
                          <Box className=" flex   flex-flow mb-6">
                            <div
                              className=" relative"
                              style={{
                                width: "160px",
                                height: "115px",
                              }}
                            >
                              <Image
                                className=" inline-flex rounded-tl-md rounded-bl-md"
                                loader={ImageLoader}
                                src="images/podcast-img6.jpg"
                                alt="author image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <Box className=" rounded-tr-md rounded-br-md inline-flex flex-col items-center justify-start  border border-c6f6f px-3 pt-3 pb-1">
                              <div className=" flex items-start justify-start">
                                <h5 className=" text-white rubik text-base ">
                                  Marriage sex sucks get to know why.
                                </h5>
                                <span className=" rubik text-12 text-cd6d5">
                                  11/02/2022
                                </span>
                              </div>
                              <div className=" flex w-full items-center justify-between ">
                                <Button className=" px-0 min-w-fit">
                                  <Image
                                    className=" rounded-t-md"
                                    loader={ImageLoader}
                                    src="images/smallPlay.svg"
                                    alt="author image"
                                    height={17}
                                    width={16}
                                  />
                                </Button>
                                <div className=" w-44 mt-2 ">
                                  <Slider
                                    className=" play_duration_slider"
                                    size="small"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                  />
                                  <style jsx global>{`
                                    .play_duration_slider .MuiSlider-root {
                                      padding: 7px 0;
                                    }
                                    .play_duration_slider .MuiSlider-rail {
                                      background: #f8f8f8;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-track {
                                      background: #ed028c;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-thumb {
                                      background: #fff;
                                      margin-top: -1px;
                                    }
                                    .podcast_check .MuiFormControlLabel-label {
                                      font-size: 14px;
                                      font-family: "Rubik", sans-serif !important;
                                    }
                                    .podcast_check .MuiFormControlLabel-label {
                                    }
                                  `}</style>
                                </div>
                                <span className=" text-cd6d5 text-12 rubik capitalize">
                                  3.60
                                </span>
                              </div>
                            </Box>
                          </Box>
                          {/*  */}

                          {/*  */}
                          <Box className=" flex   flex-flow mb-6">
                            <div
                              className=" relative"
                              style={{
                                width: "160px",
                                height: "110px",
                              }}
                            >
                              <Image
                                className=" inline-flex rounded-tl-md rounded-bl-md"
                                loader={ImageLoader}
                                src="images/podcast-img6.jpg"
                                alt="author image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <Box className=" rounded-tr-md rounded-br-md inline-flex flex-col items-center justify-start  border border-c6f6f px-3 pt-3 pb-1">
                              <div className=" flex items-start justify-start">
                                <h5 className=" text-white rubik text-base ">
                                  Marriage sex sucks get to know why.
                                </h5>
                                <span className=" rubik text-12 text-cd6d5">
                                  11/02/2022
                                </span>
                              </div>
                              <div className=" flex w-full items-center justify-between ">
                                <Button className=" px-0 min-w-fit">
                                  <Image
                                    className=" rounded-t-md"
                                    loader={ImageLoader}
                                    src="images/smallPlay.svg"
                                    alt="author image"
                                    height={17}
                                    width={16}
                                  />
                                </Button>
                                <div className=" w-44 mt-2 ">
                                  <Slider
                                    className=" play_duration_slider"
                                    size="small"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                  />
                                  <style jsx global>{`
                                    .play_duration_slider .MuiSlider-root {
                                      padding: 7px 0;
                                    }
                                    .play_duration_slider .MuiSlider-rail {
                                      background: #f8f8f8;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-track {
                                      background: #ed028c;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-thumb {
                                      background: #fff;
                                      margin-top: -1px;
                                    }
                                  `}</style>
                                </div>
                                <span className=" text-cd6d5 text-12 rubik capitalize">
                                  3.60
                                </span>
                              </div>
                            </Box>
                          </Box>
                          {/*  */}

                          {/*  */}
                          <Box className=" flex   flex-flow mb-6">
                            <div
                              className=" relative"
                              style={{
                                width: "160px",
                                height: "110px",
                              }}
                            >
                              <Image
                                className=" inline-flex rounded-tl-md rounded-bl-md"
                                loader={ImageLoader}
                                src="images/podcast-img6.jpg"
                                alt="author image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <Box className=" rounded-tr-md rounded-br-md inline-flex flex-col items-center justify-start  border border-c6f6f px-3 pt-3 pb-1">
                              <div className=" flex items-start justify-start">
                                <h5 className=" text-white rubik text-base ">
                                  Marriage sex sucks get to know why.
                                </h5>
                                <span className=" rubik text-12 text-cd6d5">
                                  11/02/2022
                                </span>
                              </div>
                              <div className=" flex w-full items-center justify-between ">
                                <Button className=" px-0 min-w-fit">
                                  <Image
                                    className=" rounded-t-md"
                                    loader={ImageLoader}
                                    src="images/smallPlay.svg"
                                    alt="author image"
                                    height={17}
                                    width={16}
                                  />
                                </Button>
                                <div className=" w-44 mt-2 ">
                                  <Slider
                                    className=" play_duration_slider"
                                    size="small"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                  />
                                  <style jsx global>{`
                                    .play_duration_slider .MuiSlider-root {
                                      padding: 7px 0;
                                    }
                                    .play_duration_slider .MuiSlider-rail {
                                      background: #f8f8f8;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-track {
                                      background: #ed028c;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-thumb {
                                      background: #fff;
                                      margin-top: -1px;
                                    }
                                  `}</style>
                                </div>
                                <span className=" text-cd6d5 text-12 rubik capitalize">
                                  3.60
                                </span>
                              </div>
                            </Box>
                          </Box>
                          {/*  */}
                          {/*  */}
                          <Box className=" flex   flex-flow mb-6">
                            <div
                              className=" relative"
                              style={{
                                width: "160px",
                                height: "110px",
                              }}
                            >
                              <Image
                                className=" inline-flex rounded-tl-md rounded-bl-md"
                                loader={ImageLoader}
                                src="images/podcast-img6.jpg"
                                alt="author image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <Box className=" rounded-tr-md rounded-br-md inline-flex flex-col items-center justify-start  border border-c6f6f px-3 pt-3 pb-1">
                              <div className=" flex items-start justify-start">
                                <h5 className=" text-white rubik text-base ">
                                  Marriage sex sucks get to know why.
                                </h5>
                                <span className=" rubik text-12 text-cd6d5">
                                  11/02/2022
                                </span>
                              </div>
                              <div className=" flex w-full items-center justify-between ">
                                <Button className=" px-0 min-w-fit">
                                  <Image
                                    className=" rounded-t-md"
                                    loader={ImageLoader}
                                    src="images/smallPlay.svg"
                                    alt="author image"
                                    height={17}
                                    width={16}
                                  />
                                </Button>
                                <div className=" w-44 mt-2 ">
                                  <Slider
                                    className=" play_duration_slider"
                                    size="small"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                  />
                                  <style jsx global>{`
                                    .play_duration_slider .MuiSlider-root {
                                      padding: 7px 0;
                                    }
                                    .play_duration_slider .MuiSlider-rail {
                                      background: #f8f8f8;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-track {
                                      background: #ed028c;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-thumb {
                                      background: #fff;
                                      margin-top: -1px;
                                    }
                                  `}</style>
                                </div>
                                <span className=" text-cd6d5 text-12 rubik capitalize">
                                  3.60
                                </span>
                              </div>
                            </Box>
                          </Box>
                          {/*  */}
                          {/*  */}
                          <Box className=" flex   flex-flow mb-6">
                            <div
                              className=" relative"
                              style={{
                                width: "160px",
                                height: "110px",
                              }}
                            >
                              <Image
                                className=" inline-flex rounded-tl-md rounded-bl-md"
                                loader={ImageLoader}
                                src="images/podcast-img6.jpg"
                                alt="author image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <Box className=" rounded-tr-md rounded-br-md inline-flex flex-col items-center justify-start  border border-c6f6f px-3 pt-3 pb-1">
                              <div className=" flex items-start justify-start">
                                <h5 className=" text-white rubik text-base ">
                                  Marriage sex sucks get to know why.
                                </h5>
                                <span className=" rubik text-12 text-cd6d5">
                                  11/02/2022
                                </span>
                              </div>
                              <div className=" flex w-full items-center justify-between ">
                                <Button className=" px-0 min-w-fit">
                                  <Image
                                    className=" rounded-t-md"
                                    loader={ImageLoader}
                                    src="images/smallPlay.svg"
                                    alt="author image"
                                    height={17}
                                    width={16}
                                  />
                                </Button>
                                <div className=" w-44 mt-2 ">
                                  <Slider
                                    className=" play_duration_slider"
                                    size="small"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                  />
                                  <style jsx global>{`
                                    .play_duration_slider .MuiSlider-root {
                                      padding: 7px 0;
                                    }
                                    .play_duration_slider .MuiSlider-rail {
                                      background: #f8f8f8;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-track {
                                      background: #ed028c;
                                      height: 1px;
                                    }
                                    .play_duration_slider .MuiSlider-thumb {
                                      background: #fff;
                                      margin-top: -1px;
                                    }
                                  `}</style>
                                </div>
                                <span className=" text-cd6d5 text-12 rubik capitalize">
                                  3.60
                                </span>
                              </div>
                            </Box>
                          </Box>
                          {/*  */}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={8}>
                    <Box className=" h-full pl-12 pr-3  ">
                      <Grid container>
                        <Grid item md={7}>
                          <Box className=" flex items-center justify-start">
                            <Button className=" min-w-fit  text-sm bg-primary text-white uppercase rubik px-2 py-0 font-medium">
                              Live
                            </Button>
                            <p className=" text-cd6d5 text-sm rubik capitalize ml-3">
                              1.2K People watching
                            </p>
                            <span className=" bg-cd6d5 text-c2121 text-12 capitalize inline-flex px-1 ml-3 ">
                              <Image
                                loader={ImageLoader}
                                src="images/dollar_bag.svg"
                                alt="dollar bag"
                                width={12}
                                height={12}
                              />
                              <span className=" inline-flex ml-1">$100</span>
                            </span>
                          </Box>
                          <h4 className=" text-lg font-medium capitalize text-white pt-3 pb-6">
                            Power of the BIG dick and life after going black is{" "}
                            <br /> always AWESOME things to do.
                          </h4>
                          <Box className=" pt-4 mb-2 ">
                            <Button className=" bg-primary text-white capitalize text-sm rubik min-w-fit px-3 py-3 rounded-sm ">
                              <Image
                                loader={ImageLoader}
                                src="images/dollar_bag.svg"
                                alt="dollar bag"
                                width={24}
                                height={24}
                              />
                              <span className=" inline-flex ml-1">
                                Promotional Tip
                              </span>
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={5}>
                          <Box className=" flex items-end justify-end flex-col">
                            <Button
                              className=" min-w-fit px-0 py-0"
                              onClick={handleClose}
                            >
                              <CloseOutlinedIcon className=" text-4xl text-cd6d5" />
                            </Button>
                            <p className=" text-sm text-cd6d5 capitalize rubik mt-4 ">
                              11/02/2022
                            </p>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item md={8}>
                          <Box>
                            <HonestElitePodcastPlayer podcasterId={3} />
                          </Box>
                          <Box className=" flex items-center justify-between bg-white rounded-bl-md rounded-br-md py-5 px-3">
                            <Button className=" text-c6f6f text-sm rubik font-light">
                              <InfoOutlinedIcon className=" text-xl text-c6f6f mr-1" />
                              Calender
                            </Button>
                            <Button className=" text-c6f6f text-sm rubik font-light">
                              <AddIcon className=" text-xl text-c6f6f mr-1" />
                              Next Topic
                            </Button>
                            <Button className=" text-c6f6f text-sm rubik font-light">
                              <DoneOutlined className=" text-xl text-c6f6f mr-1" />
                              Be Alerted
                            </Button>
                            <Button className=" text-c6f6f text-sm rubik font-light">
                              <ShareOutlinedIcon className=" text-xl text-c6f6f mr-1" />
                              Share
                            </Button>
                            <Button className=" text-c6f6f text-sm rubik font-light">
                              <TourOutlinedIcon className=" text-xl text-c6f6f mr-1" />
                              Report Abuse
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box className=" relative">
                            <Box className=" pl-6 border border-c6f6f ml-6 pr-6 rounded-md relative -mt-20 relative">
                              <div className=" inline-flex items-center justify-start  border-c6f6f w-full py-3">
                                <div className="h-8 w-8 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                                  <FormatListBulletedIcon className=" text-lg text-white" />
                                </div>
                                <span className=" text-white text-sm rubik">
                                  100+ Live Comments
                                </span>
                              </div>
                              <Box
                                className=" overflow-auto "
                                style={{
                                  height: `421px`,
                                }}
                              >
                                {/*  */}
                                <Box className=" py-3 border-t border-c6f6f">
                                  <div className=" flex items-center justify-between">
                                    <div className=" inline-flex">
                                      <Image
                                        loader={ImageLoader}
                                        src="images/comment_avater.png"
                                        alt="author image"
                                        height={24}
                                        width={24}
                                      />
                                      <Link href="/">
                                        <a className=" text-sm text-white capitalize font-medium ml-2  ">
                                          Dushka Zapata
                                        </a>
                                      </Link>
                                    </div>

                                    <span className=" text-12 text-cd6d5 capitalize inline-flex flex-1">
                                      1 Hour
                                    </span>
                                  </div>
                                  <div className=" pt-1">
                                    <p className=" text-white capitalize text-12 ">
                                      Imagine for a second that someone claims
                                      to love you so much that they want
                                    </p>
                                  </div>
                                </Box>
                                {/*  */}
                                {/*  */}
                                <Box className=" py-3 border-t border-c6f6f">
                                  <div className=" flex items-center justify-between">
                                    <div className=" inline-flex">
                                      <Image
                                        loader={ImageLoader}
                                        src="images/comment_avater.png"
                                        alt="author image"
                                        height={24}
                                        width={24}
                                      />
                                      <Link href="/">
                                        <a className=" text-sm text-white capitalize font-medium ml-2 ">
                                          Dushka Zapata
                                        </a>
                                      </Link>
                                    </div>

                                    <span className=" text-12 text-cd6d5 capitalize inline-flex flex-1">
                                      1 Hour
                                    </span>
                                  </div>
                                  <div className="  pt-1">
                                    <p className=" text-white capitalize text-12 ">
                                      Imagine for a second that someone claims
                                      to love you so much that they want
                                    </p>
                                  </div>
                                </Box>
                                {/*  */}
                                {/*  */}
                                <Box className=" py-3 border-t border-c6f6f">
                                  <div className=" flex items-center justify-between">
                                    <div className=" inline-flex">
                                      <Image
                                        loader={ImageLoader}
                                        src="images/comment_avater.png"
                                        alt="author image"
                                        height={24}
                                        width={24}
                                      />
                                      <Link href="/">
                                        <a className=" text-sm text-white capitalize font-medium ml-2 ">
                                          Dushka Zapata
                                        </a>
                                      </Link>
                                    </div>

                                    <span className=" text-12 text-cd6d5 capitalize inline-flex flex-1">
                                      1 Hour
                                    </span>
                                  </div>
                                  <div className="  pt-1">
                                    <p className=" text-white capitalize text-12 ">
                                      Imagine for a second that someone claims
                                      to love you so much that they want
                                    </p>
                                  </div>
                                </Box>
                                {/*  */}
                                {/*  */}
                                <Box className=" py-3 border-t border-c6f6f">
                                  <div className=" flex items-center justify-between">
                                    <div className=" inline-flex">
                                      <Image
                                        loader={ImageLoader}
                                        src="images/comment_avater.png"
                                        alt="author image"
                                        height={24}
                                        width={24}
                                      />
                                      <Link href="/">
                                        <a className=" text-sm text-white capitalize font-medium ml-2 ">
                                          Dushka Zapata
                                        </a>
                                      </Link>
                                    </div>

                                    <span className=" text-12 text-cd6d5 capitalize inline-flex flex-1">
                                      1 Hour
                                    </span>
                                  </div>
                                  <div className="  pt-1">
                                    <p className=" text-white capitalize text-12 ">
                                      Imagine for a second that someone claims
                                      to love you so much that they want
                                    </p>
                                  </div>
                                </Box>
                                {/*  */}
                                {/*  */}
                                <Box className=" py-3 border-t border-c6f6f">
                                  <div className=" flex items-center justify-between">
                                    <div className=" inline-flex">
                                      <Image
                                        loader={ImageLoader}
                                        src="images/comment_avater.png"
                                        alt="author image"
                                        height={24}
                                        width={24}
                                      />
                                      <Link href="/">
                                        <a className=" text-sm text-white capitalize font-medium ml-2 ">
                                          Dushka Zapata
                                        </a>
                                      </Link>
                                    </div>

                                    <span className=" text-12 text-cd6d5 capitalize inline-flex flex-1">
                                      1 Hour
                                    </span>
                                  </div>
                                  <div className="  pt-1">
                                    <p className=" text-white capitalize text-12 ">
                                      Imagine for a second that someone claims
                                      to love you so much that they want
                                    </p>
                                  </div>
                                </Box>
                                {/*  */}
                              </Box>
                            </Box>
                            <Box className="post_creation_card__box border border-c6f6f rounded-md relative px-5  flex items-center justify-center pl-10 ml-6 mt-2 ">
                              <CommentIcon className=" absolute top-4 left-2 text-c6f6f text-lg" />
                              <TextareaAutosize
                                className="bg-transparent rubik text-sm capitalize text-c6f6f mt-3"
                                aria-label="minimum height"
                                minRows={2}
                                placeholder="Write Commets"
                                style={textAreaStyle}
                              />
                            </Box>
                            <span className=" absolute -bottom-8 -right-4 text-12 podcast_check">
                              <FormControlLabel
                                className=" text-12 text-c6f6f rubik"
                                control={
                                  <Checkbox
                                    defaultChecked
                                    className=" inline-flex mr-2  text-12"
                                  />
                                }
                                label="Post anonymously"
                              />
                            </span>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Box className=" border-t border-c6f6f">
                    <Box className=" pt-14">
                        <h4 className=" text-cd6d5 rubik capitalize text-2xl pb-3 ">
                            Similar Topics
                        </h4>
                    </Box>
                    <Box className="  -ml-3 -mr-3" style={{
                        width: `85%`
                    }}>

                        <ReactSlider {...settings} className=" relative">
                        {PodcastData &&
                            PodcastData.map((item, i) => {
                            return (
                                <Box className="  px-3 py-3" key={i}>
                                <PodcastCard
                                    item={item}
                                    height={""}
                                    width={""}
                                    size={"md"}
                                    type={1}
                                    imgHeight={216}
                                    id={id}
                                    handleClick={handleClick}
                                />
                                </Box>
                            );
                            })}
                        </ReactSlider>

                        
                    </Box>
                </Box>
              </Box>
            </Container>
          </div>
        </Popper>

        <div className=" bg-[#F8F8F8]">
          <Container className="he_container">
            <Box className=" pt-14">
              <SectionTitle title="Trending Live Now" fullWidth={false} />
            </Box>
            <Box className=" flex flex-wrap flex-row -ml-3 -mr-3 pb-12">
              {PodcastData &&
                [...PodcastData].splice(0, 10).map((item, i) => {
                  return (
                    <Box className=" flex-[0_0_20%] px-3 py-3" key={i}>
                      <PodcastCard
                        item={item}
                        height={""}
                        width={""}
                        size={"md"}
                        type={1}
                        imgHeight={216}
                        id={id}
                        handleClick={handleClick}
                      />
                    </Box>
                  );
                })}
            </Box>
              <Box className=" pt-0 pb-2 text-center">
                <Button variant="text"  className=" text-slate-500 ">
                    <AddIcon className=" text-c6f6f text-6xl"/>
                </Button>
              </Box>
          </Container>
          <Container disableGutters={true} maxWidth={false} className="pt-10">
                <Box>
                    <Image
                    loader={ImageLoader}
                    src="images/midelling_big_add.jpg"
                    alt="prev"
                    width={1935}
                    height={685}
                    layout='responsive'
                    />
                </Box>
            </Container>
            <Container className=" he_container pt-20">
                <Grid container>
                    <Grid item md={3}>
                        <Box>
                            <h4 className=" text-c2121 text-xl capitalize pb-4">
                                Private Court Lounges 
                            </h4>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                    <SearchBar
              searchbarType={'gray_form_box'}
              size={''}
              spacing={''}
              />

                    </Grid>
                    <Grid md={3}></Grid>
                </Grid>
            </Container>
            <Container className="he_container">
                <Box className=" flex flex-wrap w-full pt-10  ">
                    {
                        PrivateCourtLoungesData && [...PrivateCourtLoungesData].splice(0,16).map((item,i)=>(
                            <Box className=" flex-[0_0_12.5%]  relative " key={i} style={{
                                maxWidth: `12.5%`,
                                height: `200px`,
                            }}>
                                <Image
                                    loader={ImageLoader}
                                    className=" p-2 pt-4 pb-4"
                                    src={item.img}
                                    alt="prev"
                                    layout="fill"
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </div>
        <PersonalLinks />
        <Footer />
      </main>
    </div>
  );
}
