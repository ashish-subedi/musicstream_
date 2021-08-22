import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">

            <div className="footer__left">
            <img 
            className="footer__albumLogo"
            src="data:image/jpeg;base64,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" alt="" />
            <div className="footer__songInfo">
                <h4>Nothing</h4>
                <p>The Script</p>
            </div>
            </div> 


            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />

            </div>


            <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

            
    
        </div>
    )
}

export default Footer
