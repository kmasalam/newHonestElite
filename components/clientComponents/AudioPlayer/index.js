import React, { useState, useRef, useEffect, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Next js
import Link from "next/link";
import Image from "next/image";
const _ = require("lodash");
// 

//
import ReactPlayer from "react-player";
import Tooltip from "@material-ui/core/Tooltip";
// import screenful from "screenfull";
import Slider from "@material-ui/core/Slider";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Controls from "./AudioPlayerControl";
import dynamic from 'next/dynamic';
import { FullScreen, useFullScreenHandle } from "react-full-screen";





const useStyles = makeStyles((theme) => ({
    banner_container:{
        canvas:{
          display: 'none',
        }
    },
    playerWrapper: {
      width: "100%",
      height: "100%",
      position: "relative",
      // "&:hover": {
      //   "& $controlsWrapper": {
      //     visibility: "visible",
      //   },
      // },
    },
  
    controlsWrapper: {
      position: "absolute",
      top: "70%",
      left: 0,
      right: 0,
      bottom: 0,
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    topControls: {
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(2),
    },
    middleControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomWrapper: {
      display: "flex",
      flexDirection: "column",
  
      // background: "rgba(0,0,0,0.6)",
      // height: 60,
      padding: theme.spacing(2),
    },
  
    bottomControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // height:40,
    },
  
    button: {
      margin: theme.spacing(1),
    },
    controlIcons: {
      color: "#777",
  
      fontSize: 50,
      transform: "scale(0.9)",
      "&:hover": {
        color: "#fff",
        transform: "scale(1)",
      },
    },
  
    bottomIcons: {
      color: "#999",
      "&:hover": {
        color: "#fff",
      },
    },
  
    volumeSlider: {
      width: 100,
    },
  }));
  
  const PrettoSlider = withStyles({
    root: {
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  
  
  const format = (seconds) => {
    if (isNaN(seconds)) {
      return `00:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };
  
  let count = 0;


function index({...allprops}) {
  // const screen1 = useFullScreenHandle();

  const handle = useFullScreenHandle();

    const classes = useStyles();
    const [showControls, setShowControls] = useState(false);
    // const [count, setCount] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
    const [bookmarks, setBookmarks] = useState([]);
    const [showVolume,setVolume] = useState(false)
    const [state, setState] = useState({
      pip: false,
      playing: false,
      controls: false,
      light: false,
  
      muted: true,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      volume: 50,
      loop: false,
      seeking: false,
    });
  
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsRef = useRef(null);
    const canvasRef = useRef(null);
    const {file, playIconType, height,width,type, hasAlbumArt,albumArt} = allprops;
    const {
      playing,
      controls,
      light,
      muted,
      loop,
      playbackRate,
      pip,
      played,
      seeking,
      volume,
    } = state;
  
    const handlePlayPause = () => {
      setState({ ...state, playing: !state.playing });
    };
  
    const handleRewind = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };
  
    const handleFastForward = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };
  
    const handleProgress = (changeState) => {
      if (count > 3) {
        controlsRef?.current?.style?.visibility = "hidden";
        count = 0;
      }
      if (controlsRef?.current?.style?.visibility == "visible") {
        count += 1;
      }
      if (!state.seeking) {
        setState({ ...state, ...changeState });
      }
    };
  
    const handleSeekChange = (e, newValue) => {
      setState({ ...state, played: parseFloat(newValue / 100) });
    };
  
    const handleSeekMouseDown = (e) => {
      setState({ ...state, seeking: true });
    };
  
    const handleSeekMouseUp = (e, newValue) => {
     
      setState({ ...state, seeking: false });
      // console.log(sliderRef.current.value)
      playerRef.current.seekTo(newValue / 100, "fraction");
    };
  
    const handleDuration = (duration) => {
      setState({ ...state, duration });
    };
  
    const handleVolumeSeekDown = (e, newValue) => {
      setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
    };
    const handleVolumeChange = (e, newValue) => {
      setState({
        ...state,
        volume: parseFloat(newValue / 100),
        muted: newValue === 0 ? true : false,
      });
    };
  
    const toggleFullScreen = () => {
      //screenful.toggle(playerContainerRef.current);
        //screen1.enter
        return handle.enter
    };
  
    // const handleMouseMove = () => {
    //   console.log("mousemove");
    //   controlsRef.current.style.visibility = "visible";
    //   count = 0;
    // };
  
    const handleMouseEnter = () =>{
        setVolume(true)
    }
    const hanldeMouseLeave = () => {
        setVolume(false)
    };
  
    const handleDisplayFormat = () => {
      setTimeDisplayFormat(
        timeDisplayFormat == "normal" ? "remaining" : "normal"
      );
    };
  
    const handlePlaybackRate = (rate) => {
      setState({ ...state, playbackRate: rate });
    };
  
    const hanldeMute = () => {
      setState({ ...state, muted: !state.muted });
    };

    const ImageLoader = ({ src, width, quality }) => {
      return `/${src}?w=${width}&q=${quality || 75}`;
    };
  
  
    const addBookmark = () => {
      const canvas = canvasRef.current;
      canvas.width = 160;
      canvas.height = 90;
      const ctx = canvas.getContext("2d");
  
      ctx.drawImage(
        playerRef.current.getInternalPlayer(),
        0,
        0,
        canvas.width,
        canvas.height
      );
      const dataUri = canvas.toDataURL();
      canvas.width = 0;
      canvas.height = 0;
      const bookmarksCopy = [...bookmarks];
      bookmarksCopy.push({
        time: playerRef.current.getCurrentTime(),
        display: format(playerRef.current.getCurrentTime()),
        image: dataUri,
      });
      setBookmarks(bookmarksCopy);
    };
  
    const currentTime =
      playerRef && playerRef.current
        ? playerRef.current.getCurrentTime()
        : "00:00";
  
    const duration =
      playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const elapsedTime =
      timeDisplayFormat == "normal"
        ? format(currentTime)
        : `-${format(duration - currentTime)}`;
  
    const totalDuration = format(duration);

    if(hasAlbumArt && type == 2){
        return(
            <>
              <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={hanldeMouseLeave}
              ref={playerContainerRef}
              className=" relative">
                  <Box 
                  className=" relative  " 
                  style={{
                      height: `${height}px`
                  }}>
                      <Image
                        className="rounded-md overflow-hidden"
                        loader={ImageLoader}
                        src={albumArt}
                        alt={"dark logo"}
                        layout="fill"
                        objectFit="cover"
                      />
                      <span className="album_art_circle absolute rounded-full inline-flex left-1/2 top-1/2 -translate-x-2/4  -translate-y-1/2  ">
                         
                          <Image
                            className="rounded-md overflow-hidden"
                            loader={ImageLoader}
                            src="images/album-art-circle.png"
                            alt={"dark logo"}
                            width={158}
                            height={156}
                          />
                      </span>
                  </Box>
                  <Box className=" absolute bottom-0 left-0 w-full">
                  <ReactPlayer
                      ref={playerRef}
                      width={width}
                      height="0px"
                      url={file !== '' ? '/audio.mp3' : file}
                      pip={pip}
                      playing={playing}
                      controls={false}
                      light={light}
                      loop={loop}
                      playbackRate={playbackRate}
                      volume={volume}
                      muted={muted}
                      onProgress={handleProgress}
                      config={{
                        file: {
                          attributes: {
                            crossOrigin: "anonymous",
                          },
                        },
                      }}
                    />

                    <Controls
                      ref={controlsRef}
                      onSeek={handleSeekChange}
                      onSeekMouseDown={handleSeekMouseDown}
                      onSeekMouseUp={handleSeekMouseUp}
                      onDuration={handleDuration}
                      onRewind={handleRewind}
                      onPlayPause={handlePlayPause}
                      onFastForward={handleFastForward}
                      playing={playing}
                      played={played}
                      elapsedTime={elapsedTime}
                      totalDuration={totalDuration}
                      onMute={hanldeMute}
                      muted={muted}
                      onVolumeChange={handleVolumeChange}
                      onVolumeSeekDown={handleVolumeSeekDown}
                      onChangeDispayFormat={handleDisplayFormat}
                      playbackRate={playbackRate}
                      onPlaybackRateChange={handlePlaybackRate}
                      onOpenFullScreen={handle.enter}
                      onCloseFullScreen={handle.exit}
                      volume={volume}
                      onBookmark={addBookmark}
                      soundIconPlacement={'top'}
                      showBorderOnPlayPause={true}
                      playIconType={playIconType}
                      showVolume={showVolume}
                      playerSize={'sm'}
                      type={type}

                    />
                  </Box>
              </div>
              
            </>
        )
    }

    return (
        <>
          
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
        >
          <ReactPlayer
            ref={playerRef}
            width="400px"
            height="0px"
            url={file !== '' ? '/audio.mp3' : file}
            pip={pip}
            playing={playing}
            controls={false}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
            }}
          />

          <Controls
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            onOpenFullScreen={handle.enter}
            onCloseFullScreen={handle.exit}
            volume={volume}
            onBookmark={addBookmark}
            soundIconPlacement={'top'}
            showBorderOnPlayPause={true}
            playIconType={playIconType}
            showVolume={showVolume}
            playerSize={'sm'}
          />
        </div>
        </>
    );
}

export default index;