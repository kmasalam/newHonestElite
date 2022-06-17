import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';


function index({type,text,height,width,text,isLink,bg,text,px,py,color}) {

    if(type == 1){
        return <Button variant="text">Text</Button>;
    }
    if(type == 2){
        return <Button variant="contained" style={{
            height: `${height}`,
            padding: `${py}px ${px}px`,
            backgroundColor: `${bg}`,
            color: `${color}`
            
        }}>Text</Button>;
    }
    if(type == 3){
        return <Button variant="outlined">Text</Button>;
    }
    
}

export default index;