import React from 'react';
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from 'styles/client/InterestingGallery.module.scss';
// Next js
import Link from 'next/link'
import Image from 'next/image'

function HomeMagazineAdd(props) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <>
            <Container className="he_container">
                <Box className="he_magazine__add flex items-center justify-center  px-28">
                    <Box className={`he_magazine__add_single w-1/5 ${styles.bordered_hover}`}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-add-1.jpg"
                            alt="Picture of the author"
                            height={280}
                            width={280}
                        />
                    </Box>
                    <Box className={`he_magazine__add_single w-1/5 relative ${styles.bordered_hover}`}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-add-2.jpg"
                            alt="Picture of the author"
                            height={280}
                            width={280}
                        />
                    </Box>
                    <Box className={`he_magazine__add_single w-1/5 relative ${styles.bordered_hover}`}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-add-3.jpg"
                            alt="Picture of the author"
                            height={280}
                            width={280}
                        />
                    </Box>
                    <Box className={`he_magazine__add_single w-1/5 relative ${styles.bordered_hover}`}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-add-4.jpg"
                            alt="Picture of the author"
                            height={280}
                            width={280}
                        />
                    </Box>
                    <Box className={`he_magazine__add_single w-1/5 relative ${styles.bordered_hover}`}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-add-1.jpg"
                            alt="Picture of the author"
                            height={280}
                            width={280}
                        />
                    </Box>
                </Box>
            </Container>
            <Container className="he_container py-14 ">
                <Grid container  spacing={4} >
                    <Grid item xs={6}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-big-add-1.jpg"
                            alt="Picture of the author"
                            width={840}
                            height={658}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Image
                            loader={ImageLoader}
                            src="images/home-magazine-big-add-2.jpg"
                            alt="Picture of the author"
                            width={840}
                            height={658}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(HomeMagazineAdd);