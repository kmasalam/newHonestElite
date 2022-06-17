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

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const _ = require("lodash");


import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';


function SingleAstrologyMetaBar({date,view,librry}) {
    return (
        <Box className=" flex items-center justify-between">
            <span className=" text-base text-c6f6f rubik capitalize inline-flex items-center justify-start ">
                <AccessTimeOutlinedIcon className=" inline-flex text-xl mr-1" />
                <span >
                    {date}
                </span>
            </span>
            <span className=" text-base text-c6f6f rubik capitalize inline-flex items-center justify-start ">
                <RemoveRedEyeOutlinedIcon className=" inline-flex text-xl mr-1"/>
                <span>
                {view}
                </span>
            </span>
            <span className=" text-base text-c6f6f rubik capitalize inline-flex items-center justify-start ">
                <FavoriteBorderOutlinedIcon className=" inline-flex text-xl mr-1"/>
                <span>
                    Library
                </span>
            </span>
            <span className=" text-base text-c6f6f rubik capitalize inline-flex items-center justify-start ">
                <TourOutlinedIcon className=" inline-flex text-xl mr-1"/>
                <span>
                    Report Abuse
                </span>
            </span>
            <span className=" text-base text-c6f6f rubik capitalize inline-flex items-center justify-start ">
                <ShareOutlinedIcon className=" inline-flex text-xl mr-1"/>
                <span>
                    Share
                </span>
            </span>
        </Box>
    );
}

export default SingleAstrologyMetaBar;