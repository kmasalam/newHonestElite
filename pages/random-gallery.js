import {useState, useEffect} from "react";
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
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import NewsTicker from 'clientComponents/NewsTicker'
import {DumpKeepData} from "data/DumpKeepData"
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import {RandomGalleryCategoryData} from 'data/RandomGalleryCategoryData'
import {NewsTickerData} from 'data/NewsTickerData'
import SearchBar from 'clientComponents/SearchBar'

const masonryOptions = {
  transitionDuration: 5000,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

function randomGallery(props) {
  const [open, setOpen] = useState(false);
  const [hitem,setHitem] = useState('')
  const itemToLoad = 8;
  const [viewableItem,setViewableItem] = useState(12)


  const handleClickOpen = (e,item) => {
    setHitem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) =>{
    e.preventDefault();
    setViewableItem(viewableItem+itemToLoad);
}



  return (
    <div className=" bg-cf9f9">
     <Dialog
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <style jsx global>{`
            .MuiPaper-root{
              max-width: 1040px;
            }
        `}</style>
          <GalleryHoverCard item={hitem} style={{}} />
      </Dialog>
      <div className="bg-white pt-8">
          <Container className=" he_container pb-3">
            <Grid container spacing={3}>
              <Grid item md={3}>
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
              <Grid item md={6} className=" flex items-center justify-center pt-3">
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
              <Grid item md={3} className=" text-right">
                <Box>
                  <Button className=" py-3 rounded-none px-3 bg-primary text-white text-sm capitalize">
                    Upload all related
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      {/* <div className=" bg-white py-3">
          <NewsTicker NewsTickerData={NewsTickerData} tickerType={'topBarWhite'}/>
        </div> */}
        <div className=" pt-10">
          <GalleryHead 
          hasSorting={true}
          hasCategory={true}
          activeItem={''}
          pageLink="/"
          bigText="Random <br/> Picture Gallery"
          />
      </div>
      <Container className=" he_container pt-8 ">
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"ul"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={true} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {RandomGalleryData &&
            RandomGalleryData.map((item, i) => {
              const randomHeight = _.random(100, 500);
            if(i <= (viewableItem-1)){
                return (
                    <li
                      className={`image-element-class  transition duration-500 `}
                      onClick={e=>handleClickOpen(e,item)}
                      key={i}
                      style={{
                        width: "calc(100% / 6 - 1rem)",
                        margin: "0.5rem",
                        height: `${randomHeight}px`,
                      }}
                    >
                      <Image
                        className=" random gallery_img transition duration-300  "
                        loader={ImageLoader}
                        src={item.galleryImg}
                        objectFit="cover"
                        alt="relation image"
                        layout="fill"
                      />
    
                      
                    </li>
                  );
            }
              
            })}
        </Masonry>
        <style jsx global>{`
            .image-element-class:hover{
                transform: scale(1.15);
                z-index: 5;
                box-shadow: 0px 0px 3px rgb(0 0 0 / 20%);
                padding: 10px;
                background: #fff;
                transition: all .30s linear;
            }
            .image-element-class:hover img{
                transform: scale(.955);
                transition: all .30s linear;
            }
      `}</style>
      </Container>
      <Container className="he_container pb-6 pt-6">
            <Box className=" text-center">
                <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                    <AddIcon className=" text-c6f6f text-6xl"/>
                </Button>
            </Box>
        </Container>
    </div>
  );
}

export default randomGallery;
