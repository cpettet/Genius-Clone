const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth } = require("../../utils/auth");
const { Track, Comment, Annotation } = require("../../db/models");
const track = require("../../db/models/track");

const router = express.Router();

const validateTrack = [
  check("artist")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an artist."),
  check("album")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an album title."),
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a track title."),
  check("lyrics")
    .exists({ checkFalsy: true })
    .withMessage("Please provide track lyrics."),
  check("albumArtLink")
    .exists({ checkFalsy: true })
    .withMessage("Please provide album art link."),
];

// Get tracks: GET /api/tracks
// Complete
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tracks = await Track.findAll({
      limit: 10,
    });
    return await res.json(tracks);
  })
);

// Create track: POST /api/tracks
// Incomplete: functioning
router.post(
  "/",
  validateTrack,
  requireAuth,
  asyncHandler(async (req, res) => {
    // To add: featuring, producers, writers, release date, tags
    const { artist, title, album, lyrics, albumArtLink } = req.body;
    const userId = req.user.dataValues.id;

    const newTrack = await Track.build({
      uploaderId: userId,
      artist,
      title,
      album,
      lyrics,
      albumArtLink,
    });
    await newTrack.save();
    return res.json({ newTrack });
  })
);

// Read track: GET /api/tracks/:id
// Complete
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const track = await Track.findByPk(trackId, {
      include: [Comment, Annotation],
    });
    return res.json(track);
  })
);

// Update track: PUT /api/tracks/:id
// Complete
router.put(
  "/:id",
  validateTrack,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { trackId, artist, title, album, lyrics, albumArtLink } = req.body;
    const userId = req.user.dataValues.id;

    try {
      const track = await Track.findByPk(trackId);

      await track.update({
        uploaderId: userId,
        artist,
        title,
        album,
        lyrics,
        albumArtLink,
      });
      return res.json({ update: true, track_id: track.id, track: track });
    } catch (e) {
      const err = new Error("This isn't your track");
      err.title = "Unauthorized";
      err.errors = ["This is not your track"];
      err.status = 401;
      return res.json({ error: err });
    }
  })
);

// Delete track: DELETE /api/tracks/:id
// Complete
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const userId = req.user.dataValues.id;

    try {
      const track = await Track.findByPk(trackId);
      if (userId === track.uploaderId) await track.destroy();
      return res.json({ delete: true });
    } catch (e) {
      const err = new Error("This isn't your track");
      err.title = "Unauthorized";
      err.errors = ["This is not your track"];
      err.status = 401;
      return res.json({ error: err });
    }
  })
);

module.exports = router;
