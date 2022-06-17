import {useState, useEffect} from "react";
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
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import SearchBar from 'clientComponents/SearchBar'
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import {RandomGalleryCategoryData} from 'data/RandomGalleryCategoryData'
import DumpKeepCard from 'clientComponents/DumpKeepCard'
import NewsTicker from 'clientComponents/NewsTicker'
import {DumpKeepData} from "data/DumpKeepData"
import {NewsTickerData} from 'data/NewsTickerData'


function dumpKeep(props) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };
      
    const [viewableItem,setViewableItem] = useState(16)
    return (
        <div className=' bg-cf9f9'>
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
                activeItem={''}
                hasSorting={true}
                hasCategory={true}
                pageLink="/"
                bigText="Dump or <br/> Keep him/her"
                categoryList={RandomGalleryCategoryData}
                />
            </div>
            
            <Container className=" he_container pb-24 pt-10">
                <Grid container spacing={3}>

                {
                    DumpKeepData && DumpKeepData.map((item,i)=>{
                        if(i <= (viewableItem-1)){
                            return(
                                <Grid item md={3} key={i}>
                                    <DumpKeepCard
                                     showCategory={false}
                                     showAvatar={true}
                                    item={item}
                                    number={i+1}
                                    width={415}
                                    height={242}
                                    />
                                </Grid>
                            )
                        }
                    })
                }

                </Grid>
            </Container>
            
        </div>
    );
}

export default dumpKeep;