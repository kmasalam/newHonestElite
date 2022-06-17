import React,{useEffect, useState,useMemo,useRef} from 'react';
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
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SearchBar from 'clientComponents/SearchBar'


function HomeNavigation({...allprops}) {
   
    
   const [mouseOver,setMouseOver] = useState(false);
    const menuItem = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    //
    //
    const handleMouseOver = ()=>{
        setMouseOver(true)
    }
    const handleMouseLeave = ()=>{
        setMouseOver(false)
    }

    const {navigationType} = allprops;

    function logit() {
        setScrollY(window.pageYOffset);
    }



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

   
    
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    if(navigationType === 1){
        return (
            <>
                <Box className={`navigationBar bg-black/[.20] ${styles.navigationBar} ${scrollY > 100 ? styles.make_me_dark : '' }  flex items-center justify-between pr-8 ${mouseOver && 'show_border'} `}>
                    <Box className="navigation_bar_left inline-flex">
                        <Box className="logo_area inline-flex items-center justify-center mr-7 border-r border-c6f6f mt-4 pl-[50px] pr-[30px]  " style={{
                            height: '70px',
                            width: 'initial'
                        }}>
                            <Link className='navbar_brand' href="/">
                                <a className=' text-white text-2xl'>
                                 <Image
                                className=''
                                loader={ImageLoader}
                                src="images/white-logo.png"
                                alt="Picture of the author"
                                width={55}
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
                                                <li key={i} className=" has_dropdown   "  ref={menuItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave} >
                                                    <Link href={`${item.link}`}>
                                                        <a className=' text-[12px] font-normal uppercase leading-4 px-2'>
                                                            {item.text}
                                                        </a>
                                                    </Link>
                                                    <PlayGroundMegaMenu/>
                                                   
                                                </li>
                                                
                                            )
                                        }else{
                                            return(
                                                <li key={i} onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave}  >
                                                    <Link href={`${item.link}`}>
                                                        <a className=' text-[12px] font-normal uppercase leading-4 '>
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
                                <Link href="/sign-in">
                                    <a className=' inline-flex mr-1'>
                                        <Image
                                            loader={ImageLoader}
                                            src="images/menu-icon-4.svg"
                                            alt="Picture of the author"
                                            width={18}
                                            height={20}
                                        />
                                 
                                <span className=" inline-flex uppercase rubik text-sm text-white font-normal">
                                            Log in
                                        </span>
                                        </a>
                                </Link>
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
                <Box className={` home_navigation_container type2 flex items-center justify-between absolute top-0 left-0 w-full z-50 px-[100px] ${mouseOver && 'show_border'} `} >
                    <Box className=" inline-flex items-center justify-center">
                        <Link href="/">
                            <a className='home_navigation_container__logo bg-black/40 mr-[25px]  inline-flex items-center justify-center'>
                                <Image
                                    loader={ImageLoader}
                                    src="images/banner-logo.png"
                                    alt="Picture of the author"
                                    width={120}
                                    height={65}
                                />
                            </a>
                        </Link>
                        <ul className="home_navigation_navbar type2 inline-flex items-center justify-center ml-1">

                            {
                                HomeNavSecondData && HomeNavSecondData.map((item,i)=>{
                                    return(
                                        <li key={i} className=" mr-[17px]"  >
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
                    <Box className=' w-[48rem] mr-auto pt-3 ml-[10px]'>
                        <SearchBar searchbarType={'borderedWhite'} pageType={'tube'}/>
                    </Box>
                    <Box className=" inline-block " >
                        <ul className=' inline-flex items-center' >
                            <li>
                                <Link href="/">
                                    <a className=' text-base text-white mr-5 inline-flex flex-col items-center justify-center '>
                                        <LoginIcon className=" inline-flex mr-2 "/>
                                        <span className=' text-sm'>
                                            Login
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <a className=' text-base text-white mr-5 inline-flex flex-col items-center justify-center '>
                                        <FileDownloadOutlinedIcon className=' relative text-3xl -scale-100'/>
                                        <span className=' text-sm'>
                                        Upload
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </>
        )
    }

    
}

export default React.memo(HomeNavigation);