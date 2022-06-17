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

// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

function index({ ...allprops }) {
  const {item, height, width, size,number} = allprops;

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    //Runs only on the first render
  }, []);


  if(!_.isEmpty(item)){
    return (
      <>
        <Box className=" ">
          <Box className=" relative rounded-t-[4px]  " style={{
              height: `${height}px`
          }}>
            <Image
              className=" rounded-t-md"
              loader={ImageLoader}
              src={item.img}
              alt={"dark logo"}
              objectFit="cover"
              layout="fill"
            />
            <span className="item_number absolute top-2 left-6">
            <style jsx>{`
                .item_number{
                  -webkit-text-stroke: 1px #fff; 
                  font-family: 'cooper_blkoul_btblack' !important;
                  color: transparent;
                  font-size: 42px;
                }
              `}</style>
                P.{number+1}
            </span>
          </Box>
          <Box className=" flex bg-white items-center px-4 py-4 justify-between  drop-shadow-[0_2px_1px_rgba(0,0,0,0.10)]">
            <div className=" inline-flex flex-row items-center h-full justify-start">
              <Button className=" min-w-fit inline-flex mr-2">
                <Image
                  loader={ImageLoader}
                  src="images/poetry-play.png"
                  alt={"play icon"}
                  width={24}
                  height={26}
                />
              </Button>
              <div>
                <Link href={item.link}>
                  <a className=" text-lg font-medium text-c2121">
                      {item.title}
                  </a>
                </Link>
                <p className=" text-sm font-normal text-c6f6f">
                    {item.genre}
                </p>
              </div>
            </div>
            <div className=" h-full inline-flex items-center justify-start">
              <Image
                loader={ImageLoader}
                src="images/poetry_equalizer.png"
                alt={"honest elite equalizer"}
                width={152}
                height={31}
              />
            </div>
            <div className=" inline-flex items-center justify-end mr-2">
              <span className=" text-sm font-normal text-c2121 inline-flex ml-4">
                <AccessTimeIcon className=" text-lg inline-flex mr-1" />
                {item.duration}
              </span>
              <span className=" text-sm font-normal text-c2121 inline-flex ml-4">
                <AccessTimeIcon  className=" text-lg inline-flex mr-1"  />
                <span>
                    {item.views}
                </span>
                  views
              </span>
              <Button className=" text-lg text-c2121 min-w-fit p-0 inline-flex ml-4">
                <ShareIcon className="text-lg text-c2121" />
              </Button>
              <Button className=" text-lg text-c2121 min-w-fit p-0 inline-flex ml-4">
                <FavoriteIcon className=" text-lg text-c2121" />
              </Button>
            </div>
          </Box>
        </Box>
      </>
    );
  }else{
    return <h4>Loading..</h4>
  }
  
}

export default index;
