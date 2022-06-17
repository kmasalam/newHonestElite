import React, { useState } from 'react'

//icon
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ShareIcon from '@mui/icons-material/Share';
import Box from "@mui/material/Box";

export default function VideoInfo({...allprops}) {
    const [isStoredLibrary, setIsStoredLibrary] = useState(false)
    const {type,size} = allprops;

    const sotredLibrary =()=>{
        setIsStoredLibrary(!isStoredLibrary)
    }
  return (
    <Box className='vaideo-info py-8'>
        <ul className={`list-none flex ${type == 1 ? '' : ''} `}>
            <Button 
            className={`py-1 pr-4 rubik  text-black font-normal text-base capitalize hover:bg-transparent inline-flex items-center justify-center`} onClick={sotredLibrary}>
                <span className='pr-1 '>
                    {isStoredLibrary ? <FavoriteOutlinedIcon className=' xl' /> :<FavoriteOutlinedIcon  className=' text-xl'/>} 
                    </span>
                    Library
            </Button>
            <Button 
            className={` py-1 rubik font-normal  pr-4 text-black text-base capitalize hover:bg-transparent ${type == 2 && 'ml-auto'}  inline-flex items-center justify-center`}>
                <span className='pr-1'>
                    <AssistantPhotoIcon className=' text-xl'/>
                </span>Report Abuse
            </Button>
            <Button 
            className={`py-1 rubik font-normal  pr-4 text-black text-base capitalize inline-flex items-center justify-center hover:bg-transparent`}>
                <span className='pr-1'>
                    <ShareIcon className=' text-xl'/>
                </span>Share
            </Button>
        </ul>
    </Box>
  )
}
