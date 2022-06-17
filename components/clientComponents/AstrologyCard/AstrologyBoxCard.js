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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { height } from "@mui/system";
const _ = require("lodash");

function AstrologyBoxCard({item,height,width}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };


    return (
        <Box className=" rounded-md drop-shadow-md mb-[25px] bg-white">
            <Box>
                <Image
                className=" rounded-md drop-shadow-md bg-white "
                loader={ImageLoader}
                src={item.img}
                objectFit="cover"
                alt={"astrology image"}
                width={width}
                height={height}
            />
            </Box>
            <Box className=" px-6 py-5 ">
                <p className=" text-20  font-normal capitalize text-c2121 rubik ">
                    {item.title}
                </p>
            </Box>
        </Box>
    );
}

export default AstrologyBoxCard;