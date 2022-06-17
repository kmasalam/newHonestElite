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
import { QuestionAnswerData } from "data/DumpKeepData";
import { NewsTickerData } from "data/NewsTickerData";
import SearchBar from "clientComponents/SearchBar";
import QuestionAnswerCardOne from "clientComponents/QuestionAnswerCardOne";
import { QuestionAnswerCardData } from "data/QuestionAnswerCardData";

function dumpKeep2(props) {
  const [questionCategory, setQuestionTCategory] = useState(null);

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const [viewableItem, setViewableItem] = useState(10);
  const handleDarkOverlay = (e) => {};
  const HomeMenuList = [
    {
      _id: 1,
      text: "Finance",
      link: "/",
    },
    {
      _id: 2,
      text: "Relation",
      link: "/question-answer-relation",
    },
    {
      _id: 3,
      text: "Eractal Discfunction",
      link: "/",
    },
    {
      _id: 4,
      text: "Grew Apart",
      link: "/",
    },
    {
      _id: 5,
      text: "Fashion",
      link: "/",
    },
    {
      _id: 6,
      text: "Wealth & Money",
      link: "/",
    },
    {
      _id: 7,
      text: "Shopping",
      link: "/",
    },
    {
      _id: 8,
      text: "Travelling",
      link: "/",
    },
    {
      _id: 9,
      text: "Sexual",
      link: "/",
    },
  ];


  return (
    <>
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
            activeItem={""}
            pageLink="/"
            hasCategory={true}
            bigText="Love <br/> Question & Answer"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Container className=" he_container pt-10">
          <Grid container spacing={3}>
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
                          <ListItemButton
                            onClick={() => setQuestionTCategory(item._id)}
                          >
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
            {_.isNull(questionCategory) && (
              <Grid item md={10}>
                <Grid container spacing={4}>
                  {QuestionAnswerData &&
                    QuestionAnswerData.map((item, i) => {
                      if (i <= viewableItem - 1) {
                        return (
                          <Grid item md={4} key={i}>
                            <DumpKeepCard
                              isQustionAnswer={true}
                              showCategory={true}
                              showAvatar={false}
                              item={item}
                              number={i + 1}
                              width={455}
                              height={242}
                            />
                          </Grid>
                        );
                      }
                    })}
                </Grid>
              </Grid>
            )}
            {questionCategory && (
              <Grid item md={6}>
                {QuestionAnswerCardData &&
                  QuestionAnswerCardData.map((item, i) => {
                    return (
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
                        size={"lg"}
                        handleDarkOverlay={handleDarkOverlay}
                        showShareOnFooter={false}
                      />
                    );
                  })}
              </Grid>
            )}
            {questionCategory && (
              <Grid item md={4}>
                <PerfectScrollbar className=" ml-10 drop-shadow-sm bg-white px-7 py-8 shadow-lg h-screen top-0 sticky ">
                  <h4 className=" text-xl  text-c2121 font-semibold pb-4">
                    Trending Now
                  </h4>
                  <Box>
                    {QuestionAnswerCardData &&
                      QuestionAnswerCardData.map((item, i) => {
                        return (
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
                            size={"sm"}
                            handleDarkOverlay={handleDarkOverlay}
                            showShareOnFooter={true}
                          />
                        );
                      })}
                  </Box>
                </PerfectScrollbar>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default dumpKeep2;
