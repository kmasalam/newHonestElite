import {useEffect, useState} from 'react';
// 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// Next js
import Link from 'next/link'
import Image from 'next/image';
import { KnowledgeBaseData } from 'data/KnowledgeBaseData';
import _ from 'lodash';

function KnowledgeBaseComponent({...allprops}) {

    const {sliderData,type,width,height} = allprops;

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          className={`  z-10  h-10 w-10 inline-flex items-center justify-center  top-1/3 absolute cursor-pointer ${type == 2 ? ' bg-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.10)] rounded-sm -right-12  ' : ' bg-transparent -right-8  '} `}
            onClick={onClick}
          >
              <ArrowForwardIosOutlinedIcon className={`  ${type ==2 ? 'text-primary text-3xl' : type == 3 ? 'text-c2121 text-xl' : 'text-white text-3xl'} `}/>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`  z-10  h-10 w-10 inline-flex items-center justify-center top-1/3 absolute cursor-pointer  ${type == 2 ? ' bg-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.10)] rounded-sm -left-14  ' : type == 3 ? ' rounded-sm -left-12' : ' bg-transparent  -left-20'}`}
            onClick={onClick}
          >
              <ArrowBackIosOutlinedIcon className={`  ${type ==2 ? 'text-primary text-3xl ' : type == 3 ? 'text-c2121 text-xl'  : 'text-white text-3xl'} `}/>
          </div>
        );
      }

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    

    if(!_.isEmpty(sliderData)){
      return (
        <>
            <Container className="he_container relative">
                {
                    type == 1 && <>
                    <h5 className=' absolute top-[81px] -left-[48px] text-white rubik text-base -rotate-[90deg] '>
                    Knowledge Base
                    </h5>
                    </>
                  }
                <Slider {...settings} className=" relative">

                  

                {
                    sliderData && sliderData.map((item,i)=>{
                        return(
                            <Box className='knowledge_base_slide rounded-md   ' key={i} >
                                <Image
                                  className=' rounded-md drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]'
                                  loader={ImageLoader}
                                  src={type == 2 ? item.thumbnail: item.src}
                                  alt={type == 2 ? item.name : item.alt}
                                  width={width}
                                  height={height}
                                  />
                                <div className="knowledge_base_slide__content text-center">
                                    <Link href={type == 2 ? item.slug : item.link}>
                                        <a className={` rubik transition-all  hover:text-primary ${type == 2 ? 'text-zinc-900' : type == 3 ? 'c2121' : 'text-white'} `}>
                                            {type == 2 ? item.name : item.alt}
                                        </a>
                                    </Link>
                                </div>
                            </Box>
                        )
                    })
                }

                </Slider>
            </Container>
            
        </>
    );
    }else{
        return <h4>Loading..</h4>
    }
    
}

export default KnowledgeBaseComponent;