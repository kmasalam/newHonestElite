
import { Box } from "@mui/material";
import Image from "next/image";

function LifeStyle({item}) {

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 60}`;
    };


    return (
        <Box className=" relative">
            <Box className=" h-[300px] sm:h[400px] md:h-[400px] relative">
                <Image
                    className=" "
                    loader={ImageLoader}
                    src={`${item.image}`}
                    srcSet={`${item.image}`}
                    alt={item.title}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                  />
            </Box>
            <Box className=" absolute w-full h-full p-[22px] top-0 z-10">
                <Box className=" border border-solid border-white h-full z-10 flex items-end">
                    <h5 className=" rubik font-medium text-18 text-white  leading-[21px]  before:content-[''] before:w-[4px] before:h-[20px] before:bg-primary before:absolute before:-top-[0px] before:left-3 before:transition-all before:duration-300 before:rounded-[12px] px-6 relative drop-shadow-md  pb-3  ">
                      {item.title}
                    </h5>
                </Box>
            </Box>
        </Box>
    );
}

export default LifeStyle;