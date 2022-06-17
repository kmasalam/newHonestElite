import React from "react";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// Next js
import Link from "next/link";
import Image from "next/image";
// Data
import { ShortRealityData } from "data/ShortRealityData";
// styles
import styles from "styles/client/ShortRealityVideoBox.module.scss";
// utility
const _ = require("lodash");

function ShortRealityVideoBox({ ...allprops }) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const { item, style, className,itemIndex } = allprops;

  return (
    <div className={`short_reality_container__box  ${styles.short_reality_container__box} relative ${className} ${itemIndex > 6 && ' has_no_shape '}`} style={style}>
      <div className="short_reality_container__box_inner relative">
        <Image
          className="short_reality_video_img "
          loader={ImageLoader}
          src={item.modelImage}
          alt={item.status}
          width={228}
          height={369}
        />

                <style global jsx>{`
                    .has_no_shape{
                      margin-bottom: 10px !important;
                    }
                `}</style>



        <div className="short_reality_container__box_content absolute w-full px-2">
          <div className="short_reality_box__top flex items-center justify-between">
            <span className="short_reality_box__top_author inline-flex">
              <Link href={item.chanelLink}>
                <a className=" inline-flex items-center justify-start">
                  <Image
                    className="rounded-full "
                    loader={ImageLoader}
                    src={item.userImage}
                    alt={item.status}
                    width={24}
                    height={24}
                  />
                  <span className=" text-white text-xs inline-flex ml-2 ">
                    {item.chanelName}
                  </span>
                </a>
              </Link>
            </span>
            <span className=" inline-flex py-0 ">
              <Link href={item.chanelLink}>
                <a className=" text-white text-xs bg-ce204 px-3 py-1">
                  Subscribe
                </a>
              </Link>
            </span>
          </div>
          <div className="short_reality_status border-b pb-1 border-slate-100 mb-3">
            <Link href={item.statusLink}>
              <a className=" text-white text-xs text-left ">{item.status}</a>
            </Link>
          </div>
          <div className="short_reality__action_bar flex items-center justify-between">
            <Link href="/">
              <a className="like text-white text-sm inline-flex items-center justify-center">
                <Image
                  loader={ImageLoader}
                  src="images/like.svg"
                  alt="like"
                  width={12}
                  height={12}
                />
                <span className=" inline-flex ml-1">Like</span>
              </a>
            </Link>
            <Link href="/">
              <a className="dislike text-white text-sm inline-flex items-center justify-center">
                <Image
                  loader={ImageLoader}
                  src="images/dislike.svg"
                  alt="like"
                  width={12}
                  height={12}
                />
                <span className=" inline-flex ml-1">Dislike</span>
              </a>
            </Link>
            <Link href="/">
              <a className="comment text-white text-sm inline-flex items-center justify-center">
                <Image
                  loader={ImageLoader}
                  src="images/comments.svg"
                  alt="comments"
                  width={12}
                  height={12}
                />
                <span className=" inline-flex ml-1">Comments</span>
              </a>
            </Link>
          </div>
        </div>
        {
            itemIndex <= 6 && <div className="phone_bottom__parent absolute">
            <Image
              className="phone_bottom"
              loader={ImageLoader}
              src="images/phone_bottom.jpg"
              alt="phone bottom"
              width={228}
              height={42}
            />
          </div>
        }
        
      </div>
    </div>
  );
}

export default React.memo(ShortRealityVideoBox);
