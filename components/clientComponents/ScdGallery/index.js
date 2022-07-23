import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ScdGalleryData } from "data/ScdGalleryData";
import Link from "next/link";

function ScdGallery(props) {
  return (
    <Container className="he_container_medium pt-[100px] pb-[87px]">
      <Box className=" w-full">
        <Masonry columns={{ xs: 2, sm: 3, lg: 5 }} spacing={1}>
          {ScdGalleryData.map((item, index) => (
            <div key={index} className=" group relative">
              <div className="item_title absolute w-full bottom-0 left-0">
                <h5 className=" rubik font-medium text-18 text-white  leading-[21px]  before:content-[''] before:w-[4px] before:h-[20px] before:bg-primary before:absolute before:-top-[0px] before:left-3 before:transition-all before:duration-300 before:rounded-[12px] px-8 relative drop-shadow-md  pb-3  ">
                  {item.title}
                </h5>
              </div>
              <div className="item_category absolute inline-flex top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-2 border-primary px-[24px] py-[10px] duration-500 transition-all invisible  opacity-0 group-hover:opacity-100 group-hover:visible hover:bg-primary">
                <Link href="/">
                  <a className=" text-white capitalize rubik font-medium text-32">
                    {item.category}
                  </a>
                </Link>
              </div>
              <img
                src={`${item.image}?w=162&auto=format`}
                srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}

export default ScdGallery;
