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
            <HomeBanner bannerType={2} />
            <NewsTicker NewsTickerData={NewsTickerData} tickerType={'bottomBanner'}/>
            
            <SectionTitle
            title="Knowledge Base"
            fullWidth={false}
            />
            <KnowledgeBaseComponent 
             height={168}
             width={160}
            type={1} 
            sliderData={KnowledgeBaseData}/>
            <HomeSudio/>
            <EducationalVideo/>
            <Container className="he_container">
                <Box className={` flex mb-12 flex-wrap `}>
                    {ShortRealityData &&
                    ShortRealityData.map((item, i) => {
                        if(i <= (viewableItem-1)){
                            return <ShortRealityVideoBox 
                            key={i}
                            item={item}
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
            <Container className="he_container pb-14 pt-8">
                <Box className=" text-center">
                    <Button variant="text" onClick={hanleLoadItem} className=" text-slate-500 ">
                        <AddIcon className=" text-c6f6f text-6xl"/>
                    </Button>
                </Box>
            </Container>
            <PopularVideo />
            <div className="bg-cf0f0 pt-14 pb-14">
            <PrivateWorldNews />
            </div>
            <PersonalLinks/>
            <Footer/>
        </>
    );
}

export default TheTube;