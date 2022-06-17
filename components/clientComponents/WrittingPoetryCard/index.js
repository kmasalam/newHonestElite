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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

function index({...allprops}) {

    const {item, height, width, size,number} = allprops;

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <>
           <Box className=" bg-white transition-all duration-500 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] rounded-md hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
                <Box className=" relative" style={{
                    height: `${height}px`
                }}>
                    <Image
                        className=" rounded-t-md overflow-hidden"
                        loader={ImageLoader}
                        src={item.img}
                        alt={"dark logo"}
                        objectFit="cover"
                        layout="fill"
                    />
                    <span className="item_number absolute top-2 left-6 opacity-50">
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
                    <Link href={item.link}>
                        <a className=" text-white rubik font-bold text-xl w-full text-center bottom-6 absolute">
                            {item.title}
                        </a>
                    </Link>
                </Box>
                <Box className=" px-6 pt-5 pb-6">
                    <p className=" font-medium text-lg text-c2121 pr-6">
                        {item.content}
                    </p>
                    <Box className=" flex items-center justify-between pt-4">
                        <Link href={item.link}>
                            <a className=" text-sm font-normal text-primary uppercase rubik">
                                Read More
                            </a>
                        </Link>
                            <span className=" font-medium">
                            By
                            <span className=" italic font-normal text-sm uppercase">
                                {item.author}
                            </span>
                        </span>
                    </Box>
                    <Box className=" flex items-center justify-start pt-4">
                        <span className=" text-sm font-light rubik text-c2121 inline-flex mr-6">
                            <AccessTimeIcon className=" text-lg inline-flex mr-1"/>
                            {item.date}
                        </span>
                        <span className=" text-sm font-light rubik text-c2121 inline-flex">
                            <RemoveRedEyeOutlinedIcon className=" text-lg inline-flex mr-1"/>
                            {item.view} views
                        </span>
                    </Box>
                </Box>
            </Box> 
        </>
    );
}

export default index;