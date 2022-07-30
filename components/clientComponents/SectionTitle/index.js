import React from 'react';
// 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Material Ui
import Box from '@mui/material/Box';
// Next js

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