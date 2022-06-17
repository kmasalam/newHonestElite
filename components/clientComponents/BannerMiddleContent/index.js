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
import SearchBar from '../SearchBar'
// Next js
import Link from "next/link";
import Image from "next/image";
import { RelationshipDiagonosisData } from "data/RelationshipDiagonosisData";

import styles from "styles/client/BannerMiddleContent.module.scss";
const _ = require("lodash");
const useStyles = makeStyles(
  (theme) => ({
    search_bar: {
      "& .MuiInputBase-root": {
        borderRadius: "0px !important",
      },
      "& .MuiSelect-select": {
        padding: "13px 15px !important",
      },
      "& .MuiOutlinedInput-input": {
        padding: "13.5px 14px !important",
        borderRadius: "0px !important",
      },
    },
  }),
  { index: 1 }
);

function BannerMiddleContent({ bannerType,hideDescription,hideLeftMenu }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("all");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div
      className={`${ hideLeftMenu ? styles.bannerMiddleBottom : styles.bannerMiddleContentArea} w-1/2   absolute `}
      style={{
        zIndex: "10",
      }}
    >
      <Box className=" w-full  ">
        
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className=" mt-6 pb-3"
        >
          {
            bannerType == 3 && <Grid item md={12}>
            <Box className=" flex items-center justify-center pb-[32px]">
              <Image
                loader={ImageLoader}
                src="images/banner-logo.png"
                alt="site logo"
                width={138}
                height={84}
              />
            </Box>
        </Grid>
          }
          <Grid item md={10}>

            <SearchBar searchbarType={'borderedWhite'}/>
            
          </Grid>
        </Grid>

        {
            bannerType === 1 ? <>
            <Grid container>
                    <Grid item xs={12}>
                      <h5
                        className={` ${styles.bannerMiddleTransparentText} text-center  font-bold text-lg py-3`}
                      >
                        THE HONEST ELITE REALTIONSHIP SYLLABUS
                      </h5>
                    </Grid>
                  </Grid>
                  
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={8}>
                      {
                        hideDescription ? <h4 className=" text-4xl pt-2 text-white text-center rubik font-semibold ">
                            Discover Events Around The World
                        </h4> : <p className=" text-lg text-white text-center rubik ">
                        Exploring 1st kiss, Dating, Love, Romans, Relationship issues,
                        Drama, Divorce, Healing, Comedy, Erotic Shows and Sensual
                        world
                      </p>
                      }
                    </Grid>
                  </Grid>
            </> : <>
            <Grid container>
              <Grid item xs={12}>
                <h5
                  className={` text-white  text-center  font-bold text-4xl py-3`}
                >
                 THE HONEST ELITE
                </h5>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={8}>
                <p className=" text-lg text-white text-center rubik ">
                Exploring Love, Romance , Sensation & Exploring worlds
                </p>
              </Grid>
            </Grid>
            </>
        }

      </Box>
    </div>
  );
}

export default  React.memo(BannerMiddleContent);
