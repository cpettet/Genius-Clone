const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { Comment } = require("../../db/models");

const router = express.Router();

// Get comments: GET /api/comments/
// Complete
router.get(
  "/track:id",
  asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const comments = await Comment.findAll({
      where: {
        trackId,
      },
    });
    return res.json(comments);
  })
);

// Create comment: POST /api/comments
// Complete
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    // trackId, authorId, content
    // const authorId = req.user.dataValues.id;
    const { authorId, trackId, content } = req.body;

    const newComment = await Comment.build({
      authorId,
      trackId,
      content,
    });
    await newComment.save();
    return res.json(newComment);
  })
);

// Edit comment: PUT /api/comments/:id
router.patch(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    try {
      const commentToEdit = await Comment.findByPk(commentId);
      commentToEdit.content = content;
      await commentToEdit.save();
      return res.json({ update: true, comment: commentToEdit, commentId });
    } catch (e) {
      const err = new Error("Unexpected error updating comment");
      err.title = "Unexpected error";
      err.errors = e;
      err.status = 500;
      return res.json({ error: err });
    }
  })
);

// Delete comment: DELETE /api/comments/:id
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const userId = req.user.dataValues.id;

    try {
      const comment = await Comment.findByPk(commentId);
      if (userId === comment.authorId) comment.destroy();
      return res.json({ delete: true, commentId });
    } catch (e) {
      const err = new Error("Unexpected error deleting comment");
      err.title = "Unexpected error";
      err.errors = e;
      err.status = 500;
      return res.json({ error: err });
    }
  })
);

module.exports = router;
