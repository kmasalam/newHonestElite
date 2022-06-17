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
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require('lodash');



function index({...allprops}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }



    const {width ,height ,isSticky,authorImg} = allprops
    return (
        <>
            <Box className={` poetry_author_card ${isSticky && 'sticky top-0'} `}>
                <div className=" rounded-full">
                    <Image
                    className=" rounded-full"
                    loader={ImageLoader}
                    src={`${authorImg ? authorImg : 'images/poet_author1.jpg'}`}
                    alt="poet author"
                    width={width}
                    height={height}
                    />
                </div>
                <div className="poetry_author_card__content">
                    <h5 className=" text-lg text-c2121 font-medium mb-3">
                        Kathryn Murphy
                    </h5>
                    <p className=" text-base text-c6f6f mb-3 ">
                        235K  Subscriber
                    </p>
                    <p className=" text-base text-c6f6f mb-2  w-[200px] ">
                    The home soup and teritories on the bold hash omlet next to the building across
    paying rent and honest money.
                    </p>
                    <Link href="/">
                        <a className=" text-base font-medium text-c2121 flex mb-10">
                            Read More
                        </a>
                    </Link>
                    <Button 
                    variant="outlined" 
                    className=" font-medium capitalize transition-all duration-500 text-c2121 text-lg  rounded-sm border border-primary h-12 w-48 hover:bg-primary hover:text-white" style={{
                        border: `1px solid #ED028C`
                    }}>
                        Subscribe
                    </Button>
                    <Button variant="outlined" 
                    className=" font-medium mt-4 capitalize text-white  text-lg bg-primary rounded-sm border border-primary h-12 w-48 ">
                        Promotional Tip
                    </Button>
                </div>

            </Box>
        </>
    );
}

export default index;