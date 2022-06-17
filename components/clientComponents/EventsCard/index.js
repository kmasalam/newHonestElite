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
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

function index({...allprops}) {
    const {type, item, width,height, number, avatarWidth, avatarHeight,size,roundedSize} = allprops

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };
    
      useEffect(() => {
        //Runs only on the first render
      }, []);

    return (
        <>
            <Box>
                <Box className={`relative ${type == 2 && ' rounded-t-md bg-white'}`} height={{
                     height: `${height}px`
                }}>
                    <Image
                    className={` ${type == 2 && ' rounded-t-md overflow-hidden'} `}
                    loader={ImageLoader}
                    src={item.img}
                    alt={item.title}
                    objectFit="cover"
                    layout="fill"
                    />
                    {
                        type == 1 && <Box className=" absolute bottom-4 w-full px-6">
                            <div className=" rubik text-white text-sm font-normal uppercase flex items-center justify-start pb-2 ">
                                <LocationOnOutlinedIcon className=" text-white text-lg inline-flex mr-1"/>
                                {item.location}
                            </div>
                            <Link  href={item.slug}>
                                <a className={`text-white rubik font-medium  capitalize ${size == 'sm' ? ' text-sm ' : ' text-lg '}`}>
                                    {item.title}
                                </a>
                            </Link>
                        </Box>
                    }
                    
                </Box>
                {
                    type !== 1 && <Box className={` px-4 py-4 drop-shadow-[1px_2px_2px_rgba(0,0,0,0.15)] bg-white rounded-b-md ${size == 'sm' ? 'size-sm' : 'size-md'} `} >
                        <style jsx global>{`
                            .size-sm{
                                min-height: 140px;
                            }
                            .size-md{
                                min-height: 163px;
                            }
                        `}</style>
                    {
                        type !== 1 && <Box className=" flex items-center justify-between ">
                            <span className={` text-c2121 inline-flex items-center justify-start ${size == 'sm' ? 'text-sm' : 'text-base'} `}>
                                <LocationOnOutlinedIcon className={`  text-c2121 ${size == 'sm' ? 'text-base' : 'text-xl'} `}/>
                                {item.location}
                            </span>
                            <Button className=" inline-flex bg-transparent">
                                <FavoriteBorderOutlinedIcon className={`text-c2121 ${size == 'sm' ? 'text-sm': 'text-lg'}`}/>
                            </Button>
                        </Box>
                    }
                    {
                        type !== 1 && <Link href={item.slug}>
                        <a className={` text-c2121 flex  font-medium py-2 ${size == 'sm' ? 'text-sm': 'text-lg'} `}>
                            {item.title}
                        </a>
                    </Link>
                    }
                    {
                        type !== 1 && <Box className=" flex items-center justify-between pt-1" >
                                <span className={`inline-flex  text-c6f6f rubik capitalize ${size == 'sm' ? 'text-12': 'text-sm'} `}>
                                    <Image
                                    className=" rounded-t-md mr-1"
                                    loader={ImageLoader}
                                    src={item.creatorAvatar}
                                    alt={item.creator}
                                    height={avatarHeight}
                                    width={avatarWidth}
                                    />
                                    {item.creator}
                                </span>
                                <span className={`inline-flex items-center justify-start text-sm text-c6f6f capitalize  ${size == 'sm' ? 'text-12': 'text-sm'} `}>
                                    <AccessTimeIcon className={` inline-flex mr-1 ${size == 'sm' ? 'text-sm' : 'text-base'} `}/>
                                    {item.date}
                                </span>
                                <span className={`inline-flex  text-c6f6f capitalize ${size == 'sm' ? 'text-12': 'text-sm'}`}>
                                    <RemoveRedEyeOutlinedIcon className=" inline-flex mr-1 text-base"/>
                                    {item.view}
                                </span>
                        </Box>
                    }

                </Box>
                }
            </Box>
        </>
    );
}

export default index;