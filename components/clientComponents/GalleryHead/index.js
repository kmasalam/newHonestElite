import React, { useState } from "react";
// Material Ui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import EduBoxScaffolding from "../EducationalVideo/EduBoxScaffolding";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { EducationalVideoDataCopy } from "data/EducationalVideoData";
import SectionTitle from "../SectionTitle";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Popover from '@mui/material/Popover';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
import SearchBar from "../SearchBar";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ED028C",
    fontFamily: "Rubik",
  },
  "& .MuiInput-underline:after": {
    border: "none",
    fontFamily: "Rubik",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&:hover fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
  },
});

function GalleryHead({ ...allprops }) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  

  const {
    hasSearchBar,
    handlePlayground,
    pageLink,
    bigText,
    categoryList,
    hasSorting,
    activeItem,
    hasCategory,
    isSearchPage,
    searchCtegory,
  } = allprops;

  if (!_.isEmpty(allprops)) {
    return (
      <>
        <Container className="he_container">
          <Grid container>
            <Grid item md={isSearchPage ? 2 : 6}>
              <Box>
                <Link href={pageLink}>
                  <a className=" ml-6">
                    <Image
                      className=" random page_header_img "
                      loader={ImageLoader}
                      src="images/merits-icon.png"
                      objectFit="contain"
                      alt="relation image"
                      width={51}
                      height={64}
                    />
                  </a>
                </Link>
                <h2 className="  text-c2121 font-semibold mt-3 capitalize  max-w-[50%]  ">
                  <div className="text-32 cooper" dangerouslySetInnerHTML={{ __html: bigText }}></div>
                </h2>
              </Box>
              <Box className=" text-left mt-3 ">
                <p className=" text-c6f6f  text-sm text-left ">
                  All options
                  <Link href="/">
                    <a className=" text-primary text-sm ">/video</a>
                  </Link>
                </p>
              </Box>
              {
                hasSearchBar && <Box className=" w-[600px] mr-[58px] mt-[30px]">
                  <SearchBar
                    searchbarType={"gray_form_box_little"}
                    size={""}
                    spacing={""}
                    searchCtegory={searchCtegory}
                  />
              </Box>
              }
              
            </Grid>
            {isSearchPage && (
              <Grid item md={9}>
                
                <Box className="flex h-full  items-start justify-end flex-col w-full">
                <Box className=" flex  items-center " >
                  <Box className=" flex items-start justify-between flex-wrap  drop-shadow-[1px_2px_5px_rgba(0,0,0,0.15)] bg-white py-2 pl-8 pr-2 rounded-md " style={{
                      width: `776px`
                  }}>
                    <Box
                      className=" flex items-center "
                      style={{
                        maxWidth: `40%`,
                        flex: `0 0 40%`,
                      }}
                    >
                      <span className=" text-base text-c2121 font-medium capitalize inline-flex">
                        Discover
                      </span>
                      <CssTextField
                        className=" text-sm rubik w-full"
                        size="small"
                        id="input-with-sx"
                        label="Theater, Concerts, Dance, Sports"
                      />
                    </Box>
                    <Box
                      className=" flex items-center  border-l-2 pl-3"
                      style={{
                        maxWidth: `35%`,
                        flex: `0 0 35%`,
                      }}
                    >
                      <span className=" text-base text-c2121 font-medium capitalize inline-flex">
                        In
                      </span>
                      <CssTextField
                        className=" text-sm rubik w-full"
                        size="small"
                        id="input-with-sx"
                        label="TMy Current Location"
                      />
                    </Box>
                    <Box
                      className="  inline-flex"
                      style={{
                        maxWidth: `25%`,
                        flex: `0 0 25%`,
                        height: `44px`,
                      }}
                    >
                      <Button
                        variant="contained"
                        className=" rounded-md min-w-full h-full w-full text-center  bg-primary text-white font-medium rubik text-base capitalize  "
                      >
                        Find Events
                      </Button>
                    </Box>
                  </Box>
                  <Button  
                  className=" ml-3 px-8 min-w-fit  bordered_btn py-3  text-base font-semibold text-primary capitalize bg-transparent " aria-describedby={id} variant="contained" onClick={handleClick} >
                        More Filter
                  </Button>
                    <style jsx global >{`
                        .bordered_btn{
                            border: 1px solid #6F6F6F !important;

                        }
                    `}</style>
                </Box>
              
                <Box>
                    <h5 className=" text-lg font-normal text-c2121 capitalize pt-5 pl-5">Now Showing Barlesque Event</h5>
                </Box>
                </Box>
                
                <Box>
                  <Popover
                      className="search_sorting"
                      anchorPosition={{ top: 0, left: 0 }}
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Box className=" px-6 py-4">
                         <Box className=" serch_popover_header flex items-center justify-between pb-4 pt-3">
                            <Button className=" text-c6f6f rubik capitalize text-base text-left min-w-fit max-w-fit px-0">
                                Reset
                            </Button>
                            <Button className=" text-c6f6f capitalize rubik text-base inline-flex items-center" onClick={handleClose}>
                                Close 
                                <CloseIcon/>
                            </Button>
                         </Box>
                         <Box>
                            <h4 className=" font-medium rubik text-lg ">
                              Dates
                            </h4>
                            <FormGroup className="flex flex-wrap flex-row  py-4  pl-0">
                                <FormControlLabel className="   mr-4 mb-2 text-base text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Anytime" />
                                <FormControlLabel className="   mr-4 mb-2 text-base text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Today" />
                                <FormControlLabel className="   mr-4 mb-2 text-base text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Tomorrow" />
                                <FormControlLabel className="   mr-4 mb-2 text-base text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Next 7 days" />
                                <FormControlLabel className="   mr-4 mb-2 text-base text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="Choose Custoom Dates" />
                            </FormGroup>
                         </Box>
                        <Box className=" border-t border-b ">
                            <Accordion className=" shadow-none">
                              <AccordionSummary
                                expandIcon={<><ExpandMoreIcon /></>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="px-0"
                              >
                                <h4 className=" font-medium rubik text-lg ">
                                    Vanue: USA
                                </h4>
                              </AccordionSummary>
                              <AccordionDetails className="p-0">
                                <FormGroup className="flex flex-wrap flex-row  py-4  pl-0">
                                    <FormControlLabel className=" flex-[0_0_50%] max-w-[50%] capitalize mr-0 inline-flex items-start   mb-2 text-sm text-c6f6f rubik"    control={<Checkbox className=" inline-flex mr-0 pr-1 pt-1" defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                    <FormControlLabel className=" flex-[0_0_50%] max-w-[50%] capitalize mr-0  inline-flex items-start   mb-2 text-sm text-c6f6f rubik"   control={<Checkbox className=" inline-flex mr-0 pr-1 pt-1" defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                    <FormControlLabel className="flex-[0_0_50%] max-w-[50%] capitalize mr-0 inline-flex items-start    mb-2 text-sm text-c6f6f rubik"   control={<Checkbox className=" inline-flex mr-0 pr-1 pt-1" defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                    <FormControlLabel className=" flex-[0_0_50%] max-w-[50%] capitalize mr-0 inline-flex items-start  mb-2 text-sm text-c6f6f rubik"   control={<Checkbox className=" inline-flex mr-0 pr-1 pt-1" defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                    <FormControlLabel className=" flex-[0_0_50%] max-w-[50%] inline-flex items-start capitalize mr-0   mb-2 text-sm text-c6f6f rubik"   control={<Checkbox className=" inline-flex mr-0 pr-1 pt-1 " defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                    <FormControlLabel className="   mr-4 mb-2 text-sm text-c6f6f rubik flex-[0_0_50%] max-w-[50%] capitalize mr-0"   control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="The Kennedy Centre - Centre Hall" />
                                </FormGroup>
                              </AccordionDetails>
                            </Accordion>
                         </Box>
                         <Box>
                                <FormGroup className="flex flex-wrap flex-row  py-4  pl-0">
                                    <FormControlLabel className=" flex-[0_0_33.33%] max-w-[33.33%] capitalize mr-0    mb-2 text-sm text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="0$ - 25$" />
                                    <FormControlLabel className=" flex-[0_0_33.33%] max-w-[33.33%] capitalize mr-0    mb-2 text-sm text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="$25 - 50$" />
                                    <FormControlLabel className=" flex-[0_0_33.33%] max-w-[33.33%] capitalize mr-0    mb-2 text-sm text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="$50 - $100" />
                                    <FormControlLabel className=" flex-[0_0_33.33%] max-w-[33.33%] capitalize mr-0    mb-2 text-sm text-c6f6f rubik" control={<Checkbox className=" inline-flex mr-0 pr-1" defaultChecked />} label="$100 - UP" />
                                </FormGroup>
                         </Box>
                      </Box>
                    </Popover>   
                    <style jsx global>{`
                        .search_sorting .MuiPaper-root.MuiPaper-elevation.MuiPopover-paper {
                          width: 535px;
                          height: 695px;
                          top: 20% !important;
                          left: 71% !important;
                      }
                      .search_sorting .MuiFormControlLabel-label{
                        font-family: 'Rubik', sans-serif !important;
                      }
                    `}</style>
                </Box>
              </Grid>
            )}
            {hasCategory && (
              <Grid
                item
                md={6}
                className=" flex flex-col items-center justify-end"
              >
                <Box className=" text-right">
                  {categoryList &&
                    categoryList.map((item, i) => {
                      if (item.text.toLowerCase() == activeItem.toLowerCase()) {
                        return (
                          <Button
                            key={i}
                            className=" gallery_head_button transition-all duration-500  bg-primary   text-white  capitalize font-medium  mb-5 ml-6 rounded-none  hover:bg-primary hover:text-white"
                            href={item.link}
                          >
                            {item.text}
                          </Button>
                        );
                      }
                      if(item.text.toLowerCase() == 'suggestion'){
                        return(
                          <Button
                            onClick={(e)=>handlePlayground(e)}
                            key={i}
                            className=" gallery_head_button transition-all duration-500     text-c6f6f  capitalize font-medium  mb-5 ml-6 rounded-none  hover:bg-primary hover:text-white"
                            href={item.link}
                          >
                            {item.text}
                          </Button>
                        )
                      }
                       else {
                        return (
                          <Button
                            key={i}
                            className=" gallery_head_button  rounded-none transition-all duration-500  bg-white  text-c6f6f  capitalize font-medium  mb-5 ml-6  hover:bg-primary hover:text-white"
                            href={item.link}
                          >
                            {item.text}
                          </Button>
                        );
                      }
                    })}
                </Box>
                  {
                    hasSearchBar && <Box className=" w-full flex items-center justify-end pt-[5px]">
                      <Button className=" drop-shadow-[0px_2px_3px_rgba(0,0,0,0.15)]  rounded-none bg-white w-[40px] h-[37px] min-w-fit  inline-flex items-center justify-center transition-all duration-300 group  hover:bg-primary " onClick={(e)=>handlePlayground(e)}>
                        <MenuOutlinedIcon className=" text-primary transition-all duration-300 group-hover:text-white "/>
                      </Button>
                  </Box>
                  }
                <style jsx global>{`
                  .gallery_head_button {
                    box-shadow: 2px 2px 1px rgb(0 0 0 / 20%);
                  
                  }
                `}</style>

                {hasSorting && (
                  <div className=" text-right w-full">
                    <Box className=" bg-ce8e8 inline-flex mb-3 inline-flex  ">
                      <IconButton>
                        <FormatListBulletedIcon />
                      </IconButton>
                      <IconButton>
                        <BorderAllIcon />
                      </IconButton>
                      <IconButton>
                        <ViewCompactOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <TableRowsOutlinedIcon />
                      </IconButton>
                    </Box>
                  </div>
                )}
                <style jsx global>{`
                  .gallery_head_button {
                    width: 135px;
                    height: 43px;
                    line-height: 43px;
                  }
                `}</style>
              </Grid>
            )}
          </Grid>
        </Container>
      </>
    );
  } else {
    return <h4>Loading..</h4>;
  }
}

export default GalleryHead;
