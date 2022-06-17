import React, { useState } from 'react'
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import EduBoxScaffolding from '../EducationalVideo/EduBoxScaffolding';
import { EducationalVideoDataCopy } from "data/EducationalVideoData";
import SectionTitle from '../SectionTitle';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function PopularVideo({pageType}) {
    const itemToLoad = 12;
    const [personalLink,setPersonalLink] = useState(12)

    const hanleLoadItem = (e) =>{
        e.preventDefault();
        setPersonalLink(personalLink+itemToLoad);
    }
  return (
      <div>
        <Container className='he_container'>
            <SectionTitle
            title="Popular Video"
            size={` ${pageType == 'tube_page' ? 'text-24' : 'text-lg'}`}
            fullWidth={false}
            />
        </Container>
        <Container className=" he_container">
            <Grid container spacing={2}>
                {EducationalVideoDataCopy &&
                    EducationalVideoDataCopy.map((item, i) => {
                        return (
                        <Grid item key={i} md={2}>
                            <EduBoxScaffolding item={item} className=" bg-white mb-6" style={{}} width={270} height={140} titleSize={'text-sm'} />
                        </Grid>
                        )
                    })}
            </Grid>
        </Container>
        <Container className={` he_container ${pageType == 'tube_page' ? 'pb-[27px]' : 'pb-14' } `}>
                <Box className=" text-center">
                    <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                        <AddIcon className=" text-c6f6f text-6xl"/>
                    </Button>
                </Box>
            </Container>
    </div>
  )
}

