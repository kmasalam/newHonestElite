
//
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Material Ui
// Next js
import Image from "next/image";
// data
const _ = require("lodash");
//

import { ModelingGalleryData } from 'data/ModelingGalleryData';


function ModellingGallery(props) {
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`;
    };

    

    return (
        <div className="scope_parent">
            <style global jsx>{`
            
            `}</style>
            <div className="scope">
                {
                    ModelingGalleryData && ModelingGalleryData.map((item,i)=>{
                        return(
                            <span className="scope_span"  data-index={i+1} style={{
                                transformOrigin: 'center',
                                transformStyle: 'preserve-3d',
                                transform: `rotateY(${(i+1)*45}deg) translateZ(350px)`
                            }}>
                                <Image
                                loader={ImageLoader}
                                src={item.image}
                                alt={"modeling image"}
                                width={268}
                                height={547}
                                />
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ModellingGallery;