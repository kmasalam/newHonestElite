import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
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
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// Next js
import Link from "next/link";
import Image from "next/image";
// data

const _ = require("lodash");

function index(props) {
    return (
        <Box 
        className=" flex items-center justify-around bg-white border text-lg font-medium border-primary shadow-md py-14 ">
            <Button className=" group hover:bg-transparent flex flex-col ">
                <div>
                    <ThumbUpOffAltIcon className=" text-4xl text-c2121 mr-1 group-hover:text-primary group-hover:bg-transparent"/>
                    <span className=" text-c2121 text-lg font-semibold capitalize group-hover:text-primary group-hover:bg-transparent">
                        keep
                    </span>
                </div>
                <div className=" text-sm font-normal text-c6f6f rubik inline-flex capitalize pt-[10px]">
                    1.2k voted 
                </div>
            </Button>
            <Button className=" group hover:bg-transparent flex flex-col">
                <div>
                    <ThumbDownOffAltIcon className=" text-4xl text-c2121 ml-1 group-hover:text-primary group-hover:bg-transparent"/>
                    <span className=" text-c2121 text-lg font-semibold capitalize group-hover:text-primary group-hover:bg-transparent">
                    Down
                    </span>
                </div>
                <div className=" text-sm font-normal text-c6f6f rubik inline-flex capitalize pt-[10px]">
                    1.2k voted 
                </div>
            </Button>
        </Box>
    );
}

export default index;