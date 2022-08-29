import React, { useState } from "react";
import classes from "../Styles/VideoSidebar.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes, message, share}) {
    const [like, setLike] = useState(false);
    const likeHandler = () => {
        if(like) {
            setLike(!like);
        } else {
            setLike(!like)
        }
    }
    return (
        <div className={classes.videoSidebar}>
            <div className={classes.icon}>
                {like ? (
                    <FavoriteIcon fontSize="large" onClick={likeHandler} />
                ): (
                    <FavoriteBorder fontSize="large" onClick={likeHandler} />
                )}
                <p>{like ? likes + 1 : likes}</p>
            </div>
            <div className={classes.icon}>
                <MessageIcon fontSize="large" />
                <p>{message}</p>
            </div>
            <div className={classes.icon}>
                <ShareIcon fontSize="large" />
                <p>{share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;