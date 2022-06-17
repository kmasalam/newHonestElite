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

function poetryHome(props) {
  const itemToLoad = 4;
  const [popularVideoItem, setPopularvideoItem] = useState(8);

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    //Runs only on the first render
  }, []);


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
            pageLink="/"
            activeItem={'video'}
            bigText="Poetry"
            hasCategory={true}
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Container className=" he_container mb-6 mt-16">
          <Grid container spacing={3}>
            {PoetryData &&
              [...PoetryData].splice(0, 12).map((item, i) => (
                <Grid item md={2} key={item._id}>
                  <PoetryCard
                    size={"sm"}
                    item={item}
                    width={270}
                    height={146}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
        <Container className=" he_container">
          <Grid container>
            <Grid item>
              <h5 className=" font-medium text-c2121 text-lg text-left py-6">
                Popular Video & Audios for you
              </h5>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {PoetryData &&
              [...PoetryData].splice(0, popularVideoItem).map((item, i) => (
                <Grid item md={3} key={item._id}>
                  <PoetryCard
                    size={"md"}
                    item={item}
                    width={415}
                    height={200}
                  />
                </Grid>
              ))}
          </Grid>
          {PoetryData && PoetryData.length <= popularVideoItem ? (
            <Grid item md={12} className=" text-center py-10 mb-4">
              <h4 className=" font-medium text-c2121 text-lg">
                No More Item To Load..
              </h4>
            </Grid>
          ) : (
            <Grid container>
              <Grid item md={12} className=" text-center py-10 mb-4">
                <Button
                  onClick={(e) =>
                    setPopularvideoItem(popularVideoItem + itemToLoad)
                  }
                >
                  <AddIcon className=" text-c6f6f text-6xl" />
                </Button>
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </>
  );
}

export default poetryHome;
