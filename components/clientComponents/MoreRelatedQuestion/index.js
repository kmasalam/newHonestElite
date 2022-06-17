import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import { alpha, styled } from '@mui/material/styles';
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
import TextField from "@mui/material/TextField";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Audio from 'clientComponents/AudioPlayer'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// Next js
import Link from "next/link";
import Image from "next/image";
// data

const _ = require("lodash");
import {RelatedQuestionData} from 'data/RelatedQuestionData';

function index(props) {
    return (
        <>
            <div className=" flex items-center justify-start pt-3 border-b pb-3 ">
                <div className="h-10 w-10 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                    <LightbulbOutlinedIcon className=" text-white"/>
                </div>
                <span className=" font-semibold">
                More related questions
                </span>
            </div>
            <Box className=" flex flex-col pt-10">
                {
                    RelatedQuestionData && RelatedQuestionData.map((item,i)=>(
                        <Link href={item.link} key={i}>
                            <a className=" text-sm text-primary mb-5 capitalize">
                                {item.text}
                            </a>
                        </Link>
                    ))
                }
            </Box>
        </>
    );
}

export default index;