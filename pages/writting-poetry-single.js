import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { SingleTubeVideoData } from "data/SingleTubeVideoData";
import { WrittingPoetryData } from "data/WrittingPoetryData";

//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
import PoetryAuthorCard from "clientComponents/PoetryAuthorCard";

function index(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const HomeMenuList = [
    {
      text: "Love",
      link: "/",
    },
    {
      text: "Cheating",
      link: "/question-answer-relation",
    },
    {
      text: "Abuse",
      link: "/",
    },
    {
      text: "Eractal Discfunction",
      link: "/",
    },
    {
      text: "Grew Apart",
      link: "/",
    },
    {
      text: "Lifestyles",
      link: "/",
    },
    {
      text: "Fashion",
      link: "/",
    },
    {
      text: "Wealth & Money",
      link: "/",
    },
    {
      text: "Shopping ",
      link: "/",
    },
    {
      text: "Sexual ",
      link: "/",
    },
  ];

  return (
    <div className=" bg-cf9f9">
      <div className="bg-white pt-6">
        <Container className=" he_container pb-3">
          <Grid container spacing={3}>
            <Grid item md={3}>
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
            <Grid item md={6} className=" flex items-center justify-center pt-3">
                {/*  */}
                <Box className=" w-[46.80rem] mr-[58px] ">
                  <SearchBar
                  searchbarType={'gray_form_box'}
                  size={''}
                  spacing={''}
                  />
                </Box>
                {/*  */}
            </Grid>
            <Grid item md={3} className=" text-right">
              <Box>
                <Button className=" rounded-none py-3 px-3 bg-primary text-white text-sm capitalize">
                  Upload all related
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
     
      <div className=" pt-10">
        <GalleryHead
          activeItem={"written"}
          hasSortable={false}
          hasCategory={true}
          pageLink="/"
          bigText="Poetry"
          categoryList={RandomGalleryCategoryData}
        />
      </div>
      <Container className=" he_container  mt-[50px] pb-12  ">
        <Grid container spacing={4}>
          <Grid item md={2}>
            <Box className=" top-0 sticky">
              <PoetryAuthorCard 
              authorImg="images/rabindranath.jpg"
              height={120} 
              width={120} 
              isSticky={true} />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className=" mr-10 px-12 py-12 bg-white  drop-shadow-[1px_1px_2px_rgba(0,0,0,0.10)] rounded-sm">
              <Box
                className=" relative"
                style={{
                  height: `318px`,
                }}
              >
                <Image
                  loader={ImageLoader}
                  src="images/poetry-single.jpg"
                  alt={"dark logo"}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="item_number absolute top-2 left-6">
                  <style jsx>{`
                    .item_number {
                      -webkit-text-stroke: 1px #fff;
                      font-family: "cooper_blkoul_btblack" !important;
                      color: transparent;
                      font-size: 42px;
                    }
                  `}</style>
                  P.{1}
                </span>
                <Link href="/">
                  <a className=" text-white rubik absolute font-bold uppercase text-2xl w-full text-center left-0 bottom-6  ">
                    LAST CURTAIN
                  </a>
                </Link>
              </Box>
              <Box className=" text-center ">
                <p className=" text-2xl font-normal pt-8 rubik text-c2121 text-center leading-8 w-3/5 ml-auto mr-auto">
                  I know that the day will come when my sight of this earth
                  shall be lost, and life will take its leave in silence,
                  drawing the last curtain over my eyes.
                  <br />
                  <br />
                  Yet stars will watch at night, and morning rise as before, and
                  hours heave like sea waves casting up pleasures and pains.
                  <br />
                  <br />
                  When I think of this end of my moments, the barrier of the
                  moments breaks and I see by the light of death thy world with
                  its careless treasures. Rare is its lowliest seat, rare is its
                  meanest of lives.
                  <br />
                  <br />
                  Things that I longed for in vain and things that I got ---let
                  them pass. Let me but truly possess the things that I ever
                  spurned and overlooked.
                </p>
              </Box>
              <Box className=" text-center pt-10">
                <Link href="/">
                  <a className=" font-semibold text-2xl uppercase text-c2121 text-center">
                    Next Poem
                  </a>
                </Link>
              </Box>
              <Box className="single_poetry_info_bar flex items-center justify-between border-t border-b py-4 mt-8 mb-2">
                <span className=" text-base text-c6f6f capitalize font-light">
                  <AccessTimeIcon className="inline-flex mr-1" />
                  22/02/22
                </span>
                <span className=" text-base text-c6f6f capitalize font-light">
                  <RemoveRedEyeOutlinedIcon className="inline-flex mr-1" />
                  25k views
                </span>
                <Button className=" min-w-fit bg-transparent text-base text-c6f6f capitalize font-normal">
                  <FavoriteIcon className="inline-flex mr-1" />
                  Library
                </Button>
                <Button className=" min-w-fit bg-transparent text-base text-c6f6f capitalize font-normal">
                  <TourOutlinedIcon className="inline-flex mr-1" />
                  Report Abuse
                </Button>
                <Button className=" min-w-fit bg-transparent text-base text-c6f6f capitalize font-normal">
                  <ShareIcon className="inline-flex mr-1" />
                  Share
                </Button>
              </Box>
              {/*  */}
              <Box>
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
                    hasBorderBottom={false}
                    hasMeta={true}
                    size={"md"}
                    paddingRightSize={"xs"}
                    />
              </Box>
              <Box className=" text-center pt-0 pb-2">
                <Button>
                  <AddIcon className=" text-c6f6f text-6xl" />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <PerfectScrollbar className=" ml-9 top-0 sticky h-screen ">
                <Box className=" flex items-center justify-between mb-8 -mt-16">
                    <h4 className=" text-xl font-medium rubik capitalize inline-flex text-c2121">
                        Similar Poetry
                    </h4>
                    <span className=" text-black rubik font-normal text-sm ">
                        Load 2nd 16
                    </span>
                </Box>
                <Box>
                    <Grid container spacing={4}>
                      {
                        WrittingPoetryData && [...WrittingPoetryData].splice(0,5).map((item,i)=>(
                          <Grid item md={12} key={i}>
                              <WrittingPoetryCard
                              item={item}
                              height={242}
                              width={415}
                              number={i}
                              />
                          </Grid>
                        ))
                      }
                        
                    </Grid>
                </Box>
            </PerfectScrollbar>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
