import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CallIcon from "@mui/icons-material/Call";
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
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import CommentCard from "clientComponents/SingleTubeVideo/CommentCard";
import CommentsCreationBox from "clientComponents/CommentsCreationBox";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import { SingleTubeVideoData } from "data/SingleTubeVideoData.js";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { WrittingPoetryData } from "data/WrittingPoetryData";
import {useForm} from 'hooks/form'
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ED028C",
    fontFamily: "Rubik",
  },
  "& .MuiInput-underline:after": {
    border: "none",
    fontFamily: "Rubik",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&:hover fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
  },
});

const humanTraffickingTips = [
  {
    text: "How do you keep your relationship safe without anything once?",
    link: "/",
  },
  {
    text: "What is the best way to keep a distance relationship?",
    link: "/",
  },
  {
    text: "My girlfriend is always cheating on me. What should I do now to let her stop? I love her so much.",
    link: "/",
  },
  {
    text: "Dating and Relationships: What are the keys to a successful relationship?",
    link: "/",
  },
  {
    text: "What is the best way to keep a distance relationship?",
    link: "/",
  },
  {
    text: "My girlfriend is always cheating on me. What should I do now to let her stop? I love her so much.",
    link: "/",
  },
];

function index(props) {
  const [openReportForm, setOpenReportForm] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const handleClickOpen = () => {
    setOpenReportForm(true);
  };

  const handleClose = () => {
    setOpenReportForm(false);
  };

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        onClose={handleClose}
        open={openReportForm}
        className=" human_traffic_modal pb-8"
      >
        <style jsx global>{`
          .MuiDialog-paper {
            max-width: 920px;
            with: 920px;
          }
          .submit_btn {
            border: 1px solid #ed028c;
            height: 58px;
          }
        `}</style>
        <Button className=" absolute right-8 top-4 font-light text-lg capitalize rubik text-c6f6f " onClick={handleClose}>
          Close
          <CloseOutlinedIcon className=" text-c6f6f text-2xl " />
        </Button>

        <DialogContent className=" pb-8 ">
          <form className=" px-8 pb-6" >
            <Box className="pl-3 border-b pb-4 pt-10">
              <h4 className=" rubik text-3xl text-c2121 rubik font-medium">
                Please fill this form to Report Human Trafficking
              </h4>
            </Box>
            <Box className=" bg-transparent w-full  flex items-center pl-3 border-b py-2">
              <PersonOutlineOutlinedIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="Victim Names"
                id="custom-css-outlined-input"
              />
            </Box>
            <Box className=" bg-transparent w-full  flex items-center pl-3 border-b py-2">
              <LocationOnOutlinedIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="Location"
                id="custom-css-outlined-input"
              />
            </Box>

            <Box className=" bg-transparent w-full  flex items-center pl-3 border-b py-2">
              <CallIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="Phone Number "
                id="custom-css-outlined-input"
              />
            </Box>
            <Box className=" bg-transparent w-full  flex items-center pl-3  py-2">
              <PeopleOutlineOutlinedIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="Suspects & Other Associates Names (You can add multiple names)"
                id="custom-css-outlined-input"
              />
            </Box>
            <Box className=" border-t pt-4 pb-2 ">
              <h5 className=" text-base text-c2121 rubik font-normal ">
                Select Type of Human Trafficking
              </h5>
              <FormGroup className=" flex flex-wrap flex-row  py-4  pl-4 ">
                <FormControlLabel
                  className="   mr-10 mb-3 text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Abuse"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Pimping"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Sex Slaves"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Rape"
                />
                <FormControlLabel
                  className="  mr-12 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Domestic Violance"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Unpaid Nanny"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Debt Bondage"
                />
                <FormControlLabel
                  className="  mr-10 mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Forced Marriage"
                />
                <FormControlLabel
                  className=" mr-10 flex-[0_0_20%] mb-3  text-base text-c6f6f rubik"
                  control={<Checkbox className=" inline-flex mr-1" defaultChecked />}
                  label="Labour"
                />
              </FormGroup>
            </Box>
            <Box className=" bg-transparent w-full  flex items-center pl-3 border-b py-2  border-t">
              <AccessTimeIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="For How long its going on"
                id="custom-css-outlined-input"
              />
            </Box>
            <Box className=" bg-transparent w-full mb-4 flex items-center pl-3 border-b py-2">
              <MessageOutlinedIcon className=" text-c6f6f text-lg " />
              <CssTextField
                size="small"
                className=" rubik text-base text-c6f6f "
                label="Add Descriptins"
                id="custom-css-outlined-input"
              />
            </Box>
            <Box>
              <Grid container spacing={6} className=" pt-8">
                <Grid item md={6}>
                  <Box className=" pr-10">
                    <Box className=" bg-cf2f2 relative w-full  px-4 flex h-10  mb-4 ">
                      <input
                        type="file"
                        className=" h-full w-full left-6 opacity-0 absolute top-0"
                      />
                      <span className=" bg-cf2f2 px-4 text-base text-c6f6f font-normal rubik absolute right-0 w-full h-full inline-flex items-center justify-start">
                        <AttachFileOutlinedIcon className=" inline-flex mr-2 text-lg" />
                        Attach Files of evidence
                      </span>
                    </Box>
                    <Box className=" flex flex-wrap">
                      <Image
                        className=" inline-flex mr-1"
                        loader={ImageLoader}
                        src="images/human-traffic-report-img1.jpg"
                        alt={"human traffic image"}
                        width={90}
                        height={132}
                      />
                      <Image
                      className=" inline-flex mr-1"
                        loader={ImageLoader}
                        src="images/human-traffic-report-img2.jpg"
                        alt={"human traffic report image"}
                        width={90}
                        height={132}
                      />
                      <Image
                      className=" inline-flex mr-1"
                        loader={ImageLoader}
                        src="images/human-traffic-report-img3.jpg"
                        alt={"human traffic report image"}
                        width={136}
                        height={132}
                      />
                    </Box>
                    <p className=" text-sm text-c6f6f text-left capitalize rubik pt-3 ">
                      3 Files attached
                    </p>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box>
                    <Box className=" bg-cf2f2 w-full mb-4 flex items-center pl-3 mb-4">
                      <CallIcon className=" text-c6f6f text-lg " />
                      <CssTextField
                        className=" rubik text-base text-c6f6f "
                        size="small"
                        label="Your Name"
                        id="custom-css-outlined-input"
                      />
                    </Box>
                    <Box className=" bg-cf2f2 w-full mb-4 flex items-center pl-3">
                      <CallIcon className=" text-c6f6f text-lg " />
                      <CssTextField
                        className=" rubik text-base text-c6f6f "
                        size="small"
                        label="Your Number"
                        id="custom-css-outlined-input"
                      />
                    </Box>
                    <Button className=" rounded-sm submit_btn w-full text-xl capitalize min-w-full font-medium rubik text-primary mt-4 mb-2">
                      Submit Report
                    </Button>

                    <p className=" text-c6f6f text-sm rubik text-center pt-2">
                      Please fillup all the field before submission
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </form>
        </DialogContent>
      </Dialog>

      <div className=" bg-cf9f9">
        {/*  */}
        <div className="bg-white pt-6">
          <Container className=" he_container pb-3">
            <Grid container spacing={3}>
              <Grid item md={3}>
                <Link href="/">
                  <a>
                    <Image
                      loader={ImageLoader}
                      src="images/dark-logo.png"
                      alt={"dark logo"}
                      width={92}
                      height={57}
                    />
                  </a>
                </Link>
              </Grid>
              <Grid item md={6} className=" flex items-center justify-center pt-3">
                {/*  */}
                <Box className=" w-[46.80rem] mr-[58px] ">
                  <SearchBar
                  searchbarType={'gray_form_box'}
                  size={''}
                  spacing={''}
                  />
                </Box>
                {/*  */}
              </Grid>
              <Grid item md={3} className=" text-right">
                <Box>
                  <Button className=" py-3 px-3 bg-primary text-white text-sm capitalize">
                    Upload all related
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        
        <div className=" pt-10">
          <GalleryHead
            activeItem={"written"}
            hasSortable={false}
            hasCategory={false}
            pageLink="/"
            bigText="Fight Sex/Human <br/> Trafficking"
            categoryList={RandomGalleryCategoryData}
          />
        </div>
        {/*  */}
        <Container className="he_container pt-[125px]">
          <Grid container spacing={3}>
            <Grid item md={3} className=" pr-10">
              <Box className=" sticky top-0">
                <Box className=" border-primary border  rounded-sm  bg-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)] mb-6 px-6 py-8 ">
                  <h5 className=" text-xl rubik  text-c2121 font-medium capitalize mb-8">
                    Hotline to Help
                  </h5>
                  <Link href={"/"}>
                    <a className=" font-medium rubik text-primary text-xl flex items-center justify-start mb-4 ">
                      <CallIcon className="inline-flex mr-2 text-xl " />
                      <span className=" rubik flex border-b border-primary">
                        911
                      </span>
                    </a>
                  </Link>
                  <Link href={"/"}>
                    <a className=" font-medium rubik text-primary text-xl flex items-center justify-start mb-4 ">
                      <CallIcon className="inline-flex mr-2 text-xl " />
                      <span className=" flex border-b rubik  border-primary">
                        1 (888) 373-7888
                      </span>
                    </a>
                  </Link>
                </Box>
                <Box className=" border mb-6 border-zinc-300   rounded-md bg-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)]  ">
                  <div
                    className="relative rounded-t-md overflow-hidden"
                    style={{
                      height: `170px`,
                    }}
                  >
                    <Image
                      loader={ImageLoader}
                      src="images/human-traffic-help.jpg"
                      alt={"dark logo"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <Box className=" px-4 py-4">
                    <h5 className=" text-xl capitalize font-medium rubik text-c2121 mb-2 mt-2">
                      Help our cause
                    </h5>
                    <p className=" text-sm text-c6f6f rubik font-normal ">
                      Make your donation to help the people around the world
                    </p>
                    <Box className=" flex flex-row items-center justify-between pt-3 pb-7">
                      <p className=" inline-flex flex-col items-start justify-start">
                        <span className=" text-sm text-c2121 capitalize rubik">
                          Raised till now
                        </span>
                        <span className=" text-lg font-medium rubik text-primary ">
                          $2000
                        </span>
                      </p>
                      <p className=" inline-flex flex-col items-end justify-start">
                        <span className=" text-sm text-c2121 capitalize rubik">
                          Our Goal
                        </span>
                        <span className=" text-lg font-medium rubik text-primary ">
                          $20,000,000
                        </span>
                      </p>
                    </Box>
                    <Box>
                      <Button
                        className=" py-3 rubik bg-primary text-white rounded-sm font-medium min-w-full w-full"
                        variant="contained"
                      >
                        Donate
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} className=" pl-3 pr-3">
              <Box className=" -mt-24">
                <Box className=" pb-8 pl-6">
                  <h3 className=" text-primary text-4xl  rubik font-medium capitalize">
                    Please Help Fight Sex / Human Trafficking
                  </h3>
                  <p className=" text-2xl text-c2121 capitalize font-normal pt-5">
                    Make post with all Evidences + Locations to get help from
                    community
                  </p>
                </Box>
                <Box className=" bg-white pt-8 pb-4 pl-9 pr-10 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] rounded-sm mb-8 ">
                  <CommentsCreationBox
                    buttonText="Make Post"
                    buttonType="fill"
                    size="sm"
                    hasLocation={true}
                    hasBorderBottom={false}
                  />
                </Box>
                <Box className=" bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] pt-8 pb-8 pl-9 pr-10 mb-8  ">
                  <div className=" flex items-center justify-start py-3 border-b">
                    <div className="h-8 w-8 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <FormatListBulletedIcon className=" text-white text-lg" />
                    </div>
                    <span>100 Answer</span>
                  </div>
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasMeta={false}
                    showCommentInfoAsMeta={true}
                    hasQuote={false}
                    hasGallery={false}
                    hasVideo={false}
                    hasAudio={false}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                  <div className=" pt-2">
                    <CommentsCreationBox
                      buttonText="Post comment"
                      buttonType=""
                      size="sm"
                      hasLocation={true}
                      hasBorderBottom={true}
                    />
                  </div>
                </Box>

                <Box className=" bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] pt-8 pb-8 pl-9 pr-10 mb-8 ">
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasMeta={false}
                    showCommentInfoAsMeta={true}
                    hasQuote={false}
                    hasGallery={true}
                    hasVideo={false}
                    hasAudio={false}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                  <div className=" pt-2">
                    <CommentsCreationBox
                      buttonText="Post comment"
                      buttonType=""
                      size="sm"
                      hasLocation={false}
                      hasBorderBottom={true}
                    />
                  </div>
                  <div className=" flex items-center justify-start py-3 border-b">
                    <div className="h-8 w-8 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <FormatListBulletedIcon className=" text-white text-lg" />
                    </div>
                    <span>100 Answer</span>
                  </div>
                  <Box>
                    <CommentCard
                      data={SingleTubeVideoData}
                      hasMeta={false}
                      showCommentInfoAsMeta={true}
                      hasQuote={false}
                      hasGallery={false}
                      hasVideo={false}
                      hasAudio={false}
                      hasBorderBottom={false}
                      size={"md"}
                    />
                    <CommentCard
                      data={SingleTubeVideoData}
                      hasMeta={false}
                      showCommentInfoAsMeta={true}
                      hasQuote={false}
                      hasGallery={false}
                      hasVideo={false}
                      hasAudio={false}
                      hasBorderBottom={true}
                      size={"md"}
                    />
                  </Box>
                </Box>
                {/*  */}
                <Box className=" bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] pt-8 pb-8 pl-9 pr-10 mb-8 ">
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasMeta={false}
                    showCommentInfoAsMeta={true}
                    hasQuote={false}
                    hasGallery={false}
                    hasVideo={true}
                    hasAudio={false}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                  <div className=" pt-2">
                    <CommentsCreationBox
                      buttonText="Post comment"
                      buttonType=""
                      size="sm"
                      hasLocation={false}
                      hasBorderBottom={true}
                    />
                  </div>
                </Box>
                {/*  */}
                <Box className=" bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] pt-8 pb-8 pl-9 pr-10 mb-8 ">
                  <CommentCard
                    data={SingleTubeVideoData}
                    hasMeta={false}
                    showCommentInfoAsMeta={true}
                    hasQuote={false}
                    hasGallery={false}
                    hasVideo={false}
                    hasAudio={true}
                    hasBorderBottom={true}
                    size={"md"}
                  />
                  <div className=" pt-2">
                    <CommentsCreationBox
                      buttonText="Post comment"
                      buttonType=""
                      size="sm"
                      hasLocation={false}
                      hasBorderBottom={true}
                    />
                  </div>
                </Box>
                {/*  */}
                <Box className=" text-center pt-2 pb-6">
                  <Button>
                    <AddIcon className=" text-c6f6f text-5xl" />
                  </Button>
                </Box>
                {/*  */}

                {/*  */}
                <Box className=" bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.15)] pt-8 pb-8 pl-9 pr-10 mb-8 ">
                  <div className=" flex items-center justify-start py-3 border-b border-t mb-6 mt-2 font-medium">
                    <div className="h-8 w-8 rounded-full bg-primary inline-flex items-center justify-center mr-3">
                      <FormatListBulletedIcon className=" text-white text-lg" />
                    </div>
                    <span>Human Trafficking Realted Tips</span>
                  </div>
                  <Box>
                    {humanTraffickingTips &&
                      [...humanTraffickingTips].splice(0, 6).map((item, i) => (
                        <Box key={i}>
                          <Link href={item.link}>
                            <a className=" text-base text-primary capitalize rubik flex mb-4">
                              {item.text}
                            </a>
                          </Link>
                        </Box>
                      ))}
                  </Box>
                </Box>
                {/*  */}
                {/*  */}
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className=" pl-5 sticky top-0">
                <Box className=" drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)] bg-white mb-6 px-8 py-8 rounded-md">
                  <h5 className=" text-primary uppercase font-medium mb-6 text-2xl ">
                    NEED HELP ?
                  </h5>
                  <p className=" text-c2121 text-base capitalize rubik">
                    United States: 1 (888) 373-7888 National Human Trafficking
                    Hotline Languages: English, Spanish and 200 more Website:
                    http://humantraffickinghotline.org SMS: 233733 (Text "HELP"
                    or "INFO") Hours: 24 hours, 7 days a week
                  </p>
                </Box>
                <Box className=" px-6 pt-4 pb-4">
                  <h3 className=" capitalize text-c2121 text-4xl rubik font-medium">
                    Think About It
                  </h3>
                  <p className=" text-xl font-normal text-c2121 capitalize ">
                    What if you save one life today!
                  </p>
                </Box>
                <Box className=" px-8 py-8 border border-primary drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)] text-left bg-white  rounded-sm">
                  <h5 className=" text-lg text-c2121 capitalize rubik font-medium">
                    Report Human Trafficking
                  </h5>
                  <p className=" text-12 text-c6f6f capitalize rubik pt-3 pb-5 ">
                    Please provide detailed report tip about the incident you
                    saw and everything necessary to open a docket, thank you for
                    support remember you are saving a life. Take this as a
                    changing somebody life.
                  </p>
                  <Button
                    onClick={handleClickOpen}
                    className=" border border-primary report_button  bg-white  text-primary font-medium rubik capitalize w-full min-w-full "
                    variant="outlined"
                  >
                    Report Human Trafficking
                  </Button>
                  <style jsx global>{`
                    .report_button {
                      border: 1px solid #ed028c !important;
                      height: 54px;
                    }
                  `}</style>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default index;
