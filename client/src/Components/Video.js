import React, { useRef, useState } from "react";
import classes from "../Styles/Video.module.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

let arr = [];

function Video({videoSrc, channel, description, song, like, msg, share}) {
    const [playing, setPlaying] = useState(true);
    const videoRef = useRef(null);

    const videoPlayingHandler = (e) => {
        arr.forEach((item) => {
            item.pause();
        });
        arr.push(e.target);
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
      
    return (
        <div className={classes.video}>
            <video ref={videoRef} onMouseOver={videoPlayingHandler} onClick={videoPlayingHandler} className={classes.videoPlayer} loop src={videoSrc}></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={like} message={msg} share={share} />
        </div>
    )
}

export default Video;