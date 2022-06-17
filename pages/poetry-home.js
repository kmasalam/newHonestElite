import { useState, useEffect,useRef,forwardRef,createRef } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";



import RemoveIcon from '@mui/icons-material/Remove';

// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
import SearchBar from "clientComponents/SearchBar";
import NewsTicker from "clientComponents/NewsTicker";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { NewsTickerData } from "data/NewsTickerData";
import PoetryCard from "clientComponents/PoetryCard";
import { PoetryData } from "data/PoetryData";
//
import KnowledgeBaseComponent from "clientComponents/KnowledgeBaseComponent";
import { KnowledgeBaseData } from "data/KnowledgeBaseData";
import { PlaygroundData } from "data/PlaygroundData";
import { PoetrySearchCategory } from "data/RelationshipDiagonosisData";
import ClickAwayListener from '@mui/material/ClickAwayListener';

import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const PlagounrItemBox = forwardRef(({href,number,text }, ref) => {
  console.log('href',ref);
  return (
    <Link href={href}   >
        <a className=" text-white rubik font-normal text-12 rubik py-[7px] leading-4 block px-[25px] pr[10px] transition-all duration-300 hover:scale-125 pb-12 " ref={ref}>
            {text}
        </a>
    </Link>
  )
})


function poetryHome(props) {
    const [activePlayground,setActivePlayground] = useState(true);
    const itemToLoad = 4;
    const [popularVideoItem, setPopularvideoItem] = useState(8);
    const playgroundImteToLoad = 1;
    const [playgroundItem,setPlaygroundItem] = useState(6)
    const [headerSlug,setHeaderSlug] = useState('');
    const scrollableEl = useRef(null);
    const newCreatableEl = useRef(null)

    const [poetryVideoItem,setPoetryVideoItem] = useState(18)

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

  const handlePlayground = (e) =>{
    e.preventDefault();
    setActivePlayground(!activePlayground);
  }

  useEffect(() => {
    //Runs only on the first render
   
  }, [setHeaderSlug]);

  const handleClickAway = () => {
    setActivePlayground(false);
  };


  const handleHeaderText = (e,item) =>{
    console.log('text', e, item)
  }

  const handleScrollDown = () =>{
    setPlaygroundItem(playgroundItem+1)
    let distance = newCreatableEl?.current?.offsetTop
    scrollableEl.current.scrollTo(0,distance)
  }



  console.log('new creat',newCreatableEl);
  console.log('scrollableEl',scrollableEl);

  return (
    <>
      <div className=" bg-cf9f9">
        <div className="bg-white pt-8">
          <Container className=" he_container pb-3">
            <Grid container spacing={3}>
              <Grid item md={3} className=" pt-5 pb-2">
                <Link href="/">
                  <a>
                    <Image
                      loader={ImageLoader}
                      src="images/dark-logo.png"
                      alt={"dark logo"}
                      width={92}
                      height={57}
                    />
                  </a>
                </Link>
              </Grid>
              <Grid
                item
                md={6}
                className=" flex items-center justify-center pt-3"
              >
                {/*  */}
                
                <Box className=" w-[46.80rem] mr-[58px] mt-[-6px]">
                  <SearchBar
                  searchbarType={'gray_form_box'}
                  size={''}
                  spacing={''}
                  />
                </Box>
                {/*  */}
              </Grid>
              <Grid item md={3} className=" text-right flex items-center justify-end pt-0">
                <Box className=" inline-flex items-center justify-end mr-2  ">
                  <Button className=" min-w-fit p-0 mr-5">
                    <ClassOutlinedIcon className=" text-black text-xl "/>
                  </Button>
                  <Button className=" min-w-fit p-0  mr-5">
                    <NotificationsNoneOutlinedIcon className=" text-black text-2xl "/>
                  </Button>
                  <Button className=" min-w-fit p-0  mr-5">
                    <EmailOutlinedIcon className=" text-black text-xl "/>
                  </Button>
                  <Button className=" min-w-fit p-0  mr-5">
                    <PersonOutlineOutlinedIcon className=" text-black text-2xl "/>
                  </Button>
                </Box>
                <Box className=" inline-flex">
                  <Button className=" py-3 rounded-none px-3 bg-primary text-white text-sm capitalize">
                    Upload all related
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className=" pt-10">
          <GalleryHead
            pageLink="/"
            activeItem={"video"}
            bigText="Poetry"
            hasCategory={true}
            categoryList={RandomGalleryCategoryData}
            handlePlayground={handlePlayground}
            hasSearchBar={true}
            searchCtegory={PoetrySearchCategory}
          />
        </div>
        <Container className={` he_container mb-6 mt-8 ${activePlayground && ' relative ' }`}>
            {
                activePlayground && <div className="playgroundOverlay absolute bg-[#000]/[.55] top-[22px]   z-10 " style={{
                    width: `calc(100% - 48px)`,
                    height: `calc(100% - 20px)`,
                }}></div>
            }
            {
                activePlayground && <ClickAwayListener    onClickAway={handleClickAway}>
                    <div  className="w-[211px] z-20 absolute top-[22px] left-[51px] "  >
                                <Button variant="contained" className=" bg-primary/[.66] shadow-none min-w-fit w-full rounded-none h-[40px] rubik font-medium ">
                                    Playground
                                </Button>
                                <div className=" bg-primary/[.66] mt-2 pt-[20px] pb-[10px] " >
                                    {
                                        playgroundItem > 0 && <Button variant="text" className=" min-w-fit w-full text-center" onClick={(e)=>setPlaygroundItem(playgroundItem-1)}>
                                        <RemoveIcon className=" text-white text-3xl"/>
                                    </Button>
                                    }
                                    <div className="playground_item_box h-[180px] overflow-y-auto" ref={scrollableEl}>
                                    {
                                        PlaygroundData && [...PlaygroundData].splice(0,playgroundItem).map((item,i)=>{
                                          console.log(playgroundItem,i+1);
                                            if(playgroundItem -1  === i){
                                              return(
                                                  <PlagounrItemBox
                                                  passHref
                                                  ref={newCreatableEl}
                                                  text={item.text}
                                                  key={i}
                                                  href={item.link}
                                                  />
                                              )
                                            }else{
                                              return(
                                                  <Link href={item.link} key={i} onClick={(e,item)=>handleHeaderText(e,item)} >
                                                      <a className=" text-white rubik font-normal text-12 rubik py-[7px] leading-4 block px-[25px] pr[10px] transition-all duration-300 hover:scale-125 ">
                                                          {item.text}
                                                      </a>
                                                  </Link>
                                              )
                                            }
                                        })
                                    }
                                    </div>
                                    <Button variant="text" className=" min-w-fit w-full text-center" onClick={(e)=>handleScrollDown(e)}>
                                        <AddIcon className=" text-white text-3xl"/>
                                    </Button>
                                </div>
                            </div>
                </ClickAwayListener>
            }
          <Grid container spacing={3}>
            {PoetryData &&
              [...PoetryData].splice(0, poetryVideoItem).map((item, i) => (
                <Grid item md={2}  key={i}>
                  <PoetryCard
                    size={"sm"}
                    item={item}
                    width={270}
                    height={146}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
        {/*  */}
        <Container className=" he_container pt-[5px] ">
          <Box className=" flex items-center justify-center ">
            
            {
                poetryVideoItem > 6 && 
                <Button variant="contained" className="  bg-transparent min-w-fit text-primary shadow-none p-0 mr-2" onClick={(e)=>setPoetryVideoItem(poetryVideoItem-6)} >
                <RemoveIcon className=" text-6xl"/>
            </Button>
            }
            <Button variant="contained" className=" bg-transparent min-w-fit text-primary shadow-none p-0  "  onClick={(e)=>setPoetryVideoItem(poetryVideoItem+6)}>
                  <AddIcon className=" text-6xl"/>
              </Button>
            
              
          </Box>
        </Container>
        {/*  */}
        {/*  */}
        <Container className="he_container pb-[70px] pt-[35px] ">
          <KnowledgeBaseComponent
            height={180}
            width={180}
            type={3}
            sliderData={KnowledgeBaseData}
          />
        </Container>
        {/*  */}
        <Container className=" he_container">
          <Grid container>
            <Grid item>
              <h5 className=" font-medium text-c2121 text-lg text-left py-6">
                Popular Video & Audios for you
              </h5>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {PoetryData &&
              [...PoetryData].splice(0, popularVideoItem).map((item, i) => (
                <Grid item md={3} key={item._id}>
                  <PoetryCard
                    size={"md"}
                    item={item}
                    width={415}
                    height={200}
                  />
                </Grid>
              ))}
          </Grid>
          {PoetryData && PoetryData.length <= popularVideoItem ? (
            <Grid item md={12} className=" text-center py-10 mb-4">
              <h4 className=" font-medium text-c2121 text-lg">
                No More Item To Load..
              </h4>
            </Grid>
          ) : (
            <Grid container>
              <Grid item md={12} className=" text-center py-10 mb-4">
                <Button
                  onClick={(e) =>
                    setPopularvideoItem(popularVideoItem + itemToLoad)
                  }
                >
                  <AddIcon className=" text-c6f6f text-6xl" />
                </Button>
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </>
  );
}

export default poetryHome;
