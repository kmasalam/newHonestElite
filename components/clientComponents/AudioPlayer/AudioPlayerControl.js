import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VolumeUp from "@mui/icons-material/VolumeUp";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FullScreen from "@mui/icons-material/Fullscreen";
import Popover from "@material-ui/core/Popover";
// Next js
import Link from "next/link";
import Image from "next/image";

import PictureInPictureAltOutlinedIcon from "@mui/icons-material/PictureInPictureAltOutlined";
import styles from "styles/client/AudioPlayerControl.module.scss";

import Box from "@mui/material/Box";

const ImageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    root: {
      height: 2,
      color: "#fff",
    },
    width: 50,
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 2,
    color: "#fff",
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "none",
    marginTop: -6,
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
    height: 2,
    borderRadius: 4,
  },
  rail: {
    height: 2,
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

const AudioPlayerControl = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onOpenFullScreen,
      onCloseFullScreen,
      volume,
      soundIconPlacement,
      onVolumeChange,
      showVolume,
      showBorderOnPlayPause,
      playIconType,
      playerSize,
      onBookmark,
      type,
    },
    ref
  ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

   

    if (type == 2) {
      return (
        <Box>
            <Grid container>
              <Grid item xs={12} className=" flex px-2 pb-2 relative audio_player_slider -mb-5">
                
                <span className="played_time absolute left-5 -bottom-2 text-white text-base ">
                  {elapsedTime}
                </span>
                <span className="total_time absolute right-5 -bottom-2 text-white text-base">
                  {totalDuration}
                </span>

                <PrettoSlider
                  className={` audioPlayer_type2 ml-4 mr-3`}
                  min={0}
                  max={100}
                  ValueLabelComponent={(props) => (
                    <ValueLabelComponent {...props} value={elapsedTime} />
                  )}
                  aria-label="custom thumb label"
                  value={played * 100}
                  onChange={onSeek}
                  onMouseDown={onSeekMouseDown}
                  onChangeCommitted={onSeekMouseUp}
                  onDuration={onDuration}
                />
                <style jsx global>{`
                    .audio_player_slider .MuiSlider-thumb{
                        background-color: #ED028C;
                    }
                    .audio_player_slider .MuiSlider-rail{
                      height: 3px;
                      background-color: #f5f5f5;
                      opacity: 1;
                    }
                    .audio_player_slider .MuiSlider-track{
                        height: 3px;
                        background-color: #ED028C;
                    }
                `}</style>
                
              </Grid>
              <Grid container>
                    <Grid item xs={12} className=" flex items-center justify-center mb-1">
                        <Button>
                            <ThumbDownOffAltIcon className="text-white"/>
                        </Button>
                        <div>
                            <Button>
                                <SkipPreviousIcon className="text-white"/>
                                    <IconButton
                                        onClick={onPlayPause}
                                        className={` text-primary bg-white  p-1 border  h-8 w-8 text-xl ml-2 mr-2  `}
                                      >
                                        {playing ? (
                                          <PauseIcon className=" text-primary text-2xl" />
                                        ) : (
                                          <>
                                            <PlayArrowIcon className=" text-primary text-2xl" />
                                          </>
                                        )}
                                      </IconButton>
                                <SkipNextIcon className="text-white"/>
                            </Button>
                        </div>
                        <Button>
                            <ThumbUpOffAltIcon className=" text-white"/>
                        </Button>
                        <Box className=" relative ">
                    <IconButton
                      // onClick={() => setState({ ...state, muted: !state.muted })}
                      onClick={onMute}
                      className={` text-white `}
                    >
                      {muted ? (
                        <VolumeMute className=" text-2xl text-white" />
                      ) : volume > 0.5 ? (
                        <VolumeUp className=" text-2xl text-white" />
                      ) : (
                        <VolumeDown className=" text-2xl text-white" />
                      )}
                    </IconButton>
                    {!showVolume ? (
                      ""
                    ) : (
                      <div className=" sound_slider">
                        <Slider
                          min={0}
                          max={100}
                          value={muted ? 0 : volume * 100}
                          onChange={onVolumeChange}
                          orientation="horizontal"
                          aria-labelledby="input-slider"
                          color="light"
                          className={` absolute  left-10 top-2 volume_slider  `}
                          onMouseDown={onSeekMouseDown}
                          onChangeCommitted={onVolumeSeekDown}
                        />

                        <style jsx global>{`
                          .sound_slider .MuiSlider-track{
                              background-color: #fff;
                          }
                          .sound_slider .MuiSlider-thumb{
                              background-color: #fff;
                          }
                      `}</style>

                      </div>
                    )}
                  </Box>
                    </Grid>
              </Grid>
            </Grid>
        </Box>
      );
    }
    return (
      <div ref={ref}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid container>
            <Grid item xs={12} className=" flex px-2 pb-2">
              <IconButton
                onClick={onPlayPause}
                className={` text-black  p-1 border  h-10 w-10 text-xl  `}
              >
                {playing ? (
                  <PauseIcon className=" text-black text-2xl" />
                ) : (
                  <>
                    {playIconType == "colored" ? (
                      <>
                        <Image
                          loader={ImageLoader}
                          src="images/colored-play.svg"
                          alt={"dark logo"}
                          width={11}
                          height={12}
                        />
                      </>
                    ) : (
                      <PlayArrowIcon className=" text-black text-2xl" />
                    )}
                  </>
                )}
              </IconButton>

              <PrettoSlider
                className={` ${styles.prettoSlider} ml-4 mr-3`}
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                aria-label="custom thumb label"
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />

              <Box className=" flex items-center justify-between">
                <Box className=" relative ">
                  <IconButton
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                    className={` text-black `}
                  >
                    {muted ? (
                      <VolumeMute className=" text-2xl" />
                    ) : volume > 0.5 ? (
                      <VolumeUp className=" text-2xl" />
                    ) : (
                      <VolumeDown className=" text-2xl" />
                    )}
                  </IconButton>
                  {!showVolume ? (
                    ""
                  ) : (
                    <>
                      <Slider
                        min={0}
                        max={100}
                        value={muted ? 0 : volume * 100}
                        onChange={onVolumeChange}
                        orientation="vertical"
                        aria-labelledby="input-slider"
                        color="light"
                        className={` absolute  left-2 -top-10 ${styles.volume_slider}  `}
                        onMouseDown={onSeekMouseDown}
                        onChangeCommitted={onVolumeSeekDown}
                      />
                    </>
                  )}
                </Box>

                <div className=" inline-flex text-c6f6f text-sm">
                  <span className=" text-c6f6f text-sm inline-flex mr-3">
                    Audio
                  </span>
                  {elapsedTime}/{totalDuration}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
);

AudioPlayerControl.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onOpenFullScreen: PropTypes.func,
  onCloseFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  soundIconPlacement: PropTypes.string,
  showBorderOnPlayPause: PropTypes.bool,
  showVolume: PropTypes.bool,
  playerSize: PropTypes.string,
  totalDuration: PropTypes.string,
  playIconType: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
  type: PropTypes.number,
};
export default AudioPlayerControl;
