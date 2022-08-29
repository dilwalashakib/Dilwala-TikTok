const Video = require("../models/Video");

const createVideo = async(req, res) => {
    try {
        const {url, channel, description, song, like, message, share} = req.body;
        const videoData = new Video({
          url,
          channel,
          description,
          song,
          like,
          message,
          share  
        });
        await videoData.save();
        res.send("Video Save")
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const getVideo = async(req, res) => {
    try {
        
        const data = await Video.find({});
        res.send(data);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createVideo,
    getVideo
}