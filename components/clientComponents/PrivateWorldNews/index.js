import React from 'react'
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//module
import PrivatePartyWorld from './PrivatePartyWorld';
import News from './News';

export default function index() {
  return (
      <>
        <Container className=" he_container">
            <Grid container spacing={2}>
                <Grid item md={4} className=" pt-20">
                    <News />    
                </Grid>
                <Grid item md={8}>
                    <PrivatePartyWorld />
                </Grid>
            </Grid>
        </Container>
      </>
  )
}
