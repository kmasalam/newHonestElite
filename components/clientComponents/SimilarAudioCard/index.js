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
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

function index({...allprops}) {
    const {item,height,width,number,type} = allprops
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    if(!_.isEmpty(item) && type == 2){
        return(
            <Box className=" bg-white transition-all duration-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)] rounded-md  hover:drop-shadow-[2px_2px_10px_rgba(0,0,0,0.15)]" >
                <Box className=" relative rounded-t-md overflow-hidden " style={{
                    height: `${height}px`
                }}>
                    <Image

                        loader={ImageLoader}
                        src={item.img}
                        alt={"dark logo"}
                        layout="fill"
                        objectFit="cover"
                    />
                    <span className=" item_number absolute top-3 left-3 opacity-50">
                    <style jsx>{`
                            .item_number{
                            -webkit-text-stroke: .5px #fff; 
                            font-family: 'cooper_blkoul_btblack' !important;
                            color: transparent;
                            font-size: 16px;
                            }
                        `}</style>
                        P.{number+1}
                    </span>
                </Box>
                <Box className=" flex flex-row items-center justify-between px-3 py-4 ">
                    <Box className=" inline-flex flex-col items-start justify-start">
                        <Link href={item.link}>
                            <a className=" transition-all duration-300 text-c2121 text-sm font-medium rubik hover:text-primary">
                                {item.title}
                            </a>
                        </Link>
                        <h6 className=" text-12 text-c2121 font-medium rubik pt-1">
                            By 
                            <Link href="/">
                                <a className=" capitalize font-light text-12 inline-flex pl-1">
                                    {item.author}
                                </a>
                            </Link>
                        </h6>
                    </Box>
                    <p className=" text-sm text-c2121 rubik font-light">
                        {item.duration}
                    </p>
                </Box>
            </Box>
        )
    }

    return (
        <>
            <Box 
            className="flex items-center transition-all duration-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.20)] mb-8 bg-white rounded-md  px-3 py-4 hover:drop-shadow-[2px_2px_10px_rgba(0,0,0,0.15)] ">
                <Box className=" relative inline-flex mr-6" >
                    <Image
                        loader={ImageLoader}
                        src={item.albumArt}
                        alt={"dark logo"}
                        height={height}
                        width={width}
                    />
                    <span className=" item_number absolute top-3 left-3 opacity-50">
                    <style jsx>{`
                            .item_number{
                            -webkit-text-stroke: .5px #fff; 
                            font-family: 'cooper_blkoul_btblack' !important;
                            color: transparent;
                            font-size: 24px;
                            }
                        `}</style>
                        P.{number+1}
                    </span>
                </Box>
                <Box className=" flex flex-row items-center justify-between flex-1">
                    <div>
                            <Link href={item.link}>
                                <a className=" text-xl text-c2121 font-medium rubik">
                                    {item.title}
                                </a>
                            </Link>
                            <div className=" flex items-center justify-between pt-2">
                                <Link href={item.authorLink}>
                                    <a  className=" text-sm text-c2121 font-light inline-flex ">
                                    {item.author}
                                    </a>
                                </Link>
                                <p className=" text-sm text-c2121 font-light inline-flex">
                                    <RemoveRedEyeOutlinedIcon className=" text-lg text-c2121 inline-flex mr-1"/>
                                    {item.views} views
                                </p>
                            </div>
                        </div> 
                        <div>
                            <Image
                                loader={ImageLoader}
                                src="images/poetry_equalizer.png"
                                alt={"dark logo"}
                                width={122}
                                height={24}
                            />
                        </div>
                        <div>
                            <span className="  text-sm font-light text-c2121 inline-flex ">
                            {item.duration}
                            </span>
                            <Button className=" min-w-fit inline-flex ml-3 ">
                                <ShareIcon className=" text-c2121 text-lg"/>
                            </Button>
                            <Button className=" min-w-fit inline-flex ml-3 mr-2 ">
                                <FavoriteIcon className=" text-c2121 text-lg"/>
                            </Button>
                        </div>
                     
                </Box>
            </Box>
        </>
    );
}

export default index;