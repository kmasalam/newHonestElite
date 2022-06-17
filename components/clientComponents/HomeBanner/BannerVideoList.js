import React,{useEffect} from 'react';
// Material
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
// Next
import Link from 'next/link'
import Image from 'next/image'

// 
import {videoListStyle} from './BannerVideoListStyle'
import { handleBreakpoints } from '@mui/system';
// 
// import {VideoListData} from 'data/VideoListData' 
import  styles from  'styles/client/BannerVideoList.module.scss';

function BannerVideoList({handleVideo,hideLeftMenu,VideoListData,bannerType}) {

    const classes = videoListStyle()

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    useEffect(() => {
        handleVideo(VideoListData[0].link)

        
      }, []);
    

  

    return (
        <>
            <Box 
            className={`inline-flex right-0 absolute   ${hideLeftMenu ? styles.videlistBottom : styles.videoList}`} style={{
                zIndex: '9'
            }} >
                <ul>
                    {
                        VideoListData && VideoListData.map((item,i)=>{
                            return(
                                <li  key={i} onClick={e=>handleVideo(e?.target.dataset.videLink)}
                                data-vide-link={item.link}>
                                    <Image
                                    loader={ImageLoader}
                                    src={item.img}
                                    alt={item.alt}
                                    width={166}
                                    height={144}
                                    
                                    />
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </Box>
        </>
    );
}

export default React.memo(BannerVideoList);