import React from "react";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// Next js
import Link from "next/link";
import Image from "next/image";
//
import HonestEliteCustomPlayer from 'clientComponents/HonestEliteCustomPlayer'

import styles from "styles/client/ModellingGallery.module.scss";

function ModellingGallery(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <Container className="he_container">
        <h4 className=" text-c2121 text-lg capitalize pb-4">
          Modelling Gallery
        </h4>
      </Container>
      <Container className="he_container">
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Box
              className={` ${styles.he_modeling_gallery__info} px-14 relative py-28 he_modeling_gallery__info bg-primary flex items-center justify-center flex-col`}
            >
              <span className="bottom_left"></span>
              <span className="top_right"></span>
              <div className=" text-xl text-white rubik leading-8  w-8/12  text-center font-medium pb-8">
                <div>Promote & Vote for a Mode</div>
                <div>to win $20 000</div>
                <div>Respectfully Crowned</div>
              </div>
              <Image
                loader={ImageLoader}
                src="images/modelling_gallery_logo.png"
                alt="modelling gallery logo"
                height={75}
                width={131}
              />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Box className=" relative h-[480px] overflow-hidden mb-3  ">
              {/* <Image
                                loader={ImageLoader}
                                src="images/modelling_gallery_big_image.jpg"
                                alt="modelling gallery image"
                                height={499}
                                width={1025}
                            /> */}

              <Box className=" absolute top-0 w-full h-full">
                <HonestEliteCustomPlayer
                  hidePlayerControl={true}
                  videoSrc={"videos/Modeling.mp4"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default React.memo(ModellingGallery);
