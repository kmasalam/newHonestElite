import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import HomeNavigation from "clientComponents/HomeNavigation";
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
import useWindowSize from 'hooks/useWindowSize';
//
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");


//

import { useForm } from "react-hook-form";

function index(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };
    
      

    return (
        <div className=" sign_in_bg  w-screen pl-[100px] pt-[70px] pb-[140px] pr-[100px] relative ">

            <Image
                    className=" random top-0 transition duration-300 z-0 w-full h-full top-0 left-0 absolute "
                    loader={ImageLoader}
                    src={'images/sign-in-bg.jpg'}
                    objectFit="cover"
                    alt="relation image"
                    layout="fill"
                    
                />
            
            <style jsx global>{`
                
                .honestElite_input_field .text_field {height: 54px;border: 2px solid #6F6F6F;border-radius: 10px;padding: 0 15px;}
            `}</style>
            <Box className="signin_box h-full w-full  bg-cf2fc  overflow-hidden relative">
            <span className=" absolute -left-[20%] z-0  top-[50%] ">
                <Image
                    className=" random top-0 transition duration-300 z-0  "
                    loader={ImageLoader}
                    src={'images/sign-in-shape2.png'}
                    objectFit="cover"
                    alt="relation image"
                    width={836}
                    height={647}
                    
                />
            </span>
            <span className=" absolute left-[50%] z-0 -translate-x-1/2 top-[0%] ">
                <Image
                    className=" random top-0 transition duration-300 z-0  "
                    loader={ImageLoader}
                    src={'images/sign-in-shape.png'}
                    objectFit="cover"
                    alt="relation image"
                    height={1206}
                    width={1197}
                />
                
            </span>
                <Grid container spacing={4}>
                    <Grid item md={6} className=" pt-[90px] pb-[175px]">
                        <Box className="pl-[150px] pr-[270px]">
                            <Box>
                                <h4 className="  text-32 text-c2121 capitalize font-semibold rubik mb-[17px]  ">
                                Log in
                                </h4>
                                <p className=" text-lg rubik text-c6f6f pb-[40px]  ">
                                Enter your credentials to your acces your account
                                </p>
                                <Box className="honestElite-socialBox">
                                    <Button className=" min-w-fit inline-flex h-[52px] p-0 mr-5 w-[83px] items-center justify-center relative z-10">
                                        <Image
                                            className=" random top-0 transition duration-300 z-20   "
                                            loader={ImageLoader}
                                            src={'images/fb-icon.svg'}
                                            objectFit="cover"
                                            alt="honest elite facebook"
                                            height={52}
                                            width={83}
                                        />
                                    </Button>
                                    <Button className=" min-w-fit inline-flex h-[52px] p-0 mr-5  w-[83px] items-center justify-center relative z-10">
                                        <Image
                                            className=" random top-0 transition duration-300 z-20   "
                                            loader={ImageLoader}
                                            src={'images/tw-icon.svg'}
                                            objectFit="cover"
                                            alt="honest elite facebook"
                                            height={52}
                                            width={83}
                                        />
                                    </Button>
                                    <Button className=" min-w-fit inline-flex p-0  h-[52px] mr-5 w-[83px] items-center justify-center relative z-10">
                                        <Image
                                            className=" random top-0 transition duration-300 z-20   "
                                            loader={ImageLoader}
                                            src={'images/gg-icon.svg'}
                                            objectFit="cover"
                                            alt="honest elite facebook"
                                            height={52}
                                            width={83}
                                        />
                                    </Button>
                                    <Button className=" min-w-fit inline-flex p-0  h-[52px]  w-[83px] items-center justify-center relative z-10">
                                        <Image
                                            className=" random top-0 transition duration-300 z-20   "
                                            loader={ImageLoader}
                                            src={'images/ld-icon.svg'}
                                            objectFit="cover"
                                            alt="honest elite facebook"
                                            height={52}
                                            width={83}
                                        />
                                    </Button>
                                </Box>
                                <Box className=" or_border text-center relative w-[91%] mt-[25px] mb-[25px]">
                                    <span className=" text-12 font-normal text-c2121 uppercase">OR</span>
                                </Box>
                                <form>
                                    <Grid container spacing={4}>
                                        <Grid item md={12}>
                                            <Box className=" honestElite_input_field relative z-20">
                                                <span className=" flex mb-3 label text-base capitalize text-c2121 rubik ">
                                                Username
                                                </span>
                                                <input className=" w-full text_field" {...register("firstName")} />
                                            </Box>
                                        </Grid>
                                        <Grid item md={12} className=" relative z-20 pt-[25px] ">
                                            <Box className=" honestElite_input_field">
                                                <span className=" flex mb-3 label text-base capitalize text-c2121 rubik ">
                                                Password
                                                </span>
                                                <input className=" text_field  w-full" {...register("lastName")} />
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} className=" pt-[35px]">
                                            <Box>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                            </Box>
                                        </Grid>
                                        <Grid item md={6} className=" pt-[35px]">
                                            <Link href="/">
                                                <a className=" font-normal block rubik capitalize text-c2121 text-right mb-0 relative z-10">
                                                Forgot Password?
                                                </a>
                                            </Link>
                                        </Grid>
                                        <Grid item md={12} className=" pt-[40px] ">
                                            <Button  variant="contained" className=" w-full h-[56px] shadow-none bg-primary rounded-md text-lg font-medium capitalize ">
                                            Login
                                            </Button>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Box className=" pt-[45px] text-center relative z-10">
                                                <p className=" text-base capitalize text-c6f6f rubik font-normal">
                                                Don’t have an account?   
                                                <Link href="/sign-up">
                                                    <a className=" text-primary capitalize text-base">
                                                    Registration
                                                    </a>
                                                </Link>
                                                </p>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} className=" pt-[0px]">
                        <Box className=" relative w-full h-full z-20   ">
                            <Box className=" absolute left-[50%] z-40 -translate-x-1/2 text-center w-[80%] bottom-[160px] ">
                                <Button className=" bg-transparent h-[120px] w-[120px rounded-full]">
                                    <Image
                                        className=" random top-0 transition duration-300 z-20   "
                                        loader={ImageLoader}
                                        src={'images/play-circle-btn.svg'}
                                        objectFit="cover"
                                        alt="relation image"
                                        height={120}
                                        width={120}
                                    />
                                </Button>
                                <h4 className=" text-42 capitalize rubik font-normal mt-[81px] mb-[25px] rubik text-white">
                                Nice to see again
                                </h4>
                                <p className=" text-24 capitalize rubik font-normal  text-white">
                                What are the best things to do to keep your relationship safe? How to keep your partner for lifetime!
                                </p>
                                
                            </Box>
                            <Image
                            className=" random top-0 transition duration-300  "
                            loader={ImageLoader}
                            src={'images/sign-in-screen.jpg'}
                            objectFit="cover"
                            alt="relation image"
                            layout="fill"
                        />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default index;