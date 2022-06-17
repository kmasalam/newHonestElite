import React from "react";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Ticker from 'react-ticker'
// Next js
import Link from "next/link";
import Image from "next/image";

// Data
const _ = require('lodash');

function NewsTicker({...allprops}) {

    const  {NewsTickerData ,tickerType} = allprops

    if(!_.isEmpty(NewsTickerData) && !_.isElement(tickerType)){
        const newsTickerContent = NewsTickerData.map((item,i)=>{
            if(i<11){
                return(
                    <span 
                    className={` py-2 border-r ${tickerType == 'topBarWhite' ? ' border-r-c2121 text-c2121 hover:text-white' : 'border-r-white text-white'} news_ticker__box_content  uppercase text-xs w-40 inline-flex items-center justify-center tracking-wide  transition duration-300 text-center hover:bg-primary`} key={i}>
                        <Link href={item.link}>
                            <a>
                                {item.text}
                            </a>
                        </Link>
                    </span>
                )
            }
        })
        return (
            <>
                <Container maxWidth={tickerType == 'topBarWhite' ? 'true' : false} className={` relative ${tickerType == 'topBarWhite' ? ' he_container' : '-top-[58px] bg-[#290018]/[.49]'}`}>
                    <Ticker speed={7}>{({ index }) => <div className={`   flex items-center`}>{newsTickerContent}</div>}</Ticker>
                </Container> 
            </>
        );

    }else{
        return <h4>Loading..</h4>
    }

    
}

export default React.memo(NewsTicker);