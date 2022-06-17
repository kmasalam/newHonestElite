import {useState, useEffect} from 'react';
// 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
// Next js
import Link from "next/link";
import Image from "next/image";
// 
import KnowledgeBaseComponent from 'clientComponents/KnowledgeBaseComponent';
import Footer from 'clientComponents/Footer';
import EducationalVideo from 'clientComponents/EducationalVideo';
import SectionTitle from 'clientComponents/SectionTitle';
import PopularVideo from 'clientComponents/PopularVideo';
import PrivateWorldNews from 'clientComponents/PrivateWorldNews'
import PersonalLinks from 'clientComponents/PersonalLinks';
import {ShortRealityData} from 'data/ShortRealityData';
import ShortRealityVideoBox from 'clientComponents/ShortRealityVideo/ShortRealityVideoBox'
import HomeBanner from 'clientComponents/HomeBanner';
import NewsTicker from 'clientComponents/NewsTicker';
import HomeNavigation from 'clientComponents/HomeNavigation';
import HomeSudio from 'clientComponents/HomeSudio';
import {NewsTickerData} from 'data/NewsTickerData'
import { KnowledgeBaseData } from 'data/KnowledgeBaseData';
import TubeBanner from 'clientComponents/TubeBanner'

function TheTube(props) {
    
    const itemToLoad = 7;
    const [viewableItem,setViewableItem] = useState(7)
    const hanleLoadItem = (e) =>{
        e.preventDefault();
        setViewableItem(viewableItem+itemToLoad);
    }


    return (

        <>
            <HomeNavigation/>
            <TubeBanner/>
            <NewsTicker NewsTickerData={NewsTickerData} tickerType={'bottomBanner'}/>
      
            
            <EducationalVideo/>
            <Container className="he_container -mt-[20px] ">
                <Box className={` flex mb-2 flex-wrap short_reality_parent `}>
                    {ShortRealityData &&
                    ShortRealityData.map((item, i) => {
                        if(i <= (viewableItem-1)){
                            return <ShortRealityVideoBox 
                            key={i}
                            item={item}
                            itemIndex={i}
                            className="mb-14"
                            style={{
                                maxWidth:`14.28%`,
                                flex:`0 0 14.28%`,
                            }}
                            />;
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
            <PopularVideo pageType={'tube_page'} />
            <div className="bg-cf0f0 pt-14 pb-14">
                <PrivateWorldNews />
            </div>
            <PersonalLinks/>
            <Footer/>
        </>
    );
}

export default TheTube;