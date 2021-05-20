const express = require("express")
const router = express.Router();
const apiRouter = require("./test-api");

router.use("/test-api", apiRouter);

router.get("/hello/world", function(req, res) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send("Hello world!");
})

module.exports = router;