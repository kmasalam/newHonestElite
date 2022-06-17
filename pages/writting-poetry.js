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
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { WrittingPoetryData } from "data/WrittingPoetryData";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

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
            <Grid
              item
              md={6}
              className=" flex items-center justify-center pt-3"
            >
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
      <Container className=" he_container pt-16 pb-16 ">
        <Grid container spacing={4}>
          <Grid item md={2}>
            <Box className=" shadow-md bg-white px-3 py-5  top-0 sticky ">
              <h4 className=" text-black text-xl  font-medium capitalize pb-0 px-3">
                Categories
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
                            className=" text-sm text-c6f6f font-regular transition duration-300 rubik hover:text-black hover:font-medium"
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box className=" pl-6">
              <Grid container spacing={4}>
                {WrittingPoetryData &&
                  [...WrittingPoetryData].splice(0, 9).map((item, i) => (
                    <Grid item md={4} key={i}>
                      <WrittingPoetryCard
                        item={item}
                        height={246}
                        width={415}
                        number={i}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
