import { useState, useEffect } from "react";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

// Next js
import Link from "next/link";
import Image from "next/image";
// Data
import { ShortRealityData } from "data/ShortRealityData";
// styles

// utility
const _ = require("lodash");

//
import ShortRealityVideoBox from "./ShortRealityVideoBox";

function ShortRealityVideo(props) {
  const itemToLoad = 7;
  const [viewableItem, setViewableItem] = useState(7);

  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) =>{
    e.preventDefault();
    setViewableItem(viewableItem+itemToLoad);
}

  return (
    <div className="pb-14">
      <Container className="he_container">
        <Box>
          <h4 className=" text-c2121 text-xl capitalize pb-4">
            Short Reality Videos
          </h4>
        </Box>
      </Container>
      <Container className="he_container">
        <Box className={` flex mb-2 flex-wrap short_reality_parent `}>
          {ShortRealityData &&
            ShortRealityData.map((item, i) => {
              if (i <= viewableItem - 1) {
                return (
                  <ShortRealityVideoBox
                    key={i}
                    item={item}
                    className="mb-14"
                    itemIndex={i}
                    style={{
                      maxWidth: `14.28%`,
                      flex: `0 0 14.28%`,
                    }}
                  />
                );
              }
            })}
        </Box>
      </Container>
      <Container className="he_container pb-0 pt-0">
              <Box className=" text-center">
                  <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                      <AddIcon className=" text-c6f6f text-6xl"/>
                  </Button>
              </Box>
          </Container>
    </div>
  );
}

export default ShortRealityVideo;
