import { memo, useEffect, useState } from "react";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
// next js
//
import { EducationalVideoData } from "data/EducationalVideoData";
import SectionTitle from "../SectionTitle";
import EduBoxScaffolding from "./EduBoxScaffolding";
const _ = require("lodash");


function EducationalVideo(props) {
  const [sortableItem, setSortableItem] = useState("");
  const [activeItem, setActiveItem] = useState("all");
  const itemToLoad = 8;
  const [viewableItem,setViewableItem] = useState(8)
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) =>{
    e.preventDefault();
    setViewableItem(viewableItem+itemToLoad);
}

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
    <div className=" pt-[0px] pb-12 -mt-[10px]  ">
      <Container className="  he_container">
          <Grid container>
              <Grid item>
              <SectionTitle title="Educational Videos" fullWidth={false} size={'text-24'} spacing={'pb-2'} />
              </Grid>
          </Grid>
      </Container>
      <Container className=" he_container">
        <Grid container>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {EducationalVideoData &&
            EducationalVideoData.map((item, i) => {
              if (activeItem === "all" && i <= (viewableItem-1)) {
                return (
                  <Grid item key={i} md={3}>
                    <EduBoxScaffolding item={item} className=" bg-white rounded-md mb-4" style={{}} width={415} height={200} titleSize={'text-base'} />
                  </Grid>
                );
              }
              if (_.includes(EducationalVideoData[i].category, activeItem) && i <= (viewableItem-1)) {
                return (
                  <Grid item key={i} md={3}>
                    <EduBoxScaffolding item={item} className=" bg-white rounded-md mb-4" style={{}} width={415} height={200} titleSize={'text-base'} />
                  </Grid>
                );
              }
            })}
        </Grid>
      </Container>
      <Container className="he_container pb-0 pt-[12px]">
            <Box className=" text-center">
                <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                    <AddIcon className=" text-c6f6f text-6xl"/>
                </Button>
            </Box>
        </Container>
    </div>
  );
}

export default memo(EducationalVideo);
