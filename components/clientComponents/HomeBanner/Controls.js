import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from '@mui/material/Grid';
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import FullScreen from "@mui/icons-material/Fullscreen";
import Popover from "@material-ui/core/Popover";
import Box from '@mui/material/Box';
// Next js
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from 'styles/client/Controls.module.scss'
// icon



const useStyles = makeStyles((theme) => ({
  
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
  soundBox:{
    display: 'inline-flex',
    flexFlow: 'column',

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

const Controls = forwardRef(
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
      onToggleFullScreen,
      volume,
      onVolumeChange,
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

    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }

    return (
      <div ref={ref} className={` w-full  ${styles.controlsWrapper} bottom-[140px] py-0 `}>
        <Grid
          className=" py-0"
          container
          direction="column"
          justifyContent="space-between"
          style={{ flexGrow: 1 }}
        >
         
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: 16 }}
          >
           

            <Grid item>
                <IconButton
                  onClick={onPlayPause}
                  className={` ml-14 ${classes.bottomIcons}`}
                >
                  {playing ? (
                    <PauseIcon className="pauseIcon text-white" fontSize="large" />
                  ) : (
                    //play-icon
                    <Image
                    className='playIcon'
                    loader={ImageLoader}
                    src="images/play-icon.svg"
                    alt="Picture of the author"
                    width={40}
                    height={44}
                    />
                  )}
                </IconButton>
            </Grid>
            <Grid item>
                    <Box className={classes.soundBox}>
                    <IconButton
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                    className={` text-white ${classes.bottomIcons} ${classes.volumeButton}`}
                    >
                    {muted ? (
                        <VolumeMute fontSize="large" />
                    ) : volume > 0.5 ? (
                        <VolumeUp fontSize="large" />
                    ) : (
                        <VolumeDown fontSize="large" />
                    )}
                    </IconButton>
                    {/* <Slider
                        orientation="vertical"
                        min={0}
                        max={100}
                        value={muted ? 0 : volume * 100}
                        onChange={onVolumeChange}
                        className={classes.volumeSlider}
                        onMouseDown={onSeekMouseDown}
                        onChangeCommitted={onVolumeSeekDown}
                      /> */}
                    </Box>
            </Grid>

            
          </Grid>
        </Grid>
      </div>
    );
  }
);

Controls.propTypes = {
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
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;