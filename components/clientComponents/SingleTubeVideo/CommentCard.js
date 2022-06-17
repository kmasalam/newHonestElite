import React from 'react'
//mui
import { Avatar, Box } from '@mui/material';
import Button from '@mui/material/Button';
//icon
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
//
import HonestEliteCustomPlayer from '../HonestEliteCustomPlayer'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FlagIcon from '@mui/icons-material/Flag';
import AudioPlayer from '../AudioPlayer';
import CommentFooter from './CommentFooter';

export default function CommentCard({item,width,height,commentsType,hasGallery ,hasVideo ,hasAudio ,hasBorderBottom ,size ,hasQuote ,hasMeta ,paddingRightSize,showCommentInfoAsMeta }) {

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };


 

  console.log('commentsType',item)
  if(commentsType == 2){
        return(
            <Box className=' flex items-center justify-start'>
                <Image
                    loader={ImageLoader}
                    src={item.authorImg}
                    alt="comments image"
                    width={width}
                    height={height}
                    />
                    <div className=' flex-1 pl-3'>
                        <p className=' text-c2121 capitalize rubik text-base '>
                            {item.text}
                        </p>
                    </div>
            </Box>
        )
  }else if(commentsType !== 2 ){
    return (
        <Box className={` ${size == 'md' ? ' pt-5 pb-3' : 'pt-5'}  ${hasBorderBottom && ' border-b '}`}>
            <Box className='comment-head flex pb-3'>
            <Avatar alt="Remy Sharp" src="images/comment_avater.png" className='mr-2' />
                <Box>
                    <h5 className='text-c2121 text-18 font-medium  transition duration-300'>Dushka Zapata</h5>
                    {
                        hasMeta && <>
                        <span className='text-c6f6f text-14'>Answered 3 days ago  .</span>
                    <span className='text-c6f6f text-14'>Author has <b>8.2K</b> answers and <b>200.3M</b>answer views </span>
                        </>
                    }
                    {
                        showCommentInfoAsMeta && <>
                        <span className='text-c6f6f text-sm'>Today, 3:00 AM, USA.</span>
                        </>
                    }
                    
                </Box>
            </Box>
            <Box className='comment-body'>
                <p className={` text-c2121 ${paddingRightSize == 'xs' ? 'pr-2' : 'pr-24'} ${size == 'xs' ? ' text-sm ' : 'text-base'} `}>Imagine for a second that someone claims to love you so much that they want to envelope you in pink,
                    fragrant, soft, cotton-lined bubble wrap. You know. To protect you. So there you are, 
                    rolled up, taped up, tied up, defended, guarded, shielded from any risk, any threat, any danger. How long would you want to stay? </p>
                    {
                hasQuote && <blockquote className=" text-base italic font-normal text-primary inline ">
                    one claims to love you so much that they want to envelope you in pink, fragrant, soft, cotton-lined bubble wrap.
                    “You know. To protect you.
                    So there you are, rolled up, taped up, tied up, defended, guarded, shielded from any risk, any threat, any danger.
    How long would you want to stay”
                </blockquote>
            }
            </Box>
            
            {
               hasGallery && <Box className="comments_body_image_gallery flex items-center justify-between pt-4">
                      <Box >
                            <Image
                            loader={ImageLoader}
                            src="images/comments-gallery-img1.jpg"
                            alt="comments image"
                            width={348}
                            height={208}
                            
                            />
                      </Box>
                      <Box>
                            <Image
                            loader={ImageLoader}
                            src="images/comments-gallery-img2.jpg"
                            alt="comments image"
                            width={226}
                            height={208}
                            
                            />
                      </Box>
                      <Box>
                            <Image
                            loader={ImageLoader}
                            src="images/comments-gallery-img3.jpg"
                            alt="comments image"
                            width={226}
                            height={208}
                            
                            />
                      </Box>
               </Box>
            }
            {
                hasVideo && <Box className=" pt-5">
                    <HonestEliteCustomPlayer/>
                </Box>
            }
            {
              hasAudio && <>
              <div className=" py-2">
                  <AudioPlayer playIconType="colored"/>
              </div>
              <div>
                  <AudioPlayer playIconType="colored"/>
              </div>
              </>
            }
            {/*  */}
            <CommentFooter size={size}/>
        </Box>
      )
  }else{
      return <h4>Loading..</h4>
  }
  
}
