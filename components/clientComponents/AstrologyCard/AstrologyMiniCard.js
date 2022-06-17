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

const _ = require("lodash");

function AstrologyMiniCard({item,width,height,bgColor}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className={`flex items-center justify-start rounded-md ${bgColor ? bgColor : 'bg-white'} `}>
                <Image
                className=" rounded-md drop-shadow-md shadow-md"
                loader={ImageLoader}
                src={item.img}
                objectFit="cover"
                alt={'astrology image'}
                width={width}
                height={height}
              />
              <div className="flex-1 pl-[19px]">
                  <p className=" text-sm text-c2121 rubik font-normal capitalize pb-2">{item.date}</p>
                  <Link href={item.link}>
                        <a className=" text-18 capitalize rubik font-normal text-c2121 mt-2 hover:text-primary">
                        {item.title}
                        </a>
                  </Link>
              </div>
        </div>
    );
}

export default AstrologyMiniCard;