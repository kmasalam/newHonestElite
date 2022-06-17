import React from 'react'
// Material Ui
import Box from "@mui/material/Box";

// next js
import Link from "next/link";
import Image from "next/image";

export default function EduBoxScaffolding({...allprops}) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };

      const {item, className, width, height, titleSize, boxPadding} = allprops
      if(item && width && height){
        return (
          <Box className={` education_video_box shadow-md  fadein transition-all ${className}`}>
          <Link href="/">
            <a>
              <Image
                loader={ImageLoader}
                src={item.src}
                alt={item.status}
                width={width}
                height={height}
              />
            </a>
          </Link>
          <Box className={` education_video_box__content ${boxPadding == 'sm' ? 'px-2 py-2 pt-0' : boxPadding == 'md' ? 'px-3 py-3' : boxPadding == 'lg' ? 'px-3 py-3' : 'px-3 py-3'} `}>
            <Link href={item.link}>
              <a>
                <h5 className={` ${titleSize} text-black font-semibold tracking-wider transition duration-300 hover:text-primary`}>
                  {item.status}
                </h5>
              </a>
            </Link>
            <p className={` ${titleSize} text-c6f6f  ${boxPadding == 'sm' ? 'py-1 pb-0' : boxPadding == 'md' ? 'py-2' : boxPadding == 'lg' ? 'py-2' : 'py-2'}`}>4 Years ago</p>
            <Box className=' flex items-center justify-between '>
              <span className='text-c6f6f text-base'>
                <Image
                  loader={ImageLoader}
                  src="images/view_icon.svg"
                  alt="video list"
                  width={18}
                  height={10}
                />
                <span className={` ${titleSize} inline-flex ml-1`}>
                  {item.totalViews}M
                </span>
              </span>
              <span className={` ${titleSize} text-c6f6f text-base`}>
              <Image
                  loader={ImageLoader}
                  src="images/heart_icon.svg"
                  alt="video list"
                  width={18}
                  height={10}
                />
                <span className={` ${titleSize} inline-flex ml-1`}>
                Love
                </span>
              </span>
              <span className={` ${titleSize} text-c6f6f text-base`}>
              <Image
                  loader={ImageLoader}
                  src="images/share.svg"
                  alt="video list"
                  width={18}
                  height={10}
                />
                <span className={` ${titleSize} inline-flex ml-1`}>
                Share
                </span>
              </span>
            </Box>
          </Box>
        </Box>
        )
      }else{
        return <h4>Loading..</h4>
      }
}
