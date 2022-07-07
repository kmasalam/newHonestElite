import {useState, useEffect} from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Avatar from '@mui/material/Avatar';
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
const _ = require("lodash");

function DumpKeepAuthorCard({...allprops}) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    const {item,avatarWidth,avatarHeight} = allprops;

    if(!_.isEmpty(item)){
        return (
            <Box className=" bg-white px-7 py-6 drop-shadow-sm mb-6 shadow-md">
               
                    <div>
                        {/* <Image
                        loader={ImageLoader}
                        className=" rounded-full"
                        src={item.qAvatar}
                        alt="avatar image"
                        width={avatarWidth}
                        height={avatarHeight}
                        /> */}
                         <Avatar alt="Remy Sharp" src={item.qAvatar} className=" drop-shadow-sm shadow-sm rounded-full" />
                    </div>
                    <h5 className="text-c2121 text-lg font-medium mt-3 mb-2">
                        {item.aAuthor}
                        </h5>
                    <p className="text-primary  text-base font-light capitalize">
                        {item.category}
                        </p>
                    <p className="text-c2121 text-base font-medium mt-2 leading-7">
                        {item.qTitle}
                        <Link href={item.qLink}>
                            <a className=" uppercase text-base text-primary ">
                                Read More
                            </a>
                        </Link>
                        </p>
           
            </Box>
        );
    }else{
        return <h4>loading..</h4>
    }
        
   
    

    
}

export default DumpKeepAuthorCard;