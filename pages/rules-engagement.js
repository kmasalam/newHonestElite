import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import HomeNavigation from "clientComponents/HomeNavigation";
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
import useWindowSize from 'hooks/useWindowSize';
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");

//
import { Parallax } from "react-parallax";

function index(props) {
    const heWindow = useWindowSize();
  const image1 =
    "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80";
  const image2 =
    "https://images.unsplash.com/photo-1640604542825-8d934dc2e5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80";
  const image3 =
    "https://images.unsplash.com/photo-1640562051318-b849e5290551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  const image4 =
    "https://images.unsplash.com/photo-1640562329119-efcaa3dcf18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  const image5 =
    "https://images.unsplash.com/photo-1639869913867-749e9cda911f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80";
  const image6 =
    "https://images.unsplash.com/photo-1640601328369-85d76d7a7e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  const images = {
    width: "100%",
  };

  const customHeight = `${heWindow.height+30}px`;
  return (
    <>
    <HomeNavigation navigationType={1} />
      <Parallax bgImage={image1} style={images} strength={300}>
        <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={3}>
                <Box className=" mt-[237px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                    Rules of Engagement
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={7}></Grid>
              <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[80px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={image2} strength={300}>
        <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={3}>
                <Box className=" mt-[110px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                    Playground
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[280px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
              <Grid item md={7}></Grid>
            </Grid>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={image3} strength={300}>
      <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Box className=" mt-[110px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                  Modeling Gallery
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              
              <Grid item md={7}></Grid>
              <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[280px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={image4} strength={300}>
      <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Box className=" mt-[110px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                  Shopping
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
            <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[280px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
              <Grid item md={7}></Grid>
              
            </Grid>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={image5} strength={300}>
      <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={5}>
                <Box className=" mt-[110px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                  Refrain from <br />
Prostitution T.V videos
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              
              <Grid item md={7}></Grid>
              <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[280px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={image6} strength={300}>
      <div className="  " style={{
            height: `${customHeight}`
        }}>
          <Container className="he_container">
            <Grid container spacing={3}>
              <Grid item md={5}>
                <Box className=" mt-[110px]">
                  <h2 className=" rubik text-white font-regular text-[45px] ">
                  Refrain from
                  <br />
Prostitution T.V videos
                  </h2>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
            <Grid item md={5}>
                <Box className=" bg-black/[.30] p-8  mt-[300px]">
                  <p className=" text-white text-xl leading-8 rubik">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Box>
              </Grid>
              <Grid item md={7}></Grid>
              
            </Grid>
          </Container>
        </div>
      </Parallax>
    </>
  );
}

export default index;
