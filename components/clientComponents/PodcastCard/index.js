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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// Next js
import Link from "next/link";
import Image from "next/image";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
const _ = require("lodash");

function index({item,size,type,height,width,imgHeight,id,handleClick}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };
    
      useEffect(() => {
        //Runs only on the first render
      }, []);


    if(!_.isEmpty(item) && type == 1){
        return (
            <Box className=" relative single_podcast_card drop-shadow-[1px_2px_2px_rgba(0,0,0,0.15)] bg-white rounded-md"  aria-describedby={id} onClick={handleClick}  >
                    <style jsx global>{`
                        .single_podcast_card.active{
                            z-index: 999;
                            box-shadow: 0px 27px 21px rgb(0 0 0 / 10%);
                        }
                        .single_podcast_card.active::after{
                            content: "";
                            position: absolute;
                            border-top: 25px solid #DDDDDD;
                            border-left: 15px solid transparent;
                            border-right: 15px solid transparent;
                            left: 50%;
                            width: 30px;
                            transform: translateX(-50%);
                            z-index: 9;
                            bottom: -48px;

                        }
                    `}</style>
                <Box className=" relative " style={{
                    height: `${imgHeight}px`
                }}>
                    <Image
                    className=" rounded-t-md"
                    loader={ImageLoader}
                    src={item.img}
                    alt={"dark logo"}
                    objectFit="cover"
                    layout="fill"
                    />
                </Box>
                <Box className=" px-4 py-4">
                    <Box className=" flex items-start justify-between">
                        <h4 className=" text-lg font-medium text-c2121 capitalize">
                        {item.title}
                        </h4>
                        <Button className=" min-w-fit bg-transparent inline-flex" >
                            <InfoOutlinedIcon className=" text-lg text-c6f6f"/>
                        </Button>
                    </Box>
                    <Box className=" flex items-center justify-between pt-2">
                        <span className=" text-c6f6f capitalize rubik text-12">
                            <RemoveRedEyeOutlined className=" text-sm text-c6f6f inline-flex mr-1"/>
                            {item.views}
                        </span>
                        <span className=" text-c6f6f capitalize rubik text-12">
                            <AccessTimeIcon className=" text-sm text-c6f6f inline-flex mr-1"/>
                            {item.time}
                        </span>
                        <Button className=" min-w-fit text-c6f6f capitalize rubik text-12 bg-transparent">
                            <ShareOutlinedIcon className=" text-sm text-c6f6f inline-flex mr-1"/>
                            Share
                        </Button>
                    </Box>
                </Box>
            </Box>
        );
    }
    return <h4>Loading..</h4>
}

export default index;