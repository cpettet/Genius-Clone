const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const tracksRouter = require("./tracks");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/tracks", tracksRouter);

module.exports = router;