const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { Annotation } = require("../../db/models");

const router = express.Router();

// Get annotations: GET /api/annotations/track:id
router.get(
  "/track:id",
  asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const annotations = await Annotation.findAll({
      where: {
        trackId,
      },
    });
    return res.json(annotations);
  })
);

// Create annotation: POST /api/annotations
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { trackId, content, startIndex, endIndex } = req.body;
    const authorId = req.user.dataValues.id;

    const newAnnotation = await Annotation.build({
      authorId,
      trackId,
      content,
      startIndex,
      endIndex,
    });
    await newAnnotation.save();
    return res.json(newAnnotation);
  })
);

// Edit annotation: PATCH /api/annotations/:id
router.patch(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const annotationId = req.params.id;
    const userId = req.user.dataValues.id;
    const { content } = req.body;
    try {
      const annotationToEdit = await Annotation.findByPk(annotationId);

      annotationToEdit.content = content;
      await annotationToEdit.save();
      return res.json({
        update: true,
        annotation: annotationToEdit,
        annotationId,
      });
    } catch (e) {
      const err = new Error("Unexpected error while updating annotation");
      err.title = "Unexpected error";
      err.errors = e;
      err.status = 500;
      return res.json({ error: err });
    }
  })
);

// Delete comment: DELETE /api/annotations/:id
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const annotationId = req.params.id;
    const userId = req.user.dataValues.id;
    try {
      const annotation = await Annotation.findByPk(annotationId);
      if (userId === annotation.authorId) annotation.destroy();
      else throw Error("You are not the annotation's author.");
      return res.json({ delete: true, annotationId });
    } catch (e) {
      const err = new Error("Unexpected error deleting annotation");
      err.title = "Unexpected error";
      err.errors = e;
      err.status = 500;
      return res.json({ error: err });
    }
  })
);

module.exports = router;
