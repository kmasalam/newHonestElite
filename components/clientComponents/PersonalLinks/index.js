import React, { useState } from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// Next js
import Link from 'next/link'
import Image from 'next/image'
// Data
import {useStyles} from './PersonalLinksStyle'
import {PersonalLinksData} from 'data/PersonalLInksData'
import AddIcon from '@mui/icons-material/Add';

function PersonalLinks(props) {

    const classes = useStyles();
    const itemToLoad = 12;
    const [personalLink,setPersonalLink] = useState(12)
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    const hanleLoadItem = (e) =>{
        e.preventDefault();
        setPersonalLink(personalLink+itemToLoad);
    }


    return (
        <div>
            <Container className="he_container pt-14 ">
                <Box>
                    <h4 className=" text-c2121 text-xl capitalize pb-4">
                    Personal links
                    </h4>
                </Box>
            </Container>
            <Container className=" he_container ">
                <div className={`${classes.personal_links__container} flex flex-wrap `}>
                   <Grid container>
                   {
                        PersonalLinksData && PersonalLinksData.map((item,i)=>{
                            if(i <= (personalLink-1)){
                                return(
                                    <Grid item md={1} key={i}>
                                        <div className="personal_links__item relative">
                                            <div className="presonal_links__item_inner relative ">
                                                <Link href="/">
                                                    <a>
                                                    <Image
                                                    className=" personal_link  rounded-md "
                                                    loader={ImageLoader}
                                                    src={item.img}
                                                    alt='relation image'
                                                    width={125}
                                                    height={72}
                                                    />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            }
                        })
                    }
                   </Grid>
                    
                </div>

            </Container>
            <Container className="he_container pb-14">
                <Box className=" text-center">
                    <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                        <AddIcon className=" text-c6f6f text-6xl"/>
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default PersonalLinks;