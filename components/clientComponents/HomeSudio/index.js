import { useEffect, useState } from "react";
// Material Ui
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// next js
import Image from "next/image";
import Link from "next/link";

//
import HonestEliteCustomPlayer from "../HonestEliteCustomPlayer";

import MenAllWomenTab from "clientComponents/MenAllWomenTab";
import { EducationalVideoData } from "data/EducationalVideoData";
import { LiveVideoCategoryData } from "data/LiveVideoCategoryData";
import EduBoxScaffolding from "../EducationalVideo/EduBoxScaffolding";
const _ = require("lodash");

function HomeSudio({ sectionTitle,menAllWomen }) {
  const [sortableItem, setSortableItem] = useState("");
  const [activeItem, setActiveItem] = useState("all");
  const itemToLoad = 6;
  const [viewableItem, setViewableItem] = useState(6);
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) => {
    e.preventDefault();
    setViewableItem(viewableItem + itemToLoad);
  };

  const handlesetfilter = (e) => {
    if (e) {
      setActiveItem(e);
    }
  };

  useEffect(() => {
    const emtptyarray = [];
    EducationalVideoData.map((item, i) => {
      item.category.map((si) => {
        emtptyarray.push(si);
      });
    });

    if (!_.isEmpty(emtptyarray)) {
      const sor = _.uniq(emtptyarray);
      setSortableItem(sor);
    }
  }, [EducationalVideoData]);

  return (
    <div className=" bg-cf0f0   pt-32 pb-24 ">
      <Container className=" he_container" spacing={3}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            {
              (menAllWomen && menAllWomen.length > 0) &&  <MenAllWomenTab menAllWomen={menAllWomen}/>
            }
            
            <Box className={`flex flex-wrap ml-8 h-full items-center  flex flex-wrap ml-8 h-full items-center ${menAllWomen && menAllWomen.length > 0 ? 'pt-0' : 'pt-5'}`}>
              <Box className="w-3/4 pr-5  -mt-16">
                <Box className="mb-4">
                  <Image
                    loader={ImageLoader}
                    src="images/live_studio.png"
                    alt="live stududio area"
                    width={172}
                    height={72}
                  />
                </Box>
                <Box className=" rounded-t-md overflow-hidden pb-2">
                  <HonestEliteCustomPlayer />
                  <Box className=" flex items-center justify-center drop-shadow-md bg-white pl-8 pr-6 py-4  rounded-b-md ">
                    <Image
                      className=" inline-flex"
                      loader={ImageLoader}
                      src="images/studio-art.svg"
                      alt="studio art "
                      width={35}
                      height={50}
                    />
                    <Link href="/">
                      <a className=" text-base font-semibold text-c2121 ml-3">
                        The Truth About How Much Women Talk — and Whether Men
                        Listen a debate take 6hour to decide its correct or not
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box className=" w-1/5 live_studio_video_list flex flex-col">
                {LiveVideoCategoryData &&
                  LiveVideoCategoryData.map((item, i) => {
                    if (i <= 5) {
                      return (
                        <Button
                          key={i}
                          variant="contained"
                          className="  py-4 rounded-sm shadow-md bg-white text-black capitalize text-left mb-2 transition duration-500  shadow-none rubik text-base hover:text-white hover:bg-primary  "
                        >
                          {item.text}
                        </Button>
                      );
                    }
                  })}
              </Box>

              {/*  */}
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <h4 className=" rubik capitalize text-24 font-normal text-primary font-medium mb-2">
                {sectionTitle}
              </h4>
            </Box>
            <Box className="sortable_item_parent">
              <ul className=" ml-0 flex items-center justify-start mb-6">
                <li
                  data-item="all"
                  onClick={(e) => handlesetfilter(e?.target.dataset.item)}
                  className={` capitalize cursor-pointer px-2 py-2 transition ml-2 ${
                    activeItem === "all"
                      ? "active border-b border-primary text-black "
                      : " text-c6f6f "
                  } `}
                >
                  All
                </li>
                {sortableItem &&
                  sortableItem.map((item, i) => {
                    return (
                      <li
                        key={i}
                        onClick={(e) => handlesetfilter(e?.target.dataset.item)}
                        data-item={item}
                        className={`capitalize cursor-pointer px-2 py-2 transition ml-2 ${
                          activeItem === item
                            ? " active border-b border-primary text-black "
                            : " text-c6f6f "
                        }  `}
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </Box>
            <Grid container spacing={2}>
              {EducationalVideoData &&
                EducationalVideoData.map((item, i) => {
                  if (activeItem === "all" && i <= viewableItem - 1) {
                    return (
                      <Grid item key={i} md={4}>
                        <EduBoxScaffolding
                          item={item}
                          boxPadding={"sm"}
                          className=" bg-white rounded-sm mb-6"
                          style={{}}
                          width={270}
                          height={120}
                          titleSize={"text-sm"}
                        />
                      </Grid>
                    );
                  }
                  if (
                    _.includes(EducationalVideoData[i].category, activeItem) &&
                    i <= viewableItem - 1
                  ) {
                    return (
                      <Grid item key={i} md={4}>
                        <EduBoxScaffolding
                          item={item}
                          boxPadding={"sm"}
                          className=" bg-white rounded-sm mb-6"
                          style={{}}
                          width={270}
                          height={120}
                        />
                      </Grid>
                    );
                  }
                })}
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className=" text-center">
                  <Button
                    variant="text"
                    onClick={hanleLoadItem}
                    className=" text-slate-500  "
                  >
                    <AddIcon className=" text-c6f6f text-6xl" />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSudio;
