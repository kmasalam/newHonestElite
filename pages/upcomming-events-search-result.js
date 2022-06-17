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
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { WrittingPoetryData } from "data/WrittingPoetryData";
import EventsCard from "clientComponents/EventsCard";
import { eventsCategoriesData, eventsListData } from "data/EventData";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

//
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
//
import PersonalLinks from "clientComponents/PersonalLinks";
import Footer from "clientComponents/Footer";

// new sdf

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ED028C",
    fontFamily: "Rubik",
  },
  "& .MuiInput-underline:after": {
    border: "none",
    fontFamily: "Rubik",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&:hover fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
  },
});

function index(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const [sportsItem, setSportsItem] = useState(8);
  const [sportsEventList, setSportsEventList] = useState(null);
  const [musicEventList, setMusicEventList] = useState(null);
  const [lodableSportsItem, setLodableSportsItem] = useState(8);
  const [lodableMusicItem, setLodableMusicItem] = useState(8);

  useEffect(() => {
    getSportsData();
    getMusicData();
  }, []);

  const getSportsData = () => {
    let bulkItem = [];
    eventsListData &&
      eventsListData.map((item) => {
        if (_.includes(item.category, "sports")) {
          bulkItem.push(item);
          setSportsEventList(bulkItem);
        }
      });
  };
  const getMusicData = () => {
    let bulkItem = [];
    eventsListData &&
      eventsListData.map((item) => {
        if (_.includes(item.category, "music")) {
          bulkItem.push(item);
          setMusicEventList(bulkItem);
        }
      });
  };

  return (
    <>
      <div className=" bg-cf9f9 ">
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
                    <Box className=" top-0 sticky  ">
                      <List  >
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
              <Grid item md={11}>
                <Box>
                  <Grid container spacing={2}>
                    {eventsListData &&
                      eventsListData.map((item, i) => (
                        <Grid item md={3} key={i}>
                          <EventsCard
                            roundedSize={false}
                            type={2}
                            avatarWidth={24}
                            avatarHeight={24}
                            item={item}
                            height={192}
                            width={354}
                            number={i}
                            size={"md"}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            {/*  */}
            <Box className=" text-center pt-8 pb-0">
                <Button>
                <AddIcon className=" text-c6f6f text-5xl" />
                </Button>
            </Box>
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
