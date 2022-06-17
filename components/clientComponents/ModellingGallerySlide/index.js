import React from 'react';
// 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Next js
import Link from 'next/link';
import Image from 'next/image';
// Modelling gallery
import {ModellingGalleryData, ModellingAddList} from 'data/ModellingGalleryData'
// import {useStyles} from './ModellingGallerySlideStyle'
import styles from 'styles/client/ModellingGallerySlide.module.scss'

function ModellingGallerySlide(props) {

   

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          >
              <Image
                loader={ImageLoader}
                src="images/next.svg"
                alt="next"
                width={30}
                height={30}
                />
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          >
              <Image
                loader={ImageLoader}
                src="images/next.svg"
                alt="prev"
                width={30}
                height={30}
                />
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

    return (
        <>
            <Container className="he_container">
                <Slider {...settings} className={styles.modellingGallerySlider}>

                {
                    ModellingGalleryData && ModellingGalleryData.map((item,i)=>(
                        <div className={styles.modelling_gallery_ss} key={i}>
                            <div className={'modelling_gallery_slide relative'}>
                                <Image
                                loader={ImageLoader}
                                src={item.img}
                                alt={item.alt}
                                width={230}
                                height={208}
                                />
                                <div className={`${styles.modelling_gallery_slide_content}   flex absolute items-center justify-center `}>
                                    <Link href="/">
                                        <a className='  text-white border border-slate-300 p-10 w-8/12 uppercase'>
                                            {item.text}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

                </Slider>
            </Container>
            <Container  className="he_container pt-10">
                <Box className=" px-10 flex items-center justify-center">
                    {/*  */}
                    {
                        ModellingAddList && ModellingAddList.map((item,i)=>(
                            <div className={` ${styles.modelling_add_box} modelling_add_box   relative`} key={i}>
                                <Image
                                loader={ImageLoader}
                                src={item.image}
                                alt={item.text}
                                width={500}
                                height={423}
                                />
                                <div className="modelling_add_box__content absolute  w-8/12 px-14 py-24 text-center">
                                    <Link href={item.link}>
                                        <a className=" text-2xl font-medium text-white ">
                                        {item.text}
                                        </a>
                                    </Link>
                                </div>
                        </div>
                        ))
                    }
                   
                </Box>
            </Container>
            <Container disableGutters={true} maxWidth={false} className="pt-10">
                <Box>
                    <Image
                    loader={ImageLoader}
                    src="images/midelling_big_add.jpg"
                    alt="prev"
                    width={1935}
                    height={685}
                    layout='responsive'
                    />
                </Box>
            </Container>
        </>
    );
}

export default React.memo(ModellingGallerySlide);