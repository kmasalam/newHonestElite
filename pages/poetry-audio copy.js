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

function poetryHome(props) {
  const itemToLoad = 2;
  const [poetryItem, setPoetryItem] = useState(8);


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
            bigText="Poetry"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        <div>
            <Container className=" he_container">
              <h5 className=" font-medium text-lg text-c2121  uppercase pt-6 pb-6 ">
                RECOMENDED FOR YOU
              </h5>
            </Container>
        </div>
        <div>
            <Container className=" he_container">
                <Grid container spacing={8}>
                  {
                    PoetryAudioData && [...PoetryAudioData].splice(0,poetryItem).map((item,i)=>{
                        return(
                          <Grid 
                            item 
                            md={6} 
                            key={i}>
                              <PoetryAudioCard
                              item={item}
                              height={260}
                              width={830}
                              size={'md'}
                              number={i}  
                              />
                          </Grid>
                        )
                    })
                  }
                    
                </Grid>
                {PoetryAudioData && PoetryAudioData.length <= poetryItem ? (
            <Grid item md={12} className=" text-center py-10 mb-4">
              <h4 className=" font-medium text-c2121 text-lg">
                No More Item To Load..
              </h4>
            </Grid>
          ):(
            <Grid container spacing={2}>
                    <Grid item md={12} >
                      <Box className=" text-center pt-8 pb-6 text-center">
                        <Button onClick={(e)=>setPoetryItem(poetryItem+itemToLoad)}>
                          <AddIcon className=" text-c6f6f text-4xl" />
                        </Button>
                      </Box>
                    </Grid>
                </Grid>
          )
          }
                
            </Container>
        </div>
        
      </div>
    </>
  );
}

export default poetryHome;
