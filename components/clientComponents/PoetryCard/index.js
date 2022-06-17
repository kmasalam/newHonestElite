import {useState, useEffect} from "react";
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// Next js
import Link from "next/link";
import Image from "next/image";
// data

const _ = require("lodash");
//

function index({...allprops}) {

    const {item, width, height,size} = allprops;
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <>
            <Box className={` poetry_card transition-all duration-100 drop-shadow-[0px_2px_1px_rgba(0,0,0,0.25)] bg-white ${size == 'sm' ? 'rounded-[4px]' : size == 'md' ? ' rounded-[4px] ' : ' rounded-[4px]  '} hover:drop-shadow-[0px_6px_1px_rgba(0,0,0,0.25)]`}>
                <Box className=" relative group  " style={{
                    height: `${height}px`
                }}>
                    <Image
                    className=" transition-all duration-400 rounded-t-[4px] group-hover:scale-105"
                    loader={ImageLoader}
                    src={item.ptImg}
                    alt="Picture of the author"
                    objectFit="cover"
                    layout="fill"
                    />
                    <span className="play_icon_box absolute text-12 left-3 bottom-3 text-white bg-black/70 rounded-sm px-1">
                        <PlayArrowOutlinedIcon className=" text-white"/>
                        {item.duration}
                    </span>
                </Box>
                <Box className=" poetry_card__content px-3 py-3">
                    <Link href={item?.link}>
                        <a 
                        className={` font-medium transition-all duration-300 text-c2121 hover:text-primary  flex mb-2 ${size == 'sm' ? ' text-sm leading-6 ' : size == 'md' ? ' leading-6 text-base ' : size == 'xs' ? 'text-12 leading-5' : 'text-sm'} `}>
                            {item.title}
                        </a>
                    </Link>

                    <div className="poetry_card__content__footer">
                        <ul className=" flex items-center justify-start">
                            <li className=" mr-5 text-12 text-c6f6f inline-flex items-center justify-start ">
                                <InboxIcon className=" text-sm mr-1" />
                                {item.views}
                            </li>
                            <li className=" text-12 text-c6f6f inline-flex items-center justify-start">
                                <AccessTimeIcon className=" text-sm mr-1" />
                                {item.creationTime}
                            </li>
                        </ul>
                        
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default index;