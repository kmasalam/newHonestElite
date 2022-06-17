import {useState} from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Next js
import Link from "next/link";
import Image from "next/image";
//
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
const _ = require("lodash");
//
import {RelationshipDiagonosisData} from 'data/RelationshipDiagonosisData'

//
import styles from 'styles/client/SearchBar.module.scss'



function SearchBar({...allprops}) {

    const [age, setAge] = useState(10);
   
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const ImageLoader = ({ src, width, quality }) => {
      return `/${src}?w=${width}&q=${quality || 75}`;
    };

    const {searchbarType,pageType,size,spacing,searchCtegory} = allprops;
    if(searchbarType == 'gray_form_box'){
        return(
          <>
            <Box
              className={`flex gray_form_box items-center justify-start  `}
            >
              <FormControl className=" w-32">
                <InputLabel id="demo-simple-select-label">
                  Quick Access
                </InputLabel>
                <Select
                  labelid="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Quick Access"
                  onChange={handleChange}
                >
                  {RelationshipDiagonosisData &&
                     _.uniqBy(RelationshipDiagonosisData,'type').map((item, i) => {
                      return (
                        <MenuItem
                          value={item.type}
                          className=" capitalize"
                          key={i}
                        >
                          {item.type}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
              <TextField
                className="w-9/12 rounded-none border border-c6f6f ml-2 search_field "
                id="outlined-basic"
                label="Search Video, TV series, Movies, Documentaries, Shows & Live"
                variant="outlined"
              />
              <Button
                variant="outlined"
                className="searchBar_btn  border border-c6f6f rounded-none h-12 ml-2"
              >
                <SearchIcon className=" text-c6f6f text-4xl" />
              </Button>
            </Box>
            <style global jsx>{`
              .gray_form_box .MuiInputBase-root{
                height: 44px;
                border-radius: 1px;
                
              }
              .gray_form_box .searchBar_btn{
                height: 44px !important;
                border-radius: 1px;
              }
              .gray_form_box .search_field .MuiInputLabel-root{
                  top: -5px;
              }
              .gray_form_box .MuiInputBase-root{
                  borderRadius: 0px !important;
              }
              .gray_form_box .MuiSelect-select{
                  padding: 13px 15px !important;
              }
              .gray_form_box .MuiOutlinedInput-input{
                  padding: 13.5px 14px !important;
                  borderRadius: 0px !important
              }
              .gray_form_box .searchBar_btn{
                  border: 1px solid #bbb !important;
                  width: 54px;
                  min-width: initial;
              }
              .gray_form_box .searchBar_btn svg{
                 height: 25px;
              }

            `}</style>
          </>
        )
    }else if(searchbarType == 'gray_form_box_little'){
      return(
        <>
          <Box
            className={`flex gray_form_box_little items-center justify-start  `}
          >
            
            <FormControl className=" w-[150px] relative">
                <span className=' absolute top-2 left-[5px]'>
                    <Image
                      className=" strait_icon  "
                      loader={ImageLoader}
                      src="images/strait-icon.svg"
                      objectFit="contain"
                      alt="relation image"
                      width={23}
                      height={23}
                    />
              </span>
              
              <Select
              onChange={handleChange}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className=" pl-4 rubik capitalize text-c6f6f text-sm"
            >
              <MenuItem value={1}>Strait</MenuItem>
              <MenuItem value={2}>Not Straight</MenuItem>
            </Select>
            </FormControl>
            <TextField
              className="w-9/12 rounded-none border border-c6f6f ml-2 search_field "
              id="outlined-basic"
              label="Search Video, TV series, Movies, Documentaries, Shows & Live"
              variant="outlined"
            />
            <Button
              variant="outlined"
              className="searchBar_btn  border border-c6f6f rounded-none h-12 ml-2"
            >
              <SearchIcon className=" text-c6f6f text-4xl" />
            </Button>
          </Box>
          <style global jsx>{`
            .gray_form_box .MuiInputBase-root{
              height: 44px;
              border-radius: 1px;
              
            }
            .gray_form_box .searchBar_btn{
              height: 44px !important;
              border-radius: 1px;
            }
            .gray_form_box .search_field .MuiInputLabel-root{
                top: -5px;
            }
            .gray_form_box .MuiInputBase-root{
                borderRadius: 0px !important;
            }
            .gray_form_box .MuiSelect-select{
                padding: 13px 15px !important;
            }
            .gray_form_box .MuiOutlinedInput-input{
                padding: 13.5px 14px !important;
                borderRadius: 0px !important
            }
            .gray_form_box .searchBar_btn{
                border: 1px solid #bbb !important;
                width: 54px;
                min-width: initial;
            }
            .gray_form_box .searchBar_btn svg{
               height: 25px;
            }

            /*gray search bar little*/

            .gray_form_box_little .MuiInputBase-root{
              height: 37px;
              border-radius: 1px;
              
            }
            .gray_form_box_little .searchBar_btn{
              height: 37px !important;
              border-radius: 1px;
            }
            .gray_form_box .search_field .MuiInputLabel-root{
                top: -5px;
            }
            .gray_form_box_little .MuiInputBase-root{
                borderRadius: 0px !important;
            }
            .gray_form_box_little .MuiSelect-select{
              padding: 5.5px 14px!important;
            }
            .gray_form_box_little .MuiOutlinedInput-input{
              padding: 5.5px 14px!important;
                borderRadius: 0px !important
            }
            .gray_form_box_little .searchBar_btn{
                border: 1px solid #bbb !important;
                width: 45px;
                min-width: initial;
            }
            .gray_form_box_little .searchBar_btn svg{
               height: 32px;
            }
            .gray_form_box_little .search_field .MuiInputLabel-root:not(.MuiInputLabel-shrink){
                top: -8px;
                font-size: 14px;
                font-style: italic;
            }
            

          `}</style>
        </>
      )
  }else if(allprops){
      return (
        <>
            <Box
              className={`${pageType == 'tube' && 'tubeSearch' } ${pageType == 'tube_private_party' &&  'tube_private_party'} ${pageType == 'single_tube' && 'single_tube_search'} flex items-center search_bar justify-start   ${searchbarType == 'borderedDark' ? styles.darkBordered : searchbarType == 'borderedWhite' ? styles.whiteBordered: searchbarType == 'lightBorderedDark' ? styles.lightBordered: searchbarType == 'lightFilledDark' ? styles.lightFilled : ''} `}
            >

              <style global jsx>{`
                
                  .tubeSearch.SearchBar_whiteBordered__aAB7x .MuiInputBase-root {
                    border-radius: 2px !important;
                    height: 48px !important;
                }
                  .tubeSearch .search_field .MuiInputLabel-formControl {
                    top: -5px;
                    font-size: 14px;
                }
                  .tubeSearch.SearchBar_whiteBordered__aAB7x .MuiButton-root{
                        height: 48px !important;
                        width: 52px;
                  }

                  .tube_private_party .MuiInputBase-root,.tube_private_party .MuiButton-root {
                    border-radius: 0px !important;
                  }

                  .tube_private_party .MuiButton-root {height: 51px !important;}
                  .single_tube_search .MuiInputBase-root{
                    height: 48px;
                    background: #fff;
                    border-radius: 0px;
                    border: none !important;
                  }
                  .single_tube_search .MuiOutlinedInput-notchedOutline{
                    border: none !important;
                  }
                  .single_tube_search .MuiInputLabel-formControl{
                      color: #6F6F6F;
                  }
                  
                  .single_tube_search .search_field .MuiInputLabel-formControl{
                    top: -4px;
                  }
                  .single_tube_search .search_field .MuiInputLabel-shrink.MuiInputLabel-formControl{
                    top: 0px;
                }
                  .single_tube_search .MuiButton-root{
                    height: 48px;
                    width: 58px;
                    min-width: initial;
                    background: #fff;
                  }
                  .single_tube_search .MuiButton-root:hover{
                    outline: none;
                    border: none;
                  }
                  .single_tube_search .MuiButton-root svg{
                      height: 24px;
                      width: 24px;
                      fill: #6F6F6F;
                  }

              `}</style>

              <FormControl className={` ${searchbarType == 'lightBorderedDark' ? ' w-44 ' : 'w-32'}  `}>
                <InputLabel id="demo-simple-select-label" >
                  Quick Access
                </InputLabel>
                <Select
                  className={`text-black flex w-full  `}
                  labelid="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Quick Access"
                  onChange={handleChange}
                >
                  {RelationshipDiagonosisData &&
                    _.uniqBy(RelationshipDiagonosisData, "type").map(
                      (item, i) => {
                        return (
                          <MenuItem
                            value={item.type}
                            className=" capitalize text-black"
                            key={i}
                          >
                            {item.type}
                          </MenuItem>
                        );
                      }
                    )}
                </Select>
              </FormControl>
              <TextField
                className={`w-9/12 search_field rounded-none border border-white ml-2  italic  `}
                id="outlined-basic"
                label="Search Video, TV series, Movies, Documentaries, Shows & Live"
                variant="outlined"
                size={searchbarType == 'lightBorderedDark' ? 'small' : 'normal'  }
              />
              <Button
                variant="outlined"
                className={`  ml-2 `}
              >
                <SearchIcon className={` ${pageType ? 'text-3xl' : 'text-4xl'} `}  />
              </Button>
            </Box>
        </>
    );
    }else{
      return <h4>loading..</h4>
    }
}

export default SearchBar;