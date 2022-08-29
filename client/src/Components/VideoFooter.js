import React from "react";
import classes from "../Styles/VideoFooter.module.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Marquee from "react-fast-marquee";

function VideoFooter({channel, description, song}) {
    return (
        <div className={classes.videoFooter}>
            <div className={classes.videoFooterText}>
                <h3>@{channel}</h3>
                <p>{description}</p>
                
                <div className={classes.videoFooterMarquee}>
                    <MusicNoteIcon />
                    <Marquee speed={50} gradient={false}>
                        {song}
                    </Marquee>
                    
                </div>
                
            </div>
            <img className={classes.videoFooterImage} src="https://static.thenounproject.com/png/934821-200.png" alt="music" />
        </div>
    )
}

export default VideoFooter;