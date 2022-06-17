import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
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
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
//
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import NewsTicker from "clientComponents/NewsTicker";
import { NewsTickerData } from "data/NewsTickerData";
import SearchBar from "clientComponents/SearchBar";
import DumpKeepAuthorCard from "clientComponents/DumpKeepAuthorCard";
import { DumpKeepData } from "data/DumpKeepData";
import BestFriendsBar from "clientComponents/BestFriendsBar";
import HonestEliteCustomPlayer from "clientComponents/HonestEliteCustomPlayer";
import CommentFooter from "clientComponents/SingleTubeVideo/CommentFooter";
import CommentsCreationBox from "clientComponents/CommentsCreationBox";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import { SingleTubeVideoData } from "data/SingleTubeVideoData.js";
import AudioPlayer from "clientComponents/AudioPlayer";
import TotalDumpKeepCard from "clientComponents/TotalDumpKeepCard";

function dumpKeep3({ ...allprops }) {
  const [visibleItem, setVisibleItem] = useState(2);
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className=" bg-cf9f9">
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
                <Box className=" w-[46.80rem] mr-[58px] mt-[-6px]">
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
        
        <div className=" pt-10">
          <GalleryHead
            hasSorting={false}
            pageLink="/"
            hasCategory={false}
            activeItem={""}
            bigText="Dump or <br/> Keep him/her"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Container className=" he_container pt-8">
          <Grid container spacing={4}>
            <Grid item lg={2}>
              <PerfectScrollbar className="   py-5  relative sticky top-0 h-screen ">
                {DumpKeepData &&
                  DumpKeepData.map((item, i) => {
                    if (i <= visibleItem - 1) {
                      return (
                        <DumpKeepAuthorCard
                          key={i}
                          item={item}
                          avatarWidth={60}
                          avatarHeight={60}
                        />
                      );
                    }
                  })}
              </PerfectScrollbar>
            </Grid>
            <Grid item lg={6}>
              <Box className=" bg-white px-8 py-6 shadow-md mt-4 ">
                <BestFriendsBar />
                <Box>
                  <h4 className=" uppercase font-medium text-c2121 text-xl py-3 border-t border-b mt-4 ">
                    HERE ARE MY ALL EVIDENCE ACCORDING THIS DISCUSSION
                  </h4>
                </Box>
                <Box className=" py-3 flex items-center justify-between border-b">
                  <div className=" inline-flex items-center justify-start">
                    <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <VideocamOutlinedIcon className=" text-white" />
                    </div>
                    <span>
                      VIDEO
                      <span>(4)</span>
                    </span>
                  </div>
                  <span className=" text-sm text-c2121 ">10 jan 2022</span>
                </Box>
                <Box>
                  <HonestEliteCustomPlayer />
                  <CommentFooter />
                </Box>
                <Box>
                  <CommentsCreationBox size="md" hasBorderBottom={false} />
                </Box>
                <Box>
                  <div className=" flex items-center justify-start py-3 border-b">
                    <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <FormatListBulletedIcon className=" text-white" />
                    </div>
                    <span>100 Answer</span>
                  </div>
                </Box>
                <Box>
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasQuote={false}
                    hasGallery={false}
                    hasVideo={false}
                    hasAudio={false}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasQuote={false}
                    hasGallery={true}
                    hasVideo={false}
                    hasAudio={false}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                </Box>
                <Box>
                  <div className=" flex items-center justify-start py-3 border-b">
                    <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <FormatListBulletedIcon className=" text-white" />
                    </div>
                    <span>Audio</span>
                  </div>
                </Box>
                <Box className=" py-3">
                  <h6 className=" text-lg text-c2121 pb-3 ">
                    Here is what I have to say about this
                  </h6>
                  <div className=" py-1">
                    <AudioPlayer playIconType="colored" />
                    <AudioPlayer playIconType="colored" />
                  </div>
                  <CommentFooter />
                </Box>
                <Box className=" py-3 flex items-center justify-between border-b">
                  <div className=" inline-flex items-center justify-start">
                    <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <VideocamOutlinedIcon className=" text-white" />
                    </div>
                    <span>
                      PHOTOS
                      <span>(4)</span>
                    </span>
                  </div>
                  <span className=" text-sm text-c2121 ">10 jan 2022</span>
                </Box>
                {/*  */}
                <Box className=" pt-4">
                  <div className="dump_keep_her_grid">
                    <div className="dump_keep_her__single relative">
                      <Image
                        loader={ImageLoader}
                        src="images/keep-dump-grid-img1.jpg"
                        alt={"dark logo"}
                        layout="fill"
                      />
                    </div>
                    <div className="dump_keep_her__single relative">
                      <Image
                        loader={ImageLoader}
                        src="images/keep-dump-grid-img2.jpg"
                        alt={"dark logo"}
                        layout="fill"
                      />
                    </div>
                    <div className="dump_keep_her__single relative">
                      <Image
                        loader={ImageLoader}
                        src="images/keep-dump-grid-img3.jpg"
                        alt={"dark logo"}
                        layout="fill"
                      />
                    </div>
                    <style jsx>{`
                      .dump_keep_her_grid {
                        position: relative;
                        display: grid;
                        grid-template-columns: auto auto;
                        grid-template-rows: auto auto;
                        grid-gap: 20px;
                      }
                      .dump_keep_her__single {
                        min-height: 216px;
                      }
                      .dump_keep_her__single:nth-child(1) {
                        grid-column: 1/1;
                        grid-row: 1/3;
                      }
                    `}</style>
                  </div>
                </Box>
                <Box>
                  <CommentFooter />
                </Box>
                {/*  */}
                <Box className=" pt-5">
                  <CommentsCreationBox size="md" hasBorderBottom={false} />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <PerfectScrollbar className=" sticky top-0 overflow-auto h-screen">
                <Box className=" ml-3 mt-3 ">
                  <TotalDumpKeepCard />
                </Box>
                <Box className=" bg-white ml-3 py-3 px-6 mt-8 shadow-md  ">
                  <Box>
                    <CommentsCreationBox size="sm" hasBorderBottom={true} />
                  </Box>
                  <Box>
                    <div className=" flex items-center justify-start py-3 border-b">
                      <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                        <FormatListBulletedIcon className=" text-white" />
                      </div>
                      <span>100+ Public Comments</span>
                    </div>
                  </Box>
                  <Box>
                    <CommentCard
                      data={SingleTubeVideoData}
                      hasQuote={false}
                      hasGallery={false}
                      hasVideo={true}
                      hasAudio={false}
                      hasBorderBottom={true}
                      size={"xs"}
                      hasMeta={false}
                      paddingRightSize={"xs"}
                    />
                    <CommentCard
                      data={SingleTubeVideoData}
                      hasQuote={false}
                      hasGallery={false}
                      hasVideo={false}
                      hasAudio={false}
                      hasBorderBottom={true}
                      size={"xs"}
                      hasMeta={false}
                      paddingRightSize={"xs"}
                    />
                    <CommentCard
                      data={SingleTubeVideoData}
                      hasQuote={false}
                      hasGallery={false}
                      hasVideo={false}
                      hasAudio={true}
                      hasBorderBottom={true}
                      size={"xs"}
                      hasMeta={false}
                      paddingRightSize={"xs"}
                    />
                  </Box>
                </Box>
              </PerfectScrollbar>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default dumpKeep3;
