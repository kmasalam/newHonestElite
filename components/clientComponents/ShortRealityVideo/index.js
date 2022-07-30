import { useState } from "react";
// Material Ui
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// Next js
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

  const hanleLoadItem = (e) => {
    e.preventDefault();
    setViewableItem(viewableItem + itemToLoad);
  };

  const style = {
    // Adding media query..
    "@media (min-width: 1280px)": {
      maxWidth: `14.28%`,
      flex: `0 0 14.28%`,
    },
    "@media (min-width: 768px)": {
      maxWidth: `25%`,
      flex: `0 0 25%`,
    },
    "@media (min-width: 300px)": {
      maxWidth: `50%`,
      flex: `0 0 50%`,
    },
  };

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
        <Box
          className={` flex mb-2 flex-wrap short_reality_parent items-center justify-center `}
        >
          {ShortRealityData &&
            ShortRealityData.map((item, i) => {
              if (i <= viewableItem - 1) {
                return (
                  <ShortRealityVideoBox
                    key={i}
                    item={item}
                    className="mb-14"
                    itemIndex={i}
                    withClass="flex-[0_0_68%] max-w-[68%] sm:flex-[0_0_33.33%] sm:max-w-[33.33%]  md:flex-[0_0_25%] md:max-w-[25%] lg:flex-[0_0_14.28%] lg:max-w-[14.28%]"
                  />
                );
              }
            })}
        </Box>
      </Container>
      <Container className="he_container pb-0 pt-0">
        <Box className=" text-center">
          <Button
            variant="text"
            onClick={hanleLoadItem}
            className=" text-slate-500 "
          >
            <AddIcon className=" text-c6f6f text-6xl" />
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default ShortRealityVideo;
