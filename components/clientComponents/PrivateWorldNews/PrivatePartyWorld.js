import React, { useState } from 'react'
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import EduBoxScaffolding from '../EducationalVideo/EduBoxScaffolding';
import SectionTitle from '../SectionTitle';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from '../SearchBar';
//data
import { PrivatePartyWorldData } from "data/EducationalVideoData";


export default function PrivatePartyWorld() {

  return (
      <div>
        <Grid container className="pb-10">
                <Grid item md={8}>
                <SearchBar searchbarType={'borderedDark'} pageType={'tube_private_party'}/>
                </Grid>
            </Grid>
            <div className="">
            <SectionTitle
            size={`text-24`}
            spacing={'pb-6'}
            title="Private Party World"
            fullWidth={false}
            />
            </div>
            
            <Grid container spacing={2}>
                {PrivatePartyWorldData &&
                    PrivatePartyWorldData.map((item, i) => {
                        return (
                        <Grid item key={i} md={3}>
                            <EduBoxScaffolding boxPadding={'sm'} item={item} className=" bg-white mb-4" style={{}} width={270} height={140} titleSize={'text-sm'} />
                        </Grid>
                        )
                    })}
            </Grid>
       
    </div>
  )
}

