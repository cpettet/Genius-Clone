const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { Comment } = require("../../db/models");

const router = express.Router();



// Get comments: GET /api/comments/
// Complete
router.get("/track:id", asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const comments = await Comment.findAll({
        where: {
            trackId,
        }
    });
    return res.json(comments);
}))


// Create comment: POST /api/comments
// Complete
router.post("/", requireAuth, asyncHandler(async (req, res) => {
    // trackId, authorId, content
    // const authorId = req.user.dataValues.id;
    const { authorId, trackId, content } = req.body;

    const newComment = await Comment.build({
        authorId,
        trackId,
        content
    });
    await newComment.save();
    return res.json(newComment);
}));

// Edit comment: PUT /api/comments/:id
// WIP

// Delete comment: DELETE /api/comments/:id
// WIP

module.exports = router;