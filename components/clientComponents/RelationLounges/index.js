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
// Next js
import Link from "next/link";
import Image from "next/image";
// Data
const _ = require('lodash');
//css
import { useStyles } from "./RelationLoungesStyle";
import { RelationshipDiagonosisData } from "data/RelationshipDiagonosisData";
import AddIcon from "@mui/icons-material/Add";
import RelationLoungesItem from "../RelationLoungesItem";
import SearchBar from "clientComponents/SearchBar";

import styles from 'styles/client/RelationLounges.module.scss'

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
          <Grid item md={3}>
            <Box>
              <h4 className=" text-c2121 text-xl capitalize pb-4">
              Relationship Diagnossis Lounges
              </h4>
            </Box>
          </Grid>
          <Grid item md={6}>
              <SearchBar
              searchbarType={'gray_form_box'}
              size={''}
              spacing={''}
              />
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
                  style={{
                    maxWidth: '14.28%'
                  }}
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
                  style={{
                    maxWidth: '14.28%'
                  }}
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
