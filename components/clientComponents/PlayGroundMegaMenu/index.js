import { useState, useEffect } from "react";
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
const _ = require("lodash");

function index(props) {
  return (
    <>
      <Box className=" fixed left-0 w-full q bg-white he_fullscreenmenu  opacity-0 p-4 top-[101px] ">
      
        <Grid container className=" border ">
          <Grid item md={2} className=" border-r">
            <Box className="p-4">
              <h4 className=" text-sm font-semibold uppercase text-c6666 ml-2">
                CATEGORIES
              </h4>
              <Link href="/human-trafficking" >
                <a className=" text-c6f6f text-xs capitalize pl-2 font-semibold ">
                Fight Sex/ Human Trafficking
                </a>
              </Link>
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                  Hot Line

                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                  Donations
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                  Upload Tips/ Info/ Pics/ 
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                  Videos
                  </a>
                </Link>
                <Link href="/random-gallery">
                  <a className=" text-c6666 font-medium rubik text-xs py-1 px-0 h-in h-min ">
                  Unanimously
                  </a>
                </Link>
              </div>
              <h6>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-2 px-0 h-in h-min font-semibold ">
                    Forgiveness in Relationship
                  </a>
                </Link>
              </h6>
              <h6 className=" font-semibold text-c6f6f text-xs">
              <Link href="/educational">
                  <a>
                <span className=" text-primary mr-2 inline-flex">
                  THE
                </span>
               
                    Educational
                  </a>
                </Link>
                </h6>
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    All
                  </a>
                </Link>
                <Link href="/podcast">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Podcast
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Sexual harassment
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Lawyers
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Sex Therapist
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min -ml-6 ">
                    Community Help & Support Group
                  </a>
                </Link>
              </div>
              <h6 className=" font-semibold text-c6f6f text-xs mt-3">
                Relationships
              </h6>
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Interracial
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Booty Call
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Triangles
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Open
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Entanglement
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min  ">
                    Diagnosis Lounges
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min  ">
                    Dysfunctional & Toxic
                  </a>
                </Link>
              </div>

              <Link href="/question-answer-home">
               <a>
              <h6 className=" font-semibold text-c6f6f text-xs mt-2">
                <span className=" text-primary">
   
                  LOVE </span>  Questions & Suggestions      

              </h6>

              </a>

              </Link>
              
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Relationship/ sex issues
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Phone & Relationships
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Why am I still single/ Unmarried
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Divorce
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Marriage Counselors
                  </a>
                </Link>
              </div>
              <Link href="/Heart%20Broken%20&%20Disappointed">
                  <a>
              <h6 className=" font-semibold text-primary text-xs">
                Heart Broken/ Disappointed
              </h6>
              </a>
               </Link>
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/dump-keep-home">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Keep or Dump him/ Her
                  </a>
                </Link>
              </div>
              <h6 className=" font-semibold text-c6f6f text-xs">Shopping</h6>
              <div className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Sex toys New Inventions
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Stripper Attire
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Lingerie
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Food Design Accessories
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    New Sex Invention
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Dolls
                  </a>
                </Link>
                <Link href="/">
                  <a className=" text-c6f6f text-xs py-1 px-0 h-in h-min ">
                    Consumes
                  </a>
                </Link>
              </div>
            </Box>
          </Grid>
          <Grid item md={2} className=" border-r" >
              <Box className="p-4">
                <h4 className=" text-sm font-semibold uppercase text-c6666">
                    MIGHT BE INTERESTING
                </h4>
                <h6 className=" text-xs text-c2121 font-semibold">
                <Link href="/poetry-home">
                   <a>
                    Poetry
                   </a>
               </Link>
                   

                </h6>
                <h6 className=" text-ellipsis text-primary text-xs font-semibold">
                    THE Relationship Diary
                </h6>
                <Link href={'/astrology-hororscope'}>
                  <a className=" text-c6666 text-xs capitalize font-semibold flex">
                  Astrology/ Horoscope
                  </a>
                </Link>
                <h6 className=" text-c6666 text-xs capitalize font-semibold">
                Sexy Jokes
                </h6>
                <Box className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/Bedtime%20Time%20stories">
                        <a className=" text-xs text-c6f6f capitalize py-1">
                        Bedtime Stories
                        </a>
                    </Link>
                    <Link href="/Caught%20cheating%20confessions">
                    <a className=" text-xs text-c6f6f capitalize py-1">
                        Caught cheating confessions
                        </a>
                    </Link>
                    <Link href="/Drunk%20Girls%20Tales">
                    <a className=" text-xs text-c6f6f capitalize py-1">
                        Drunk girls tales

                        </a>
                    </Link>
                    <Link href="/Pickup%20Lines%20Tutorials">
                    <a className=" text-xs text-c6f6f capitalize py-1">
                        Pickup lines tutorials
                        </a>
                    </Link>
                </Box>
                <h6 className=" text-xs text-c6666 capitalize font-semibold">
                    What People say to get Laid
                </h6>
                <Box className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/">
                        <a className=" text-xs text-primary capitalize py-1">
                        Sex initiation fails
                        </a>
                    </Link>
                </Box>
                <h6 className=" text-primary text-xs font-semibold">
                100 Sex Positions 1mnth Challenge
                </h6>
                <Box className="mega_menu_inner_box pl-6 flex flex-col pl-3 pb-2">
                  <Link href="/Best%20sex%20I%20ever%20had">
                        <a className=" text-xs text-c6f6f">
                        Best sex I ever had
                        </a>
                    </Link>
                </Box>
                {/*  */}

                <Link href="/Lets%20talk%20about%20Three%20some">
                <a>

                <h6 className=" text-xs text-c6f6f font-semibold ">
                Lets talk about <span className=" text-primary">3 Some (Dos & Don’ts)</span>
                </h6>
                </a>
                </Link>



                <Box className="mega_menu_inner_box pl-6 flex flex-col pb-2">
                <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Entanglement Dating
                        </a>
                    </Link>
                </Box>
                {/*  */}
                {/*  */}
                <h6 className=" text-xs  font-semibold text-c6f6f">
                Stupid things men do for PU**Y
                </h6>
                <Box className="mega_menu_inner_box pl-6 flex flex-col">
                <Link href="/random-gallery">
                        <a className=" text-xs text-c6f6f"> 
                        Random Pictures
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Sexual Quotes
                        </a>
                    </Link>
                </Box>
                {/*  */}
                <h6 className=" text-xs  font-semibold text-primary pb-3 ">
                Valentine’s Day Ideas
                </h6>
                {/*  */}
                {/*  */}

                <Link href="/How%20I%20lost%20my%20Virginity">
                  <a>
                <h6 className=" text-xs  font-semibold text-c6f6f pb-3">
                How I lost my Virginity
                </h6>
                </a>
               </Link>

                {/*  */}
                <h6 className=" text-xs  font-semibold text-c6f6f">
                Models Gallery
                </h6>
                <Box className="mega_menu_inner_box pl-6 flex flex-col">
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Strippers
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Cell cutties
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Adult stars
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Video vixens
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Studs
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Lesbians
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Gay
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Disabled/ Seniors 
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Little People
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Full Figure Zone
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" text-xs text-c6f6f">
                        Male Pageant
                        </a>
                    </Link>
                </Box>
                {/*  */}
              </Box>
          </Grid>
          <Grid item md={2} className=" border-r">
              <Box className="p-4">
                  <h4 className=" text-sm font-semibold uppercase text-c6666 mb-2">
                    ART & SHOWS 
                  </h4>
                  <h5 className=" text-xs font-semibold uppercase text-primary mb-1">
                  TALENT SEARCH COMPETITION
                  </h5>
                  <h6 className=" text-xs capitalize text-c6f6f mb-1 font-semibold">
                    Naked Yoga
                  </h6>
                  <h6 className=" text-c6f6f text-xs capitalize mb-1 font-semibold">
                    Talk Shows
                  </h6>
                  <h6 className=" text-c6f6f text-xs capitalize mb-1 font-semibold">
                  Erotic Shows
                  </h6>
                  <h6 className=" text-c6f6f text-xs capitalize mb-1 font-semibold">
                  Couples Night out
                  </h6>
                  <Box className="mega_menu_inner_box pl-6 flex flex-col">
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Intimacy Coach
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Body Art
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Comedy
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Burlesque
                        </a>
                      </Link>
                  </Box>
                  <h6 className=" text-c6f6f text-xs capitalize mb-2 font-semibold">
                  Stripper Convention
                  </h6>
                  <h6 className=" text-c6f6f text-xs capitalize mb-2 font-semibold">
                  Food Prep Shows

                  </h6>
                  <h6 className=" text-c6f6f text-xs capitalize mb-2 font-semibold">
                  Food Culinary Pics & Sells
                  </h6>
                  <Box className="mega_menu_inner_box pl-6 flex flex-col">
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Entire Gallery
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Cakes
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Drinks
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Plants
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Exotic Food Entries
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Restaurants around the world
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Sexiest Commercials
                        </a>
                      </Link>
                  </Box>
                  <Box className=" text-xs text-white px-1 bg-light-primary inline-flex mr-2">
                      <span className="bg-light-primary text-white uppercase font-bold inline-flex px-2  ">THE</span>
                      Radio Show
                  </Box>
                  <Link href="/">
                    <a className=" text-c6f6f text-xs ml-3 flex" >
                    Uncle Lies
                    </a>
                  </Link>
                  <Link href="/Surgeries">
                    <a>
                  <h6 className=" text-c6666 text-xs capitalize mb-1 font-semibold">
                  Surgeries
                  </h6>
                  </a>
                 </Link>

                  <Box className="mega_menu_inner_box pl-6 flex flex-col">
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Booty Implants
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Breast Enlargements
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Plastic Surgeries
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        6 Pack
                        </a>
                      </Link>
                  </Box>
                  <Link href="/Jealous">
                    <a className=" text-c6666 text-xs capitalize mb-1 font-semibold flex">
                    Jealous
                    </a>
                  </Link>
                  <Link href="/Single%20Mothers">
                  <a className=" text-c6666 text-xs capitalize mb-1 font-semibold flex">
                    Single Mothers
                    </a>
                  </Link>
                  <Link href="/Taboo">
                  <a className=" text-c6666 text-xs capitalize mb-1 font-semibold flex">
                  Taboo
                  </a>
                  </Link>
              </Box>
          </Grid>
          <Grid item md={2} className=" border-r">
            <Box className="p-4">
                <h4 className=" text-sm font-semibold uppercase text-c6666 mb-2">
                NEWS
                  </h4>
                  <h5 className=" text-c6666 font-semibold text-xs ">
                  Situation Room <span className=" bg-light-primary text-white capitalize px-2">Live</span>
                  </h5>
                  <Box className=" bg-light-primary text-xs uppercase inline-flex text-white ml-4 ">
                      <span className="text-white font-bold inline-flex px-2">THE</span>
                      Breaking News
                  </Box>
                  <h6 className=" text-c6666 text-xs capitalize mb-1 font-semibold">
                  Naked News
                  </h6>
                  <h6 className=" text-c6666 text-xs capitalize mb-2 font-semibold">
                  Weather Report
                  </h6>
                  <Box className="mega_menu_inner_box pl-6 flex flex-col">
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Demonstrations
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex "> 
                        Foster
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Sista
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex -ml-6 ">
                        Protesting Me too movement
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex  mb-2">
                        Gay Rights
                        </a>
                      </Link>
                    </Box>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ">
                      News Feed/ Debate Chat
                      </a>
                    </Link>
                    <h6 className=" text-c6666 text-xs capitalize mb-2 font-semibold">
                    List of Celebs sued on sex charges
                  </h6>
                    <h6 className=" text-primary font-semibold text-xs capitalize mb-2">
                    Celeb side, of what really happened
                  </h6>
                  <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ">
                      Lesbians Taking over
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ">
                      After Effects of Masturbation
                      </a>
                    </Link>
                    <h6 className=" text-c6f6f font-semibold text-xs capitalize mt-2 mb-2">
                    Resorts
                  </h6>
                  <Box className="mega_menu_inner_box pl-6 flex flex-col">
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex "> 
                        Exotic
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Nudist
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" text-xs text-c6f6f font-normal flex ">
                        Romantic Gateway

                        </a>
                      </Link>
                     
                    </Box>
                    <Link href="/">
                      <a className=" text-xs text-c6666 font-semibold flex ">
                      Health
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ">
                      Did you know? NEWSFEED
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex font-semibold ">
                      Forums & Chat
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ml-3 ">
                      Relationship issues Judges

                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex ml-3 ">
                      I got something to say
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-semibold flex mt-2 ">
                      Successful functional relationships
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-primary font-semibold flex ">
                      Relationship Stress Confessions
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-semibold flex ">
                      Baby Shower Chronicals
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-semibold flex ">
                      Thank you Boy-Girl friend/
Hubby /Wife
                      </a>
                    </Link>
                    
            </Box>
          </Grid>
          <Grid item md={2} className=" border-r">
            <Box className="p-4">
                <h4 className=" text-sm font-semibold uppercase text-c6666 mb-2">
                FANTASIES WEIRD & 
DIFFERENT
                  </h4>
                  <Link href="/">
                      <a className=" text-xs text-c6f6f font-semibold flex  ">
                      Fantasies
                      </a>
                    </Link>
                    <Link href="/">
                    <a className=" text-xs text-c6f6f font-semibold flex ">
                      Foot Fetish
                      </a>
                    </Link>
                    <h6 className=" text-xs text-c6666 font-semibold flex  mt-2">
                    Weird Romans
                    </h6>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Food turn on

                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Pain
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4  hover:text-primary ">
                      Orgasm
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4  hover:text-primary">
                      Whipping
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex  pl-4 hover:text-primary">
                      Slave
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      BDSM
                      </a>
                    </Link>
                    <h6 className=" text-xs text-c6666 font-semibold flex  ">
                    DIFFERENT
                    </h6>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Professional Cuddlier
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Party world/ Pool
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Nuru Massage
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Fire Massage
                      </a>
                    </Link>
                     <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex  pl-4 hover:text-primary">
                      Oil Massage
                      </a>
                    </Link> <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      SlapFest
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4  hover:text-primary">
                      Bikini Boxing
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex  pl-4 hover:text-primary">
                      Oil Wrestling
                      </a>
                    </Link>
                    <h6 className=" text-xs text-c6666 font-semibold flex mt-2  ">
                    MISC
                    </h6>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Obsessions
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 ">
                      Sex Predators
                      </a>
                    </Link>
                    <h6 className=" text-xs text-primary font-semibold flex mb-3 pt-3 ">
                    ALL SPORTS
                    </h6>
                    <h6 className=" text-xs text-c6666 font-semibold flex  ">
                    OTHER
                    </h6>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Why ?
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-primary font-normal flex pl-4 hover:text-primary ">
                      Honeymoon Sex Interviews
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Baby Mama Drama
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Prison & Love
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      T.H.E Dictionary
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Strong woman beliefs that
                      </a>
                    </Link>
                    <Link href="/">
                      <a className=" text-xs text-c6f6f font-normal flex pl-4  hover:text-primary">
                      delays their settling in Marriages
                      </a>
                    </Link> 
            </Box>
          </Grid>
          <Grid item md={2}>
                <Box className="p-4">
                <h4 className=" text-sm font-semibold uppercase text-c6666">
                    T.V LIVE & VIDEOS
                  </h4>
                  <h5 className=" text-c2121 capitalize text-sm font-semibold">
                    <span className=" text-primary">
                        T.V.
                    </span> 
                    Documentaries
                  </h5>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                        Series
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Erotic Music
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Erotic Music
                      </a>
                  </Link>
                  <Link href="/">
                      <a className=" flex relative text-c6666 font-semibold text-xs">
                      <span className=" h-5 w-5 bg-light-primary rounded-full absolute -left-1  "></span>
                        <span className=" text-white text-10 mt-1 relative font-light ">
                            Live
                        </span>
                        Studio
                      </a>
                  </Link>
                  
                  <Link href="/">
                  <a className=" text-sm text-c6f6f font-normal flex pl-4 hover:text-primary mb-2 ">
                      Informationals
                      </a>
                  </Link>
                  <h6 className=" text-xs text-c6666 font-semibold flex ">
                    <span>
                        THE
                    </span>
                    <span className=" text-primary inline-flex ml-1">
                    Love
                    </span>
                        Sensual
                        <span className=" text-primary inline-flex ml-1">
                        Videos
                        </span>
                  </h6>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                          All
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                          Humor
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Story Videos
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      One of a kind Talents
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Bachelor/ Bachelorette Parties
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-primary font-normal flex pl-4 hover:text-primary ">
                      Random Feed Videos
                      </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                      Different Weddings
                      </a>
                  </Link>
                  <h6 className=" text-xs text-c6666 font-semibold flex mt-3 mb-1 ">
                  AFFILIATES
                  </h6>
                  <Link href="/upcomming-events">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Upcoming Events
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Pole Dance Lessons
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Nudist Yoga
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Sensual talk cams
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Sugar Daddy

                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Swingers
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Strip Clubs
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Bikini Boxing
                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Oil Wrestling

                    </a>
                  </Link>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Slap fest

                    </a>
                  </Link>
                  <h6 className=" text-xs text-c6666 font-semibold flex mt-2">
                  Web cams
                  </h6>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Private Lounges
                    </a>
                  </Link>
                  <h6 className=" text-xs text-c6666 font-semibold flex mt-1 ">
                  Now Hiring
                  </h6>
                  <Link href="/">
                  <a className=" text-xs text-c6f6f font-normal flex pl-4 hover:text-primary ">
                    Website Feedback ideas
                    </a>
                  </Link>
                 
                </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default index;
