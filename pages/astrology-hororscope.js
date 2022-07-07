import { useState, useEffect } from "react";
import Masonry from 'react-masonry-css'

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
import Head from 'next/head'
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
const pageTitle = "Astrology & Hororscope";
//
import SearchBar from "clientComponents/SearchBar";
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import AstrologyCard from "clientComponents/AstrologyCard";
import AstrologyMiniCard from "clientComponents/AstrologyCard/AstrologyMiniCard";
import AstrologyMasonaryCard from "clientComponents/AstrologyCard/AstrologyMasonaryCard";

import { HororscopeCategory, astrologyData } from "data/HororscopeData";


function AstrologyHororscope(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  const masonryOptions = {
    transitionDuration: 5000,
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
            <Grid
              item
              md={6}
              className=" flex items-center justify-center pt-3"
            >
              {/*  */}
              <Box className=" w-[46.80rem] mr-[58px] mt-[-6px]">
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
          activeItem={""}
          hasSorting={false}
          hasCategory={true}
          pageLink="/"
          bigText={pageTitle}
          categoryList={RandomGalleryCategoryData}
        />
      </div>
      <Container className="he_container pt-[110px] ">
        <Grid container>
          <Grid item md={9}>
            <Box className=" pr-14">
              <h4 className="  rubik font-normal text-c2121 capitalize text-24 mb-[40px] ">
                Daily Horoscope : 1/29/2022
              </h4>
              <Grid container spacing={4}>
                {HororscopeCategory &&
                  HororscopeCategory.map((item, i) => (
                    <Grid item md={3} key={i}>
                      <AstrologyCard item={item} width={136} height={136} />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <h4 className=" text-24 capitalize text-c2121 rubik pb-[25px] ">
              Trending Now
              </h4>
            </Box>
            <Box className="pt-[20px]">
                  {astrologyData &&
                [...astrologyData].splice(0, 5).map((item, i) => (
                <Box className="mb-[42px]">
                  <AstrologyMiniCard item={item} width={190} height={180} bgColor={'bg-ce0e0'} />
                </Box>
            ))}
              </Box>
          </Grid>
        </Grid>
      </Container>
      <Container className="he_container">
        <Box className=" bg-ce0e0 pt-[100px] pb-[100px] px-[100px] mt-[60px] rounded-md mb-[58px]">
          <Grid container spacing={4}>
            {astrologyData &&
              [...astrologyData].splice(0, 3).map((item, i) => (
                <Grid item md={4}>
                  <AstrologyMiniCard item={item} width={190} height={180} bgColor={`bg-ce0e0`} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
      <Container className="he_container">
            <Grid container spacing={4}>
                <Grid item md={8}>
                  {
                    astrologyData && [...astrologyData].splice(5,1).map((item,i)=>(
                      <Box className="pr-[30px]">
                        <Box>
                              <Image
                              className=" rounded-md drop-shadow-md bg-white "
                              loader={ImageLoader}
                              src={item.img}
                              objectFit="cover"
                              alt={'astrology image'}
                              width={1130}
                              height={700}
                            />
                        </Box>
                        <Box className=" rounded-md drop-shadow-md -top-[100px] bg-white w-[90%] left-[50%] relative  -translate-x-[50%] px-[130px] py-[30px] text-center  " >
                            <Link href={'/astrology-horoscope-single'}>
                              <a className=" rubik text-c2121 text-24 font-normal hover:text-primary ">
                              What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                              </a>
                            </Link>
                        </Box>
                    </Box>
                    ))
                  }
                    
                </Grid>
                <Grid item md={4}>
                    <Box className="pt-[20px]">
                        {astrologyData &&
                      [...astrologyData].splice(0, 3).map((item, i) => (
                      <Box className="mb-[42px]">
                        <AstrologyMiniCard item={item} width={190} height={180} bgColor={`bg-ce0e0`} />
                      </Box>
                  ))}
                    </Box>
                </Grid>
            </Grid>
      </Container>
      <Container className="he_container -mt-[40px]">
            {
              <Masonry breakpointCols={4} className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {
                astrologyData && [...astrologyData].splice(0,8).map((item,i)=>{
                  return(
                    <AstrologyMasonaryCard
                    key={i}
                    item={item}
                    itemIndex={i}
                    />
                  )
                  
                })
              }
            </Masonry>
            }
      </Container>
      <Container className="he_container">
        <Box className=" bg-white pt-[100px] pb-[100px] px-[100px] mt-[25px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-md">
          <Grid container spacing={4}>
            {astrologyData &&
              [...astrologyData].splice(0, 3).map((item, i) => (
                <Grid item md={4}>
                  <AstrologyMiniCard item={item} width={190} height={180} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
      </main>
    </>
  );
}

export default AstrologyHororscope;
