import React from "react";
// Material Ui
// Next js
import Image from "next/image";
import styles from "styles/client/RelationLoungesItem.module.scss";
// Data
const _ = require("lodash");

function RelationLoungesItem({ ...allprops }) {
  // const classes = useStyles();
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const { src, className, alt, width, height, widthClasses } = allprops;

  if (!_.isEmpty(allprops)) {
    return (
      <div className={` ${styles.relation_lounges_item} ${widthClasses} `}>
        <div className="relation_lounges_item_inner relative">
          <Image
            className={className}
            loader={ImageLoader}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
      </div>
    );
  } else {
    return <h4>Loading..</h4>;
  }
}

export default React.memo(RelationLoungesItem);
