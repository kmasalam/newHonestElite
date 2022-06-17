import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import { alpha, styled } from "@mui/material/styles";
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
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Audio from "clientComponents/AudioPlayer";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
// Next js
import Link from "next/link";
import Image from "next/image";
// data

const _ = require("lodash");

function CommentsToolbarCard({ ...allprops }) {
  const { size, hasLocation } = allprops;
  return (
    <Box className=" post_creation_card__post_type inline-flex   ">
      <Button
        className={` text-c6f6f  capitalize ${
          size == "sm" ? "text-sm mr-3" : "text-base mr-5"
        } `}
        variant="text"
        startIcon={
          <PermMediaOutlinedIcon
            className={` text-c6f6f  capitalize ${
              size == "sm" ? "text-sm " : "text-base"
            } `}
          />
        }
      >
        Photo
      </Button>
      <Button
        className={` text-c6f6f  capitalize ${
          size == "sm" ? "text-sm mr-3" : "text-base mr-5"
        } `}
        variant="text"
        startIcon={
          <VideocamOutlinedIcon
            className={` text-c6f6f  capitalize ${
              size == "sm" ? "text-base " : "text-xl"
            } `}
          />
        }
      >
        Video
      </Button>
      <Button
        className={` text-c6f6f  capitalize ${
          size == "sm" ? "text-sm mr-3" : "text-base mr-5"
        } `}
        variant="text"
        startIcon={
          <SettingsVoiceOutlinedIcon
            className={` text-c6f6f  capitalize ${
              size == "sm" ? "text-sm " : "text-base"
            } `}
          />
        }
      >
        Audio
      </Button>
      <Button
        className={` text-c6f6f  capitalize ${
          size == "sm" ? "text-sm mr-3" : "text-base "
        } `}
        variant="text"
        startIcon={
          <LibraryBooksOutlinedIcon
            className={` text-c6f6f  capitalize ${
              size == "sm" ? "text-sm " : "text-base"
            } `}
          />
        }
      >
        Qoutes/ Articles
      </Button>
      {
        hasLocation && <Button
        className={` text-c6f6f  capitalize ${
          size == "sm" ? "text-sm mr-3" : "text-base "
        } `}
        variant="text"
        startIcon={
          <LocationOnOutlinedIcon
            className={` text-c6f6f  capitalize ${
              size == "sm" ? "text-sm " : "text-base"
            } `}
          />
        }
      >
        Location
      </Button>
      }
    </Box>
  );
}

export default CommentsToolbarCard;
