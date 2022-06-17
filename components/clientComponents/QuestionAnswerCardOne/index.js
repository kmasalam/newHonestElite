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

function QuestionAnswerCardOne({ ...allprops }) {

  

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  

  const {
    hasOverlay,
    showAuthor,
    showRelatedTopic,
    height,
    width,
    radiusClass,
    showShareableOnTop,
    isBox,
    item,
    size,
    showShareOnFooter,
    index,
    handleDarkOverlay,
    activeItem,
    hasDarkOverlay
    
  } = allprops;







  const showContent = false;
  if (!_.isEmpty(item) && handleDarkOverlay) {
    return (
      <Box className={` question_answer_card relative  ${activeItem == index ? ' remove_dark_overlay ' : ' active_dark_overlay '}  `} onClick={(e)=>handleDarkOverlay(index)} >
        <style jsx global>{`
          .active_dark_overlay::before {
              content: "";
              position: absolute;
              height: calc(100% + 16px);
              width: 100%;
              background: rgba(0,0,0,.50);
              z-index: 9;
              top: 0;
              cursor: pointer;
          }
        `}</style>
        <div className={`question_answer_card__image overlay_heading relative `} style={{
          height: height,
        }}>
          <Image
            className={` random page_header_img  ${size == 'lg' ?  'rounded-t-lg' : 'rounded-t-sm'}  `}
            loader={ImageLoader}
            src={item.qImage}
            objectFit="cover"
            alt="relation image"
            layout="fill"
          />
          {
            hasOverlay && <Link href={item.qLink}>
            <a className={` text-white font-medium absolute bottom-4 left-5  transition duration-300  pr-12   duration-300  drop-shadow-md ${size == 'xs' ? 'text-xl' : 'text-2xl'} `}>
              {item.qTitle}
            </a>
          </Link>
          }
          
        </div>
        <div className={` question_answer_card__content bg-white   mb-4 rounded-b-md  ${isBox ? ' shadow-md px-6 pt-4 ' : ' px-3 pt-3' }`}>
          {
            size == 'sm' && <Link href={item.qLink}>
              <a className=" text-c2121 font-semibold  bottom-4 left-5 text-base transition duration-300  pr-0   duration-300  drop-shadow-sm pb-3 block  ">
                {item.qTitle}
              </a>
            </Link>
          }
          {
            showAuthor && <div className="question_answer_card__bar flex items-center justify-between pb-3">
            <div className="question_answer_card__author inline-flex items-center justify-start">
              <Avatar 
              alt="Remy Sharp" 
              src={item.qAuthorImage} 
              className=" drop-shadow-sm transition duration-300 rounded-full hover:scale-105 hover:drop-shadow-md" />
              <span className=" inline-flex ml-2 text-c2121 text-base capitalize">{item.qAuthor}</span>
            </div>
            {
              showShareableOnTop && <div className="question_answer_card__share">
              <ul className=" inline-flex">
                <li>
                  <Link href="/">
                    <a className=" text-sm text-c6f6f inline-flex items-center justify-start mr-4 ">
                      <FavoriteIcon  className=" inline-flex mr-1"/>
                      {item.qReact}
                      <span className=" inline-flex ml-1">love</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                  <a className=" text-sm text-c6f6f inline-flex items-center justify-start ">
                      <ShareIcon className=" inline-flex mr-1" />
                      <span>Share</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            }
            

          </div>
          }{
            showShareOnFooter && <div className="question_answer_card__share pt-0 border-b pb-2">
            <ul className=" inline-flex">
              <li>
                <Link href="/">
                  <a className=" text-sm text-c6f6f inline-flex items-center justify-start mr-4 ">
                    <FavoriteIcon  className=" inline-flex mr-1"/>
                    {item.qReact}
                    <span className=" inline-flex ml-1">love</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                <a className=" text-sm text-c6f6f inline-flex items-center justify-start ">
                    <ShareIcon className=" inline-flex mr-1" />
                    <span>Share</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          }
          {
            size == 'lg' &&  <p className=" text-lg font-semibold text-c2121 border-b border-b-2 pb-5 ">
            {item.qContent}
            <Link href={item.qLink}>
                <a className="text-primary">
                    More on {item.qAuthor}
                </a>
            </Link>
          </p>
          }
          {
            size == 'xs' && <p className=" text-base font-normal text-c2121 border-b border-b-2 pb-5 ">
            {item.qContent}
            <Link href={item.qLink}>
                <a className="text-primary">
                    More on {item.qAuthor}
                </a>
            </Link>
          </p>
          }
          
          {
            showRelatedTopic && <div className="question_answer_card__footer flex py-4">
            <span className="question_answer_card__footer_related_topics text-base text-c6f6f inline-flex mr-10">
              Related Topic :
            </span>
            <div className=" flex flex-wrap justify-around flex-row flex-1 ">
              {
                  item?.qTopics && item.qTopics?.map((item,i)=>(
                      <Link href={item.link} key={i}>
                          <a className=" text-sm text-c6f6f duration-300 transition font-light hover:text-primary ">
                              {item.text}
                          </a>
                      </Link>
                  ))
              }
            
            </div>

          </div>
          }
          

        </div>
      </Box>
    );
  } else {
    return <h4>Loading..</h4>;
  }
}

export default QuestionAnswerCardOne;
