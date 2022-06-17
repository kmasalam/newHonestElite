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
// Next js
import Link from "next/link";
import Image from "next/image";
// data

const _ = require("lodash");

function index({item,width,height}) {

    console.log('item',item)

    const ImageLoader = ({ src, width, quality }) => {
      return `/${src}?w=${width}&q=${quality || 75}`;
    };
  
  
    if(item){
        return (
            <Box className=" bg-ce0e0 p-2 border-2 border-white rounded-md group transition-all duration-300 hover:bg-primary hover:scale-105	transform: scale(1.05); ">
              <Box className=" text-center pt-[40px] pb-[40px]">
                <Image
                className=" "
                loader={ImageLoader}
                src={item.icon}
                objectFit="cover"
                alt={item?.text}
                width={width}
                height={height}
              />
              </Box>
              <Box className=" bg-white py-6 px-4 drop-shadow-[0_3px_1px_rgba(0,0,0,0.20)] transition-all duration-300 rounded-md group-hover:scale-95 ">
                <h4 className=" font-semibold text-c2121 capitalize rubik text-20 mb-[10px] ">{item.title}</h4>
                <p className=" text-lg text-c6f6f capitalize font-normal rubik">
                  {item.date}
                </p>
              </Box>
            </Box>
          )
    }else{
        return <h4>Loading..</h4>
    }
}

export default index;
