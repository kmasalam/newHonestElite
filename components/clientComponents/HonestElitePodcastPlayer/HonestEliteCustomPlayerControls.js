import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import FullScreen from "@mui/icons-material/Fullscreen";
import Popover from "@material-ui/core/Popover";
import PictureInPictureAltOutlinedIcon from '@mui/icons-material/PictureInPictureAltOutlined';
import styles from 'styles/client/HonestEliteCustomPlayerControls.module.scss'
import Box from '@mui/material/Box';


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
      color: '#fff',
    },
    width: 50,
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 2,
    color: '#fff',
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

const HonestEliteCustomPlayerControls = forwardRef(
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
      showBorderOnPlayPause,
      handleTheaterView,
      playerSize,
      fullscreen,
      onBookmark,
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


    return (
      <div ref={ref} className={styles.controlsWrapper}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          style={{ flexGrow: 1 }}
        >
          
          {/* <Grid container direction="row" alignItems="center" justify="center">
            <IconButton
              onClick={onRewind}
              className={classes.controlIcons}
              aria-label="rewind"
            >
              <FastRewindIcon
                className={classes.controlIcons}
                fontSize="inherit"
              />
            </IconButton>
            <IconButton
              onClick={onPlayPause}
              className={classes.controlIcons}
              aria-label="play"
            >
              {playing ? (
                <PauseIcon fontSize="inherit" />
              ) : (
                <PlayArrowIcon fontSize="inherit" />
              )}
            </IconButton>
            <IconButton
              onClick={onFastForward}
              className={classes.controlIcons}
              aria-label="forward"
            >
              <FastForwardIcon fontSize="inherit" />
            </IconButton>
          </Grid> */}
          {/* bottom controls */}
          <Grid container >
              <Grid item xs={12} className=" flex px-2 pb-2">
                   
                    <IconButton
                    onClick={onPlayPause}
                    className={` text-white  p-1 border ${playerSize == 'sm' ? ' h-10 w-10 text-xl ' : 'h-6 w-6 text-2xl'} ${showBorderOnPlayPause ? styles.borderedPlayPause : ''} `}
                  >
                    {playing ? (
                      <PauseIcon className=" text-white text-2xl"  />
                    ) : (
                      <PlayArrowIcon className=" text-white text-2xl"  />
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
                            className={` text-white ${classes.bottomIcons} ${classes.volumeButton}`}
                        >
                            {muted ? (
                            <VolumeMute className=" text-2xl"  />
                            ) : volume > 0.5 ? (
                            <VolumeUp className=" text-2xl" />
                            ) : (
                            <VolumeDown className=" text-2xl" />
                            )}
                        </IconButton>
                        {
                            muted ? '' : <>
                            <Slider
                            min={0}
                            max={100}
                            value={muted ? 0 : volume * 100}
                            onChange={onVolumeChange}
                            orientation="vertical"
                            aria-labelledby="input-slider"
                            color="light"
                            className={` absolute  left-2 -top-10  ${styles.volumeSlider}`}
                            onMouseDown={onSeekMouseDown}
                            onChangeCommitted={onVolumeSeekDown}
                        />
                            </>
                        }
                        
                    </Box>

                  

                    <IconButton
                    className={` text-white`}
                    onClick={handleTheaterView}
                    >
                      <PictureInPictureAltOutlinedIcon className=" text-2xl"/>
                    </IconButton>
                    {
                      fullscreen ? < ><IconButton

                      onClick={onCloseFullScreen}
                      className={` text-white ${classes.bottomIcons}`}
                    >
                      <FullScreen  className=" text-2xl" />
                    </IconButton></> : <IconButton

                        onClick={onOpenFullScreen}
                        className={` text-white ${classes.bottomIcons}`}
                        >
                        <FullScreen  className=" text-2xl" />
                        </IconButton>
                    }
                    
                  </Box>
              </Grid>
          </Grid>
          
        </Grid>
      </div>
    );
  }
);

HonestEliteCustomPlayerControls.propTypes = {
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
  handleTheaterView: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  soundIconPlacement: PropTypes.string,
  showBorderOnPlayPause: PropTypes.bool,
  fullscreen: PropTypes.bool,
  playerSize: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default HonestEliteCustomPlayerControls;