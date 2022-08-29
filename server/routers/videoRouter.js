const { createVideo, getVideo } = require("../controllers/videoController");
const router = require("express").Router();


router.post("/create", createVideo);
router.get("/", getVideo);


module.exports = router;