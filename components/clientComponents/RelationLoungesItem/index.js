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
// Next js
import Link from "next/link";
import Image from "next/image";
// Data
const _ = require('lodash');
import styles from 'styles/client/RelationLoungesItem.module.scss'

function RelationLoungesItem({...allprops}) {
    // const classes = useStyles();
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

    const {src,className, alt, width, height, style} = allprops;

    
    if(!_.isEmpty(allprops)){
        return (
            <div className={styles.relation_lounges_item} style={style}>
                <div className="relation_lounges_item_inner relative">
                    <Image
                    className={className}
                    loader={ImageLoader}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    
                    />
                </div>
            </div>
        )
    }else{
        return <h4>Loading..</h4>
    }
    
}

export default  React.memo(RelationLoungesItem);