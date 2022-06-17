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
import Link from 'next/link'
import Image from 'next/image';

function SectionTitle({...allprops}) {

    const {title, fullWidth,size, spacing} = allprops
    return (
        <Box>
            <h4 className={`text-c2121  rubik capitalize  font-medium ${size ? size : 'text-lg'} ${spacing ? spacing: 'pb-4'} `} >
            {title}
            </h4>
        </Box>
    );
}

export default React.memo(SectionTitle);