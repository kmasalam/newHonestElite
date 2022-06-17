import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Next js
import Link from 'next/link'
import Image from 'next/image'
//
import HonestEliteCustomPlayer from 'clientComponents/HonestEliteCustomPlayer'

// import {useStyles} from './InterestingGalleryStyle'
import styles from 'styles/client/InterestingGallery.module.scss';




function InterestingGallery(props) {
   

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <div className=' pt-14 pb-14'>
            <Container className='he_container'>
                <Box>
                    <h4 className=' text-c2121 text-lg capitalize pb-4'>
                        Might be Interesting
                    </h4>
                </Box>
            </Container>
            <Container className="he_container ">
                <Box className={` ${styles.interestingGallery}`}>
                    <div className={`itg_1 itg relative  ${styles.bordered_hover} `}>
                        <span className="top_right"></span>
                        <span className="bottom_left"></span>
                            {/* <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img1.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            /> */}

                            <Box className=' absolute top-0 w-full h-full'>
                                <HonestEliteCustomPlayer 
                                hidePlayerControl={true} 
                                videoSrc={'videos/tv_videos.mp4'}
                                />
                            </Box>

                    </div>
                    <div className={`itg_2 itg relative ${styles.bordered_hover}`}>
                        <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img2.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={` itg_3 itg relative ${styles.bordered_hover} `}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img3.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={`itg_4 itg relative ${styles.bordered_hover} `}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img4.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={` itg_5 itg relative ${styles.bordered_hover} `}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img5.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={` itg_6 itg relative ${styles.bordered_hover} `}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img6.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={` itg_7 itg relative ${styles.bordered_hover} `}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img7.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            />
                    </div>
                    <div className={`itg_8 itg relative  ${styles.bordered_hover}`}>
                    <span className="top_right"></span>
                        <span className="bottom_left"></span>
                        <Image
                            className=' top-0'
                            loader={ImageLoader}
                            src="images/interesting-img8.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            
                            />
                    </div>
                   
                   
                </Box>
            </Container>
        </div>
    );
}

export default React.memo(InterestingGallery);