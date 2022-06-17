import React, { useState, useRef, useEffect, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//
import ReactPlayer from "react-player";
import Tooltip from "@material-ui/core/Tooltip";
// import screenful from "screenfull";
import Slider from "@material-ui/core/Slider";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Controls from "./HonestEliteCustomPlayerControls";
import dynamic from 'next/dynamic';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from 'styles/client/HonestEliteCustomPlayer.module.scss'




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


function HonestEliteCustomPlayer({...allprops}) {
  // const screen1 = useFullScreenHandle();

  const handle = useFullScreenHandle();
    const {handleTheaterView,hidePlayerControl,videoSrc}  = allprops;
    const classes = useStyles();
    const [showControls, setShowControls] = useState(false);
    // const [count, setCount] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
    const [bookmarks, setBookmarks] = useState([]);
    const [fullscreen,setFullscreen] = useState(false)
    

    const [state, setState] = useState({
      pip: false,
      playing: true,
      controls: false,
      light: false,
  
      muted: true,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      volume: 1,
      loop: false,
      seeking: false,
    });
  
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsRef = useRef(null);
    const canvasRef = useRef(null);
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
        controlsRef?.current?.style.visibility = "hidden";
        count = 0;
      }
      if (controlsRef?.current?.style.visibility == "visible") {
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
  
    const handleMouseMove = () => {
      controlsRef?.current?.style.visibility = "visible";
      count = 0;
    };
  
    const hanldeMouseLeave = () => {
      controlsRef?.current?.style.visibility = "visible";
      count = 0;
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

    const handleFullscreen = () =>{
        setFullscreen(true);
        return handle.enter()
    }
    const handleCloseFullscreen = () =>{
        setFullscreen(false);
        return handle.exit()
    }

    return (
        <>
           
            
           <FullScreen handle={handle}>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={` ${styles.reactPlayerWrapper}`}
        >
          <ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            url={videoSrc ? videoSrc : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}
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

          {
            !hidePlayerControl && <Controls
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
            onOpenFullScreen={handleFullscreen}
            onCloseFullScreen={handleCloseFullscreen}
            fullscreen={fullscreen}
            handleTheaterView={handleTheaterView}
            volume={volume}
            onBookmark={addBookmark}
            soundIconPlacement={'top'}
            showBorderOnPlayPause={true}
            playerSize={'sm'}
          />
          }
          
        </div>

        {/* <Grid container style={{ marginTop: 20 }} spacing={3}>
          {bookmarks.map((bookmark, index) => (
            <Grid key={index} item>
              <Paper
                onClick={() => {
                  playerRef.current.seekTo(bookmark.time);
                  controlsRef.current.style.visibility = "visible";

                  setTimeout(() => {
                    controlsRef.current.style.visibility = "hidden";
                  }, 1000);
                }}
                elevation={3}
              >
                <img crossOrigin="anonymous" src={bookmark.image} />
                <Typography variant="body2" align="center">
                  bookmark at {bookmark.display}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid> */}
        {/* <canvas ref={canvasRef} /> */}
        </FullScreen>
      
        </>
    );
}

export default HonestEliteCustomPlayer;