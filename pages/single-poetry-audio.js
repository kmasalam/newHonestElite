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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import PoetryCard from "clientComponents/PoetryCard";
import { PoetryData } from "data/PoetryData";
import PoetryAudioCard from "clientComponents/PoetryAudioCard";
import { PoetryAudioData } from "data/PoetryAudioData";
import AudioPlayer from "clientComponents/AudioPlayer";
import PoetryAuthorCard from "clientComponents/PoetryAuthorCard";
import VideoInfo from "clientComponents/SingleTubeVideo/VideoInfo";
import VideoStory from "clientComponents/SingleTubeVideo/VideoStory";
import { SingleTubeVideoData } from "data/SingleTubeVideoData";
import SimilarAudioCard from "clientComponents/SimilarAudioCard";

function poetryHome(props) {
  const itemToLoad = 2;
  const [poetryItem, setPoetryItem] = useState(8);
  const [showLyrics, setShowLyrics] = useState(false);

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    //Runs only on the first render
  }, []);

  return (
    <>
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
              <Grid item md={5}>
                {/*  */}
                <Box className=" w-[46.80rem] mr-[58px] ">
                  <SearchBar
                    searchbarType={"gray_form_box"}
                    size={""}
                    spacing={""}
                  />
                </Box>
                {/*  */}
              </Grid>
              <Grid item md={4} className=" text-right">
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
            pageLink="/"
            activeItem={"audio"}
            hasCategory={true}
            bigText="Poetry"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Container className=" he_container pt-28">
          <Grid container spacing={3}>
            <Grid item md={2}>
              <PerfectScrollbar className=" top-0 sticky h-screen ">
                <PoetryAuthorCard height={120} width={120} isSticky={true} />
              </PerfectScrollbar>
            </Grid>
            <Grid item md={5}>
              <Box className=" ">
                <Box className=" rounded-t-[4px] pb-1  overflow-hidden pr-1">
                  <AudioPlayer
                    type={2}
                    hasAlbumArt={true}
                    albumArt="images/player-album-art.jpg"
                    height={310}
                    width={602}
                    playIconType="white"
                  />
                  <Box className=" rounded-b-[4px] bg-white flex  drop-shadow-[0px_2px_1px_rgba(0,0,0,0.20)] px-6 py-6 justify-between items-start">
                    <Box className=" w-3/4 inline-flex">
                      <h5 className=" text-lg text-c2121 font-medium">
                        Fitness girl showing how to make perfect Back Push-ups
                        <span className=" text-lg font-light text-c2121 inline-flex ml-1">
                          jarin Khan
                        </span>
                      </h5>
                    </Box>
                    <Box className="  inline-flex  ">
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
                {/*  */}
                <Box className="mt-5 mb-3 flex items-center justify-start">
                  <h6
                    onClick={(e) => setShowLyrics(false)}
                    className={`text-c2121 fadein text-base font-normal rubik pl-0 px-3 mr-4 cursor-pointer ${
                      !showLyrics
                        ? " active border-b border-primary font-medium "
                        : " font-normal"
                    }`}
                  >
                    102 Comments
                  </h6>
                  <h6
                    onClick={(e) => setShowLyrics(true)}
                    className={` text-c2121 fadein text-base font-normal rubik  px-3 cursor-pointer ${
                      showLyrics
                        ? " active border-b border-primary font-medium "
                        : " font-normal"
                    }`}
                  >
                    Lyrics
                  </h6>
                </Box>
                {!showLyrics && (
                  <Box className=" fadein">
                    <VideoCommentInput
                      data={SingleTubeVideoData}
                      showCommentsInfo={false}
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
                  </Box>
                )}
                {showLyrics && (
                  <Box className=" py-8 fadein ">
                    <p className=" text-base text-c2121 rubik mb-2">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse
                      with blue commercial pick fork and spoon torwads Zimbabwe
                      victory against ruling aprty
                    </p>
                    <p className=" text-base text-c2121 rubik mb-2">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse
                      with blue commercial pick fork and spoon torwads Zimbabwe
                      victory against ruling aprty . The home soup and
                      teritories on the bold hash omlet next to the building
                      across paying rent and honest money horse with blue
                      commercial pick fork and spoon torwads Zimbabwe victory
                      against ruling aprty
                    </p>
                    <p className=" text-base text-c2121 rubik mb-2">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse
                      with blue commercial pick fork and spoon torwads Zimbabwe
                      victory against ruling aprty
                    </p>
                    <p className=" text-base text-c2121 rubik mb-2">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse
                      with blue commercial pick fork and spoon torwads Zimbabwe
                      victory against ruling aprty
                    </p>
                    <p className=" text-base text-c2121 rubik mb-2">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse
                      with blue commercial pick fork and spoon torwads Zimbabwe
                      victory against ruling aprty
                    </p>
                    <p className=" text-base text-c2121 rubik">
                      The home soup and teritories on the bold hash omlet next
                      to the building across paying rent and honest money horse.
                    </p>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item md={5}>
              <PerfectScrollbar className=" top-0 sticky relative h-screen">
                <Box className=" flex items-center justify-between pt-4 pb-6 -mt-16 pl-8">
                  <h4 className=" font-medium text-xl rubik text-c2121 ">
                    Similar Audios
                  </h4>
                  <p className=" text-black text-sm font-normal">Load 2nd 15</p>
                </Box>
                <Box className=" w-full pl-8">
                  {PoetryAudioData &&
                    [...PoetryAudioData]
                      .splice(0, 10)
                      .map((item, i) => (
                        <SimilarAudioCard
                          key={i}
                          number={i}
                          item={item}
                          height={60}
                          width={98}
                          size={"md"}
                        />
                      ))}
                </Box>
                <Box className=" text-center pt-2 pb-6 text-center pl-8">
                  <Button
                    onClick={(e) => setPoetryItem(poetryItem + itemToLoad)}
                  >
                    <AddIcon className=" text-6xl text-primary" />
                  </Button>
                </Box>
              </PerfectScrollbar>
            </Grid>
          </Grid>
        </Container>
        <Container className=" he_container pt-4 pb-20 ">
          <Grid container justifyContent="flex-end" spaceing={3}>
            <Grid item sm={10}>
              <Box>
                <h4 className=" text-c2121 text-2xl font-medium rubik pb-5">
                  Other Audios
                </h4>
              </Box>
              <Box className=" flex flex-wrap -ml-4 -mr-4">
                {PoetryAudioData &&
                  [...PoetryAudioData].splice(0, 9).map((item, i) => (
                    <Box key={i} className=" w-1/5 p-4 ">
                      <SimilarAudioCard
                        type={2}
                        number={i}
                        item={item}
                        height={140}
                        width={260}
                        size={"md"}
                      />
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default poetryHome;
