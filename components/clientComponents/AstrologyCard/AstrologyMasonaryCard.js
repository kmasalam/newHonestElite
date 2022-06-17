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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const _ = require("lodash");

function AstrologyMasonaryCard({
  item,
  itemNumberPerRow,
  hasContent,
  itemIndex,
}) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Box
      className="    "
    >
      <Box className=" bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-md">
        <Box>
          <Image
            className=" rounded-md drop-shadow-md bg-white "
            loader={ImageLoader}
            src={item.img}
            objectFit="cover"
            alt={"astrology image"}
            width={415}
            height={400}
          />
        </Box>

        <Box className=" py-4 px-6">
          <Box className=" flex items-start justify-between pb-[17px]">
            <span className=" text-sm rubik font-normal text-c2121  inline-flex items-center justify-start">
              <Image
                className=" rounded-md drop-shadow-md bg-white "
                loader={ImageLoader}
                src={item.authorImage}
                objectFit="cover"
                alt={"astrology image"}
                width={26}
                height={26}
              />
              <span className=" inline-flex pl-2">
              {item.authorName}
              </span>
            </span>
            <span className=" text-sm rubik font-normal text-c2121">
              {item.date}
            </span>
          </Box>
          <h4 >
            <Link href={item.link}>
              <a className=" text-lg rubik font-normal text-c2121 flex pb-[17px] hover:text-primary transition-all duration-500">
              
                {item.title}
              </a>
            </Link>
          </h4>
          {itemIndex == 0 ? (
            <p className=" text-base rubik font-normal text-c6f6f">
              {item.content}
            </p>
          ) : itemIndex % 2 == 1 ? (
            ""
          ) : itemIndex % 2 == 0 ? (
            <p className=" text-base rubik font-normal text-c6f6f">
              {item.content}
            </p>
          ) : (
            ""
          )}

          <Box className=" flex items-center justify-between pt-[20px]">
            <span className=" text-sm rubik font-normal text-c6f6f inline-flex items-center justify-start">
                <RemoveRedEyeOutlinedIcon className=" text-lg inline-flex mr-1"/>
              {item.view}
            </span>
            <span className=" text-sm rubik font-normal text-c6f6f inline-flex items-center justify-start">
                <FavoriteOutlinedIcon className=" text-lg inline-flex mr-1"/>
              Library
            </span>
            <span className=" text-sm rubik font-normal text-c6f6f inline-flex items-center justify-start">
                <ShareOutlinedIcon className=" text-lg inline-flex mr-1"/>
                Share
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AstrologyMasonaryCard;
