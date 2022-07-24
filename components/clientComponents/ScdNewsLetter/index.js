import SendIcon from "@mui/icons-material/Send";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

function ScdNewsLetter() {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 60}`;
  };

  return (
    <Container className="he_container relative   mb-10   ">
      <div className=" w-full h-full ">
        <Image
          className=" rounded-none"
          loader={ImageLoader}
          src={`images/scd-gallery/scd-bg.jpg`}
          alt='scd bg'
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Box  className=" h-[350px] sm:h-[500px] md:h-[600px] xl:h-[800px]   flex items-end justify-center">
        <Box >
            <h5
            className=" rubik text-white capitalize font-semibold text-24 drop-shadow-md text-center mb-6 "
            >Join our newsletter for latest Events & community updates</h5>
            <Box className=" flex items-center justify-between max-w-[638px] relative left-[50%]  -translate-x-[50%] pb-[73px] ">
              <input
                className=" w-full border border-white border-solid rounded-none rubik italic text-base text-white bg-transparent z-10 leading-[46px] px-2 placeholder-white "
                type="text"
                placeholder="Your Email Address"
              />
              <Button
                variant="outlined"
                className=" min-w-fit w-[52px] h-[48px] bg-primary inline-flex items-center justify-center border border-white border-solid ml-1 "
              >
                <SendIcon className=" text-white text-lg" />
              </Button>
            </Box>
          </Box>
      </Box>
    </Container>
  );
}

export default ScdNewsLetter;
