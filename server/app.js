const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const videoRouter = require("./routers/videoRouter");

const app = express();
dotenv.config();
// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully'))
    .catch((err) => console.log(err.message))
// Disconnect Database
mongoose.connection.on("disconnected", () => console.log("Database Disconnected !"));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use("/video", videoRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Running Port "+ PORT));