import React from "react";
// Material Ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Next js
// Data
const _ = require("lodash");
//css
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "clientComponents/SearchBar";
import { RelationshipDiagonosisData } from "data/RelationshipDiagonosisData";
import RelationLoungesItem from "../RelationLoungesItem";

function RelationLounges(props) {
  const itemToLoad = 7;
  const [age, setAge] = React.useState("all");
  const [loungeItem, setLoungeItem] = React.useState(13);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const classes = useStyles();
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) => {
    e.preventDefault();
    setLoungeItem(loungeItem + itemToLoad);
  };

  return (
    <div>
      <Container className="he_container">
        <Grid container>
          <Grid item sm={5} lg={3}>
            <Box>
              <h4 className=" text-c2121 text-base md:text-lg lg:ext-xl capitalize pb-4">
                Relationship Diagnossis Lounges
              </h4>
            </Box>
          </Grid>
          <Grid item sm={7} lg={6}>
            <SearchBar searchbarType={"gray_form_box"} size={""} spacing={""} />
          </Grid>
        </Grid>
      </Container>
      <Container className=" he_container pt-6">
        <Box className={`  flex flex-wrap`}>
          {RelationshipDiagonosisData &&
            RelationshipDiagonosisData.map((item, i) => {
              if (age === "all" && i <= loungeItem) {
                return (
                  <RelationLoungesItem
                    key={i}
                    className=" relation_img "
                    src={item.img}
                    alt="relation image"
                    width={230}
                    height={208}
                    widthClasses="flex-[0_0_50%] max-w-[50%] sm:flex-[0_0_33.33%] sm:max-w-[33.33%] md:flex-[0_0_25%] md:max-w-[25%] xl:flex-[0_0_14.28%] xl:max-w-[14.28%] "
                  />
                );
              } else if (age === item.type && i <= loungeItem) {
                return (
                  <RelationLoungesItem
                    key={i}
                    className=" relation_img "
                    src={item.img}
                    alt="relation image"
                    width={230}
                    height={208}
                    widthClasses="flex-[0_0_50%] max-w-[50%] sm:flex-[0_0_33.33%] sm:max-w-[33.33%] md:flex-[0_0_25%] md:max-w-[25%] xl:flex-[0_0_14.28%] xl:max-w-[14.28%] "
                  />
                );
              }
            })}
        </Box>
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

export default RelationLounges;
