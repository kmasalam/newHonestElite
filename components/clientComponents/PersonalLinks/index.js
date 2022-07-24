import { useState } from "react";
// Material Ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Next js
import Image from "next/image";
import Link from "next/link";
// Data
import AddIcon from "@mui/icons-material/Add";
import { PersonalLinksData } from "data/PersonalLInksData";
import { useStyles } from "./PersonalLinksStyle";

function PersonalLinks(props) {
  const classes = useStyles();
  const itemToLoad = 12;
  const [personalLink, setPersonalLink] = useState(12);
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const hanleLoadItem = (e) => {
    e.preventDefault();
    setPersonalLink(personalLink + itemToLoad);
  };

  return (
    <div>
      <Container className="he_container pt-14 ">
        <Box>
          <h4 className=" text-c2121 text-xl capitalize pb-4">
            Personal links
          </h4>
        </Box>
      </Container>
      <Container className=" he_container ">
        <div className={`${classes.personal_links__container} flex flex-wrap `}>
          <Grid container>
            {PersonalLinksData &&
              PersonalLinksData.map((item, i) => {
                if (i <= personalLink - 1) {
                  return (
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      md={2}
                      lg={1}
                      key={i}
                      className="px-1 pb-2 "
                    >
                      <div className="personal_links__item relative">
                        <div className="presonal_links__item_inner relative ">
                          <Link href="/">
                            <a className=" relative h-[100px] sm:h-[80px] md:h-[100px] m lg:h-[100px] xl:[72px] px-1 flex">
                              <Image
                                className=" personal_link  rounded-md w-full "
                                loader={ImageLoader}
                                src={item.img}
                                alt="relation image"
                                layout="fill"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  );
                }
              })}
          </Grid>
        </div>
      </Container>
      <Container className="he_container pb-14">
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

export default PersonalLinks;
