import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Next js
import Link from 'next/link'
import Image from 'next/image'
// data
import {BannerLeftMenusData} from 'data/BannerLeftMenus';
import styles from 'styles/client/BannerLeftMenus.module.scss';

function BannerLeftMenus({bannerType}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <>
            <Box className={`${styles.BannerLeftContainer} inline-flex flex-col   absolute`} style={{
                zIndex: '9'
            }}>
                {
                    bannerType == 1 && <div className=' ml-[15px] mb-[70px]'>
                    <Image
                    className=' '
                    loader={ImageLoader}
                    src={"images/left-logo.png"}
                    alt={"site logo"}
                    height={107}
                    width={181}
                    />
                    </div>
                }
                {
                    BannerLeftMenusData && BannerLeftMenusData.map((item,i)=>{
                        return(
                            <Link href={item.link}  key={i}>
                            <a 
                            className=' border border-white/[.50] pl-6 rounded-sm inline-flex items-center justify-start text-sm text-white rubik transition-all hover:bg-primary hover:border-primary hover:animate-pulse px-4  ' style={{
                                width: `193px`,
                                height: `55px`
                            }}>
                                <Image
                                className=' w-10 h-10  '
                                loader={ImageLoader}
                                src={item.icon}
                                alt={item.text}
                                height={24}
                                width={24}
                                />
                                <span className=" rubik inline-flex ml-4 font-normal text-sm capitalize" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                            </a>
                        </Link>
                        )
                    })
                }
                
            </Box>
        </>
    );
}

export default React.memo(BannerLeftMenus);