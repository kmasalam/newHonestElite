import Head from "next/head";
// User Defined Components
import Footer from "clientComponents/Footer";
import HomeBanner from "clientComponents/HomeBanner";
import HomeNavigation from "clientComponents/HomeNavigation";
import HomeSudio from "clientComponents/HomeSudio";
import PersonalLinks from "clientComponents/PersonalLinks";
import RelationLounges from "clientComponents/RelationLounges";
import ScdGallery from "clientComponents/ScdGallery";
import ShortRealityVideo from "clientComponents/ShortRealityVideo";
import { ScdGalleryData2 } from "data/ScdGalleryData";
import { VideoListData } from "data/VideoListData";

// new sdf

const LeftMenusData = [
  {
    icon: "images/banner-left-icon1.svg",
    text: `Rules of <br/> engaement`,
    link: "/rules-engagement",
  },
  {
    icon: "images/banner-left-icon3.svg",
    text: `Modeling <br/> Gallery`,
    link: "/",
  },
  {
    icon: "images/banner-left-icon4.svg",
    text: "Shopping",
    link: "/",
  },
  {
    icon: "images/banner-left-icon5.svg",
    text: `TV Videos <br/> & Movies`,
    link: "/the-tube",
  },
  {
    icon: "images/banner-left-icon6.svg",
    text: `News <br/> updates`,
    link: "/",
  },
];

const menAllWomen = ['Men','All','Women']
export default function LittlePeople() {
  return (
    <div>
      <Head>
        <title>THE HONEST ELITE REALTIONSHIP SYLLABUS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeNavigation navigationType={1} />
        <HomeBanner
          LeftMenusData={LeftMenusData}
          bannerType={4}
          VideoListData={VideoListData}
          hideRightVideo={true}
          bannerLeftText="little people"
        />
        <HomeSudio 
        sectionTitle="Reality Shows" 
        menAllWomen={menAllWomen}
        />
        <ScdGallery type={2} ScdGalleryData={ScdGalleryData2} />
        <ShortRealityVideo />
        <RelationLounges  />
        <PersonalLinks />
        <Footer />
      </main>
    </div>
  );
}
