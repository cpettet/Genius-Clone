const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const tracksRouter = require("./tracks");
const commentsRouter = require("./comments");
const annotationsRouter = require("./annotations");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/tracks", tracksRouter);
router.use("/comments", commentsRouter);
router.use("/annotations", annotationsRouter)

module.exports = router;