import React from "react";
import "../Sidebar/Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer__albumLogo"
          src="https://imgs.search.brave.com/1X-NTsdUp7otKuB3OK5HRqAsaqmdHjJZJ_1OJuWJ-zY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9ncm93/dXBzYWxlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDkvcm9ja3N0YXIu/anBn"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>yeah..!</h4>
          <p>...</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
