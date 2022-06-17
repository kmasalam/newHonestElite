import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Next js
import Link from 'next/link'
import Image from 'next/image'
// styles
import styles from 'styles/client/RightDoorGallery.module.scss'

function RightDoorGallery({...allprops}) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }
 
    const {img,text,width,height,link,style} = allprops;

    if(img && text && width && height && link){
        return (
            <Box className={`${styles.open_right_doors_item} open_right_doors_item  relative`}  style={style} >
                    <Image
                    loader={ImageLoader}
                    src={img}
                    alt={text}
                    width={width}
                    height={height}
                    />
                    <div className="home_open_right_doors_box absolute border px-3 py-3 border-white ">
                        <Link href={link}>
                            <a className=' text-white uppercase text-lg  '>
                                {text}
                            </a>
                        </Link>
                    </div>
            </Box>
        );
    }else{
        return <h4>Loading..</h4>
    }
    
}

export default React.memo(RightDoorGallery);