const {Schema, model} = require("mongoose");

const videoSchema = new Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    like: Number,
    message: Number,
    share: Number
});

const Video = model("Video", videoSchema);

module.exports = Video;