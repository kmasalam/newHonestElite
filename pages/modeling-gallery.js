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
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import SearchBar from 'clientComponents/SearchBar'
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import {RandomGalleryCategoryData} from 'data/RandomGalleryCategoryData'
import DumpKeepCard from 'clientComponents/DumpKeepCard'
import NewsTicker from 'clientComponents/NewsTicker'
import {DumpKeepData} from "data/DumpKeepData"
import {NewsTickerData} from 'data/NewsTickerData'

import {ModelingGalleryData} from 'data/ModelingGalleryData'


function index(props) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    console.log('ModelingGalleryData',ModelingGalleryData)

    return (
        <div className="scope_parent">
            <style global jsx>{`
            
            `}</style>
            <div className="scope">
                {
                    ModelingGalleryData && ModelingGalleryData.map((item,i)=>{
                        return(
                            <span className="scope_span"  data-index={i+1} style={{
                                transformOrigin: 'center',
                                transformStyle: 'preserve-3d',
                                transform: `rotateY(${(i+1)*45}deg) translateZ(350px)`
                            }}>
                                <Image
                                loader={ImageLoader}
                                src={item.image}
                                alt={"modeling image"}
                                width={268}
                                height={547}
                                />
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default index;