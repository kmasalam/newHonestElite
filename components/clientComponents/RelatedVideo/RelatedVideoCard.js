import React from 'react'
// Material Ui
import Box from "@mui/material/Box";

// next js
import Link from "next/link";
import Image from "next/image";

export default function RelatedVideoCard({...allProps}) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
      };

      const {item, textSize} = allProps;

  return (
    <Box className="related_video_box shadow-md rounded-md fadein transition-all ">
    <Link href="/">
      <a>
        <Image
          loader={ImageLoader}
          src={item.src}
          alt={item.status}
          width={260}
          height={140}
        />
      </a>
    </Link>
    <Box className="related_video_box__content px-3">
      <Link href="/">
        <a>
          <h5 className={`${textSize} text-black font-semibold tracking-wider transition duration-300 hover:text-primary`}>
            {item.title}
          </h5>
        </a>
      </Link>
      <p className={`${textSize} text-c6f6f pb-2 font-normal`}><span>by</span>{item.author}</p>
    </Box>
  </Box>
  )
}
