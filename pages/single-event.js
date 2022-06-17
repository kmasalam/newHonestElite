import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import CommentsCreationBox from "clientComponents/CommentsCreationBox";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { WrittingPoetryData } from "data/WrittingPoetryData";
import { SingleTubeVideoData } from "data/SingleTubeVideoData.js";
import EventsCard from "clientComponents/EventsCard";
import { eventsCategoriesData, eventsListData } from "data/EventData";

//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
//
import PersonalLinks from "clientComponents/PersonalLinks";
import Footer from "clientComponents/Footer";
import { useRouter } from "next/router";

function index(props) {
  const router = useRouter();

  const type = 2;

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [singleItem, setSingleItem] = useState(null);

  useEffect(() => {}, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`  z-10  h-10 w-10 inline-flex items-center justify-center  top-1/3 absolute cursor-pointer ${
          type == 2
            ? " bg-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.10)] rounded-sm -right-2/4 -translate-x-[2rem]   "
            : " bg-cd6d5 -right-28  "
        } `}
        onClick={onClick}
      >
        <Image
          loader={ImageLoader}
          src="images/next.svg"
          alt="next"
          width={20}
          height={20}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` -left-2/4 translate-x-[2rem] z-10  h-10 w-10 inline-flex items-center justify-center -scale-x-100 top-1/3 absolute cursor-pointer  ${
          type == 2
            ? " bg-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.10)] rounded-sm  "
            : " bg-cd6d5 "
        }`}
        onClick={onClick}
      >
        <Image
          loader={ImageLoader}
          src="images/next.svg"
          alt="prev"
          width={20}
          height={20}
        />
      </div>
    );
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className=" bg-cf9f9 overflow-hidden">
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
                  searchbarType={'gray_form_box'}
                  size={''}
                  spacing={''}
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
            activeItem={"written"}
            hasSortable={false}
            pageLink="/"
            bigText="Upcoming <br/> Events"
            hasCategory={false}
            isSearchPage={true}
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <div className=" border-t mt-8 pt-6">
          <Container className=" he_container">
            <Grid container spacing={2}>
              <Grid item md={1}>
                <Box className=" sticky top-10  ">
                  <List>
                    {eventsCategoriesData &&
                      eventsCategoriesData.map((item, i) => (
                        <ListItem disablePadding key={i} data-val={item.name}>
                          <ListItemButton className="pl-1 py-1 text-base">
                            <ListItemText
                              className=" text-base text-c6f6f rubik capitalize"
                              primary={item.name}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className=" bg-white drop-shadow-[1px_2px_1px_rgba(0,0,0,0.10)] pt-8 pl-6 pr-6">
                  <Box>
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img1.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img2.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img3.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img4.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img5.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                      <div>
                        <Image
                          loader={ImageLoader}
                          className=" rounded-sm "
                          src="images/events-img6.jpg"
                          alt="Picture of the author"
                          width={802}
                          height={480}
                        />
                      </div>
                    </Slider>

                    <Box className="w-6/12 pt-3 left-1/2  -translate-x-1/2 relative -ml-6 ">
                      <Slider
                        {...settings}
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img1.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img2.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img3.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img4.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img5.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                        <div className=" cursor-pointer">
                          <Image
                            loader={ImageLoader}
                            className=" rounded-md "
                            src="images/events-img6.jpg"
                            alt="Picture of the author"
                            width={124}
                            height={72}
                          />
                        </div>
                      </Slider>
                    </Box>
                  </Box>
                  <Box className=" pt-6">
                    <h4 className=" text-3xl text-c2121 font-medium rubik  py-3">
                      The Best Concerts Of All-time in the history of the World
                      2022
                    </h4>
                    <Box className=" pb-2 flex  flex-wrap ">
                      <Box className=" flex-[0_0_50%]">
                        <span className=" text-base uppercase text-c2121 rubik inline-flex items-center justify-start mr-3 ">
                          <LocationOnOutlinedIcon className=" text-lg inline-flex mr-1" />
                          USA
                        </span>
                        <span className=" text-base uppercase text-c2121 rubik inline-flex items-center justify-start ">
                          <AccessTimeIcon className=" text-lg inline-flex mr-1" />
                          09 Jan 2022
                        </span>
                      </Box>
                      <Box className=" flex-[0_0_50%]"></Box>
                    </Box>
                    <Box className="pt-2">
                      <h6 className=" text-lg font-medium rubik text-c2121 capitalize">
                        Event Details
                      </h6>
                      <p className=" text-c6f6f text-base capitalize font-normal py-3 ">
                        If you’re looking for laughs, Fanny Brice is the one to
                        deliver ‘em to ya — well, Fanny Brice via Kimberly Faye
                        Greenberg. The legendary comedian’s life was first
                        dramatized by Barbra Streisand in the hit Broadway
                        musical and film Funny Girl, and now you can see
                        Greenberg capture her hilarious spirit all over again
                        with this
                      </p>
                      <Link href={"/"}>
                        <a className=" capitalize text-c2121 font-medium text-lg ">
                          Read More
                        </a>
                      </Link>
                    </Box>
                    <Box className=" pt-6">
                      <Button className=" bg-primary px-6 min-w-fit py-3 text-base font-medium rubik text-white capitalize">
                        Join Event
                      </Button>
                      <Button
                        className=" border bg-transparent border-c6f6f text-c6f6f font-medium capitalize text-base rubik px-12 min-w-fit py-3 ml-4"
                        style={{
                          border: `1px solid #6f6f6f`,
                        }}
                      >
                        Share
                      </Button>
                    </Box>
                    <Box className=" flex items-center justify-start pt-10 pb-6">
                      <Image
                        loader={ImageLoader}
                        className=" rounded-full inline-flex "
                        src="images/comment_avater.png"
                        alt="Picture of the author"
                        width={60}
                        height={60}
                      />
                      <div className=" flex ml-3 flex-col">
                        <h5 className=" text-lg text-c2121 capitalize font-medium flex">
                          Organizer Name
                        </h5>
                        <div className=" text-base uppercase inline-flex items-center justify-start text-c6f6f">
                          <LocationOnOutlinedIcon className=" text-c6f6f text-lg inline-flex mr-1" />
                          USA
                        </div>
                      </div>
                    </Box>
                    <Box className=" bg-primary/[.33] px-8 py-8 -ml-6 -mr-6">
                      <h5 className=" text-base text-c2121 capitalize rubik pb-4">
                        More Events from this organiser
                      </h5>
                      <Grid container spacing={3}>
                        {eventsListData &&
                          [...eventsListData].splice(0, 4).map((item, i) => (
                            <Grid item md={6} key={i}>
                              <Box className=" flex items-center justify-start">
                                <div
                                  className=" inline-flex mr-3 relative flex-0"
                                  style={{
                                    height: `150px`,
                                    width: `148px`,
                                  }}
                                >
                                  <Image
                                    loader={ImageLoader}
                                    className=" rounded-md  "
                                    src={item.img}
                                    alt="Picture of the author"
                                    objectFit="cover"
                                    layout="fill"
                                  />
                                </div>
                                <div className="flex-1">
                                  <Link href={"/"}>
                                    <a className=" text-lg font-medium capitalize text-c2121 ">
                                      {item.title}
                                    </a>
                                  </Link>
                                  <div className=" flex items-center justify-between pt-3">
                                    <span className=" text-12 text-c2121 capitalize inline-flex items-center justify-start ">
                                      <AccessTimeIcon className=" text-sm inline-flex mr-1" />
                                      {item.date}
                                    </span>
                                    <span className=" text-12 text-c2121 capitalize inline-flex items-center justify-end ">
                                      <RemoveRedEyeOutlinedIcon className=" text-sm mr-1" />
                                      {item.view}
                                    </span>
                                  </div>
                                </div>
                              </Box>
                            </Grid>
                          ))}
                      </Grid>
                    </Box>
                    <Box>
                      <CommentsCreationBox size="md" hasBorderBottom={false} />
                    </Box>
                    <Box>
                      <div className=" flex items-center justify-start py-3 border-b border-t">
                        <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                          <FormatListBulletedIcon className=" text-white" />
                        </div>
                        <span>Feedbacks</span>
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
                        hasGallery={false}
                        hasVideo={false}
                        hasAudio={false}
                        hasBorderBottom={false}
                        size={"md"}
                      />
                    </Box>
                    <Box className=" text-center pt-6 pb-14">
                        <Button>
                            <AddIcon className=" text-c6f6f text-5xl" />
                        </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={5}>
                  <PerfectScrollbar className=" pl-8 pt-3 relative top-0 sticky h-screen">
                      <Box>
                          <h5 className=" text-lg font-medium text-c2121 capitalize pb-4 ">
                                Related Events
                          </h5>
                      </Box>
                      <Box>
                      <Grid container spacing={3}>
                                {eventsListData &&
                                [...eventsListData].splice(0,10).map((item, i) => (
                                    <Grid item md={6} key={i} >
                                      <EventsCard
                                          roundedSize={false}
                                          type={2}
                                          avatarWidth={24}
                                          avatarHeight={24}
                                          item={item}
                                          height={114}
                                          width={252}
                                          number={i}
                                          size={"sm"}
                                      />
                                    </Grid>
                                ))}
                                <Box className=" text-center pt-6 pb-14 w-full">
                                    <Button className=" inline-flex">
                                        <AddIcon className=" text-c6f6f text-5xl " />
                                    </Button>
                                </Box>
                            </Grid>
                      </Box>
                  </PerfectScrollbar>
              </Grid>
            </Grid>
            {/*  */}

            {/*  */}
          </Container>

          <PersonalLinks />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
