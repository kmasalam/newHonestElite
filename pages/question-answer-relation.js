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
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import DumpKeepCard from "clientComponents/DumpKeepCard";
import NewsTicker from "clientComponents/NewsTicker";
import { DumpKeepData } from "data/DumpKeepData";
import { NewsTickerData } from "data/NewsTickerData";
import SearchBar from "clientComponents/SearchBar";

//
import QuestionAnswerCardOne from "clientComponents/QuestionAnswerCardOne";
import {QuestionAnswerCardData} from "data/QuestionAnswerCardData"

function questionAnswer(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const [viewableItem, setViewableItem] = useState(10);

  const HomeMenuList = [
    {
      text: "Finance",
      link: '/'
    },
    {
      text: "Relation Ships",
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
  const [activeItem,setActiveItem] = useState(0)
  const handleDarkOverlay =(e)=>{}

  return (
    <div className=" bg-cf9f9">
      <div className="bg-white pt-6">
        <Container className=" he_container pb-2">
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
      <div className=" bg-white py-3 ">
        <NewsTicker
          NewsTickerData={NewsTickerData}
          tickerType={"topBarWhite"}
        />
      </div>
      <div className=" pt-10">
        <GalleryHead
          activeItem={''}
          hasSortable={false}
          hasCategory={true}
          pageLink="/"
          bigText="Love <br/> Question & Answer"
          categoryList={RandomGalleryCategoryData}
        />
      </div>
      <Container className=" he_container pb-14 pt-8">
        <Grid container spacing={4}>
          <Grid item md={2}>
            <Box className=" shadow-md bg-white px-3 py-5  ">
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
                        <ListItemButton component="a" href={item.link}>
                          <ListItemText
                            primary={item.text}
                            className=" text-sm text-c6f6f transition duration-300 rubik hover:text-black"
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </Box>
          </Grid>
          <Grid item md={6}>
            {
              QuestionAnswerCardData && QuestionAnswerCardData.map((item,i)=>{
                  return(
                    <QuestionAnswerCardOne 
                    key={i}
                    hasOverlay={true}
                    showShareableOnTop={true}
                    showAuthor={true} 
                    showRelatedTopic={true} 
                    height={200} 
                    width={810} 
                    isBox={true} 
                    item={item} 
                    size={'lg'} 
                    handleDarkOverlay={handleDarkOverlay}
                    showShareOnFooter={false} />
                  )
              })
            }
                
          </Grid>
          <Grid item md={4}>
              <Box className=" ml-10 drop-shadow-sm bg-white px-7 py-8 shadow-lg">
                  <h4 className=" text-xl  text-c2121 font-semibold pb-4">
                      Trending Now
                  </h4>
                  <Box>
                  {
                    QuestionAnswerCardData && QuestionAnswerCardData.map((item,i)=>{
                        return(
                          <QuestionAnswerCardOne 
                          key={i}
                          hasOverlay={false}
                          showShareableOnTop={false}
                          showAuthor={false} 
                          showRelatedTopic={false} 
                          height={160} 
                          width={456} 
                          isBox={false} 
                          item={item} 
                          size={'sm'} 
                          handleDarkOverlay={handleDarkOverlay}
                          showShareOnFooter={true} />
                        )
                    })
                  }
                  </Box>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default questionAnswer;
