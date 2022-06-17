import React,{useEffect, useState,useMemo} from 'react';
import { Box } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LoginIcon from '@mui/icons-material/Login';
import BookIcon from '@mui/icons-material/Book';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
// Styles
// import { useStyles } from "./HomeNavigationStyle";
// User Defined
import styles from 'styles/client/HomeNavigation.module.scss'

import {navList, HomeNavSecondData} from 'data/MenuData'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import PlayGroundMegaMenu from 'clientComponents/PlayGroundMegaMenu'



function HomeNavigation({...allprops}) {
   
   
    const [scrollY, setScrollY] = useState(0);
    //
    const {navigationType} = allprops;

    function logit() {
        setScrollY(window.pageYOffset);
    }

    console.log('navigationType', navigationType)

    useEffect(()=>{

        function watchScroll(){
            window.addEventListener("scroll", logit);
        }

        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", logit);
        }

    },[])

    console.log('scrollY',scrollY)
    
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    if(navigationType === 1){
        return (
            <>
                <Box className={`bg-black/[.20] ${styles.navigationBar} ${scrollY > 100 ? styles.make_me_dark : '' }  flex items-center justify-between pr-8`}>
                    <Box className="navigation_bar_left inline-flex">
                        <Box className="logo_area inline-flex items-center justify-center mr-14 border-r border-c6f6f mt-4  " style={{
                            height: '70px',
                            width: '140px'
                        }}>
                            <Link className='navbar_brand' href="/">
                                <a>
                                <Image
                                className=''
                                loader={ImageLoader}
                                src="images/white-logo1.png"
                                alt="Picture of the author"
                                width={90}
                                height={50}
                                />
                                </a>
                            </Link>
                        </Box>
                        <div className={styles.navigationMenu} >
                            <ul className=" flex  ">
                                {
                                    navList && navList.map((item,i)=>{
                                        if(item.text.toLowerCase() == 'playground'){
                                            return(
                                                <li key={i} className=" has_dropdown   ">
                                                    <Link href={`${item.link}`}>
                                                        <a className=' text-sm font-normal uppercase leading-4 px-2'>
                                                            {item.text}
                                                        </a>
                                                    </Link>
                                                    <PlayGroundMegaMenu/>
                                                   
                                                </li>
                                                
                                            )
                                        }else{
                                            return(
                                                <li key={i} className="    ">
                                                    <Link href={`${item.link}`}>
                                                        <a className=' text-sm font-normal uppercase leading-4 '>
                                                            {item.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })
                                }
                                
                            </ul>
                        </div>
                    </Box>
                    <Box className='menubar_right inline-flex items-center justify-end '>
                        <ul className="menubar_right_nav inline-flex items-center justify-end">
                            <li className=' ml-8'>
                                <Link href="/">
                                    <a>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/menu-icon-1.svg"
                                            alt="Picture of the author"
                                            width={18}
                                            height={20}
                                        />
                                     
                                        
                                    </a>
                                </Link>
                            </li>
                            <li className=' ml-8'>
                                <Link href="/">
                                    <a>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/menu-icon-2.svg"
                                            alt="Picture of the author"
                                            width={20}
                                            height={20}
                                        />
                                    </a>
                                </Link>
                            </li>
                            <li className=' ml-8'>
                                <Link href="/">
                                    <a>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/menu-icon-3.svg"
                                            alt="Picture of the author"
                                            width={20}
                                            height={20}
                                        />
    
                                    </a>
                                </Link>
                            </li>
                            <li className=' ml-8 inline-flex flex-row '>
                                <Link href="/">
                                    <a className=' inline-flex mr-1'>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/menu-icon-4.svg"
                                            alt="Picture of the author"
                                            width={18}
                                            height={20}
                                        />
                                    </a>
                                </Link>
                                <span className=" inline-flex uppercase rubik text-sm text-white font-normal">
                                            Log in
                                        </span>
                            </li>
                            <li className=" relative ml-8 inline-flex flex-row items-center justify-start">
                                <Link href="/">
                                    <a className=' inline-flex mr-1'>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/upload.svg"
                                            alt="Picture of the author"
                                            width={18}
                                            height={20}
                                        />
    
                                    </a>
                                </Link>
                                <span className=" inline-flex uppercase rubik text-sm text-white font-normal ">
                                    Upload 
                                </span>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </>
        )
    } else{
        return(
            <>
                <Box className="home_navigation_container type2 flex items-center justify-between absolute top-0 left-0 w-full z-50">
                    <Box className=" inline-flex items-center justify-center">
                        <Link href="/">
                            <a className='home_navigation_container__logo bg-black/40 h-24 w-48 inline-flex items-center justify-center'>
                                <Image
                                    loader={ImageLoader}
                                    src="images/banner-logo.png"
                                    alt="Picture of the author"
                                    width={89}
                                    height={52}
                                />
                            </a>
                        </Link>
                        <ul className="home_navigation_navbar type2 inline-flex items-center justify-center ml-4">

                            {
                                HomeNavSecondData && HomeNavSecondData.map((item,i)=>{
                                    return(
                                        <li key={i} className=" mr-10">
                                            <Link href={item.link} >
                                                <a className=' text-white capitalize transition duration-500 px-3 inline-flex h-24 items-center justify-center  hover:bg-primary'>
                                                    {item.text}
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            
                            
                        </ul>
                    </Box>
                    <Box className=" inline-block mr-14" >
                        <ul className=' inline-flex items-center' >
                            <li>
                                <Link href="/">
                                    <a className=' text-base text-white mr-5 '>
                                        <LoginIcon className=" inline-flex mr-2"/>
                                        <span>
                                            Login
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <a className=' text-base text-white mr-5 '>
                                        <BookOutlinedIcon/>
                                        <span>
                                        Registar
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <a className=' bh text-base text-white  mr-5 border border-white px-3 py-3'>
                                        B.H
                                    </a>
                                </Link>
                            </li>
                            <li className=" sense relative -mt-8 ">
                                <Link href="/">
                                    <a className=' text-base text-white mr-20 ml-16 '>
                                        <BookOutlinedIcon/>
                                        <span className=" leading-4 rounded-sm upload_sensetional_content inline-flex text-center w-32 top-8 text-xs bg-primary px-2 py-2 absolute left-4 ">
                                        Upload Sensetional Video is prohibitted
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <span className="night_mode inline-flex h-10 w-11 bg-white inline-flex items-center justify-center">
                                    <NightlightOutlinedIcon className=" text-gray-600"/>
                                </span>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </>
        )
    }

    
}

export default React.memo(HomeNavigation);