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

function DumpKeepCard({...allprops}) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    const {item,number, width, height, showAvatar, showCategory,isQustionAnswer} = allprops;

    if(!_.isEmpty(item)){
        return (
            <>
               <Box className="dump_keep_card shadow-md mb-4 bg-white rounded-md ">
                    <div className="dump_keep_card__img relative">
                        <span className="dump_keep_card__no absolute z-10 right-5 top-5 text-3xl " style={{
                             'WebkitTextStroke': "1px white",
                             color: "transparent",
                             fontFamily: "sans",
                        }}>Q.{number}</span>
                            <Image
                            className=" rounded-t-md"
                            loader={item.ImageLoader}
                            src={item.qImg}
                            objectFit="cover"
                            alt={item?.avatarAlt}
                            width={width}
                            height={height}
                          />
                    </div>
                    <div className="dump_keep_card__content pl-4 pr-4 py-3 pb-0">
                        {
                            showCategory && <>
                             <p className=" flex items-center justify-start text-primary text-sm mb-3 ">{item.category}</p>
                            </> 
                        }
                        {
                            showAvatar && <p className=" flex items-center justify-start text-primary text-sm mb-3 ">
                            <Avatar alt="Remy Sharp" src={item.qAvatar} className=" mr-2 drop-shadow-sm rounded-full"/>
                            {item.aAuthor}
                        </p>
                        }
                        <Link href={item.qLink}>
                            <a className=" text-base font-semibold duration-500 transition text-c2121 mt-3 hover:text-primary">
                            {item.qTitle}
                            </a>
                        </Link>
                    </div>
                    <div className="dump_keep_card__footer mt-3 pl-4 pr-4  pb-6">
                        <ul className=" flex ">
                            <li className=" text-c2121 text-xs  mr-5 ">
                                <span className=" text-primary text-xs">{item.qViews}</span>
                                {
                                    isQustionAnswer ? ' Question ': ' People Views'
                                }
                                 
                            </li>
                            <li className=" text-c2121 text-xs ">
                                <span className=" text-primary text-xs">{item.qVoted}</span> 
                                {
                                    isQustionAnswer ? ' Answers' : ' voted'
                                }
                                
                            </li>
                        </ul>
                    </div>
                </Box> 
            </>
        );
    }else{
        return <h4>Loading..</h4>
    }
    

    
}

export default DumpKeepCard;