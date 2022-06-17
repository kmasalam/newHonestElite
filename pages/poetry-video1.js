import React,{ useState, useEffect,forwardRef } from "react";
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
import HonestEliteCustomPlayer from "clientComponents/HonestEliteCustomPlayer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoInfo from "clientComponents/SingleTubeVideo/VideoInfo";
import VideoStory from "clientComponents/SingleTubeVideo/VideoStory";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from '@mui/material/Snackbar';
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
import PoetryCard from "clientComponents/PoetryCard";
import PoetryAuthorCard from "clientComponents/PoetryAuthorCard";
import { PoetryData } from "data/PoetryData";
import { SingleTubeVideoData } from "data/SingleTubeVideoData";

//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
//

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function index(props) {
  const [popularVideoItem, setPopularvideoItem] = useState(8);
  const [theaterView,setTheaterView] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

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


  return (
    <>
      <div className=" bg-cf9f9">
        {/*  */}

        {
           theaterView && <Snackbar 
           anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
           open={snackbarOpen} 
           autoHideDuration={2000} 
           onClose={handleClose}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           <style jsx global>{`
              .MuiPaper-root {
                background-color: #383938;
              }
            `}</style>
             Theaterview is Activated
           </Alert>
         </Snackbar>
        }
      <div className="bg-white pt-8">
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
                <Box className=" w-[46.80rem] mr-[58px] mt-[-1.2rem]">
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
                  <Button className=" py-3 rounded-none px-3 bg-primary text-white text-sm capitalize">
                    Upload all related
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* <div className=" bg-white pt-3 pb-6 ">
          <NewsTicker
            NewsTickerData={NewsTickerData}
            tickerType={"topBarWhite"}
          />
        </div> */}
        <div className=" pt-10">
          <GalleryHead
            pageLink="/"
            bigText="Poetry"
            activeItem={'video'}
            categoryList={RandomGalleryCategoryData}
            hasCategory={true}
          />
        </div>
        {/*  */}

        {/*  */}
        {/*  */}

        {/*  */}
        <Container className=" he_container pt-20">
          <Grid container spacing={3}>
            {
               !theaterView && <Grid item md={2} className="">
                 <PerfectScrollbar className=" top-0 sticky h-screen">
                  <PoetryAuthorCard height={120} width={120} isSticky={true} />
                 </PerfectScrollbar>
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
              <PerfectScrollbar className={`${theaterView ? 'ml-24' : 'ml-20'} sticky top-0 h-screen  `}>
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
                      [...PoetryData].splice(0, 18).map((item, i) => (
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
                        <Button className=" transition-all duration-300  group  see_all_button bg-primary/[.10] text-primary text-12  py-2 px-4 font-medium capitalize rubik  hover:bg-cff42 hover:text-white  hover:rounded-sm ">
                            
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
      </div>
    </>
  );
}

export default index;
