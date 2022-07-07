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
import AccessTimeIcon from '@mui/icons-material/AccessTime';


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
import PoetryAudioCard from 'clientComponents/PoetryAudioCard'
import {PoetryAudioData} from 'data/PoetryAudioData'
import SimilarAudioCard from "clientComponents/SimilarAudioCard";


function PoetryAudio(props) {
  const itemToLoad = 2;
  const [poetryItem, setPoetryItem] = useState(8);


  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    //Runs only on the first render
  }, []);

  const handleLoadMore = () =>{
    
  }


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
            pageLink="/"
            activeItem={'audio'}
            hasCategory={true}
            hasSearchBar={true}
            bigText="Poetry"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <Box className=" pt-[50px] pb-[150px]">
            <Container className=" he_container">
                <Grid 
                container  
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3
                }>
                  <Grid item sm={6}>
                      <Box className=" max-w-[95%]">
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
                  </Grid>
                  <Grid item sm={6} className=" flex items-center justify-end">
                      <Box className="  max-w-[95%] w-full ">
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
                  </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Box className=" text-center pt-3">
                        <Button variant="text" className=" min-w-fit inline-flex text-center" onClick={(e)=>handleLoadMore(e)}>
                          <AddIcon className=" text-primary text-6xl"/>
                      </Button>
                    </Box>
                </Grid>
            </Container>
        </Box>
        
      </div>
    </>
  );
}

export default PoetryAudio;
