import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import { alpha, styled } from '@mui/material/styles';
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
import TextField from "@mui/material/TextField";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Audio from 'clientComponents/AudioPlayer'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
//
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import DumpKeepCard from "clientComponents/DumpKeepCard";
import NewsTicker from "clientComponents/NewsTicker";
import { DumpKeepData } from "data/DumpKeepData";
import { NewsTickerData } from "data/NewsTickerData";
import SearchBar from "clientComponents/SearchBar";
import CommentCard from 'clientComponents/SingleTubeVideo/CommentCard'
//
import QuestionAnswerCardOne from "clientComponents/QuestionAnswerCardOne";
import { QuestionAnswerCardData } from "data/QuestionAnswerCardData";
import {SingleTubeVideoData} from 'data/SingleTubeVideoData.js'
import CommentsCreationBox from 'clientComponents/CommentsCreationBox'
import MoreRelatedQuestion from 'clientComponents/MoreRelatedQuestion'


function SingleQuestionAnswer(props) {
  
 

  const HomeMenuList = [
    {
      text: "Finance",
      link: '/'
    },
    {
      text: "Relation",
      link: '/question-answer-relation'
    },
    {
      text: "Eractal Discfunction",
      link: '/'
    },
    {
      text: "Grew Apart",
      link: '/'
    },
    {
      text: "Fashion",
      link: '/'
    },
    {
      text: "Wealth & Money",
      link: '/'
    },
    {
      text: "Shopping",
      link: '/'
    },
    {
      text: "Travelling",
      link: '/'
    },
    {
      text: "Sexual",
      link: '/'
    },
    
  ];

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  
  // const CssTextField = styled(TextField)({
    
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: 'transparent',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '&::before':{
  //         border: 'none'
  //     },
  //     '& fieldset': {
  //       borderColor: 'transparent',
  //     },
  //     '&:hover fieldset': {
  //       borderColor: 'transparent',
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: 'transparent',
  //     },
  //   },
  // });
  const [activeItem,setActiveItem] = useState(0)
  const handleDarkOverlay = (i) =>{
      setActiveItem(i)
  }
  

  return (
    <div>
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
                <Box className=" w-[46.80rem] ">
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
                  <Button className=" py-3 px-3 bg-primary text-white text-sm capitalize">
                    Upload all related
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        
        <div className=" pt-10">
          <GalleryHead
            activeItem={''}
            hasCategory={false}
            pageLink="/"
            bigText="LOVE <br/> Question & Answers"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Container className=" he_container pt-8">
          <Grid container spacing={4}>
            <Grid item md={2}>
            <PerfectScrollbar className=" shadow-md bg-white px-3 py-5 top-0 sticky h-screen  ">
                <h4 className=" text-black text-xl  font-medium uppercase pb-0 px-3">
                  Q&A HOME
                </h4>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  aria-label="contacts"
                >
                  {HomeMenuList &&
                    HomeMenuList.map((item, i) => {
                      return (
                        <ListItem disablePadding key={i}>
                          <ListItemButton  component="a" href={item.link} className="py-2 px-4">
                            <ListItemText
                              primary={item.text}
                              className=" text-sm text-c6f6f transition duration-300 rubik hover:text-black"
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                </List>
              </PerfectScrollbar>
            </Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={4}>
                  <PerfectScrollbar className=" top-0 sticky h-screen ">
                    {QuestionAnswerCardData &&
                      QuestionAnswerCardData.map((item, i) => {
                        return (
                          <QuestionAnswerCardOne
                            key={i}
                            hasDarkOverlay={true}
                            showShareableOnTop={true}
                            hasOverlay={true}
                            showAuthor={true}
                            showRelatedTopic={true}
                            height={260}
                            width={470}
                            isBox={true}
                            item={item}
                            size={"xs"}
                            showShareOnFooter={false}
                            activeItem={activeItem}
                            handleDarkOverlay={handleDarkOverlay}
                            index={i}
                          />
                        );
                      })}
                  </PerfectScrollbar>
                </Grid>
                <Grid item md={8} className="px-12 py-10   bg-white drop-shadow-[2px_0px_1px_rgba(0,0,0,0.10)] ">
                    
                  <Button className="absolute right-5 top-5">
                      <CloseIcon className=" text-4xl text-c6f6f "/>
                  </Button>
                  <CommentsCreationBox 
                  size='md' 
                  hasBorderBottom={true} />
                  <Box className=" comments_sorting_bar flex items-center justify-between py-3 border-b ">
                    <div className=" inline-flex items-center justify-start">
                        <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                            <FormatListBulletedIcon className=" text-white"/>
                        </div>
                        <span>
                        100 Answer
                        </span>
                    </div>
                    <div className=" inline-flex items-center justify-center ">
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            className=" text-base text-c6f6f rubik inline-flex mr-6 "
                            value="end"
                            control={<Checkbox />}
                            label="All"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                          className=" text-base text-c6f6f rubik mr-6"
                            value="end"
                            control={<Checkbox />}
                            label="Women"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                          className=" text-base text-c6f6f  rubik"
                            value="end"
                            control={<Checkbox />}
                            label="Men"
                            labelPlacement="end"
                          />
                        </FormGroup>
                      </FormControl>
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
                     size={'md'} />
                    <CommentCard 
                    data={SingleTubeVideoData} 
                    hasQuote={false}
                    hasGallery={true} 
                    hasVideo={false} 
                    hasAudio={false} 
                    hasBorderBottom={true} 
                    size={'md'}/>
                    <CommentCard 
                    hasQuote={false}
                    data={SingleTubeVideoData} 
                    hasGallery={false} 
                    hasVideo={true} 
                    hasAudio={false} 
                    hasBorderBottom={true} 
                    size={'md'}/>
                    <CommentCard 
                    hasQuote={true}
                    data={SingleTubeVideoData} 
                    hasGallery={false} 
                    hasVideo={false} 
                    hasAudio={false} 
                    hasBorderBottom={true} 
                    size={'md'}/>
                     <CommentCard
                     data={SingleTubeVideoData} 
                     hasQuote={false}
                     hasGallery={false} 
                     hasVideo={false} 
                     hasAudio={false} 
                     hasBorderBottom={true} 
                     size={'md'} />
                     <CommentCard
                     data={SingleTubeVideoData} 
                     hasQuote={false}
                     hasGallery={false} 
                     hasVideo={false} 
                     hasAudio={true} 
                     hasBorderBottom={true} 
                     size={'md'} />
                      
                  </Box>
                  {/*  */}
                  <MoreRelatedQuestion/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default SingleQuestionAnswer;
