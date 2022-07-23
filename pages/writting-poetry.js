//
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Material Ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GalleryHead from "clientComponents/GalleryHead";
import SearchBar from "clientComponents/SearchBar";
import WrittingPoetryCard from "clientComponents/WrittingPoetryCard";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import { WrittingPoetryData } from "data/WrittingPoetryData";
// Next js
import Image from "next/image";
import Link from "next/link";
const _ = require("lodash");

function WrittingPoetry(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const HomeMenuList = [
    {
      text: "Love",
      link: "/",
    },
    {
      text: "Cheating",
      link: "/question-answer-relation",
    },
    {
      text: "Abuse",
      link: "/",
    },
    {
      text: "Eractal Discfunction",
      link: "/",
    },
    {
      text: "Grew Apart",
      link: "/",
    },
    {
      text: "Lifestyles",
      link: "/",
    },
    {
      text: "Fashion",
      link: "/",
    },
    {
      text: "Wealth & Money",
      link: "/",
    },
    {
      text: "Shopping ",
      link: "/",
    },
    {
      text: "Sexual ",
      link: "/",
    },
  ];

  return (
    <div className=" bg-cf9f9">
      <div className="bg-white pt-6">
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
            <Grid
              item
              md={6}
              className=" flex items-center justify-center pt-3"
            >
              {/*  */}
              <Box className=" w-[46.80rem] mr-[58px] ">
                <SearchBar
                  searchbarType={"gray_form_box"}
                  size={""}
                  spacing={""}
                />
              </Box>
              {/*  */}
            </Grid>
            <Grid item md={3} className=" text-right">
              <Box>
                <Button className=" rounded-none py-3 px-3 bg-primary text-white text-sm capitalize">
                  Upload all related
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className=" pt-10">
        <GalleryHead
          activeItem={"written"}
          hasSortable={false}
          hasCategory={true}
          pageLink="/"
          bigText="Poetry"
          categoryList={RandomGalleryCategoryData}
        />
      </div>
      <Container className=" he_container pt-16 pb-16 ">
        <Grid container spacing={4}>
          <Grid item md={2}>
            <Box className=" shadow-md bg-white px-3 py-5  top-0 sticky ">
              <h4 className=" text-black text-xl  font-medium capitalize pb-0 px-3">
                Categories
              </h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                {HomeMenuList &&
                  HomeMenuList.map((item, i) => {
                    return (
                      <ListItem disablePadding key={i}>
                        <ListItemButton component="a" href={item.link}>
                          <ListItemText
                            primary={item.text}
                            className=" text-sm text-c6f6f font-regular transition duration-300 rubik hover:text-black hover:font-medium"
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box className=" pl-6">
              <Grid container spacing={4}>
                {WrittingPoetryData &&
                  [...WrittingPoetryData].splice(0, 9).map((item, i) => (
                    <Grid item md={4} key={i}>
                      <WrittingPoetryCard
                        item={item}
                        height={246}
                        width={415}
                        number={i}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default WrittingPoetry;
