import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AnnotationForm.module.css";
import { createAnnotation } from "../../store/annotation";

const AnnotationForm = ({
  annotateBox,
  setAnnotateBox,
  yCoordinate,
  setAnnotateMode,
  startIndex,
  endIndex,
  trackId,
  sessionUser,
}) => {
  const dispatch = useDispatch();
  const [newAnnotation, setNewAnnotation] = useState("");
  const authorId = sessionUser?.id;

  const cancelAnnotation = (e) => {
    e.preventDefault();
    setNewAnnotation("");
    setAnnotateMode(false);
  };

  const submitAnnotation = (e) => {
    e.preventDefault();
    dispatch(
      createAnnotation({
        authorId,
        trackId,
        content: newAnnotation,
        startIndex,
        endIndex,
      })
    );
    setNewAnnotation("");
    setAnnotateMode(false);
  };

  const showAnnotationForm = (e) => {
    e.preventDefault();
    setAnnotateBox(prev => true);
  }

  return (
    <div className={styles.annotation} style={{ top: yCoordinate - 465 }}>
      <button
        hidden={annotateBox}
        onClick={showAnnotationForm}
        className={styles["annotation__start-annotation"]}
      >
        Start the Folk Genius Annotation
      </button>
      <form
        onSubmit={submitAnnotation}
        className={
          !annotateBox
            ? styles["annotation__form-hidden"]
            : styles.annotation__form
        }
      >
        <textarea
          className={styles.annotation__content}
          value={newAnnotation}
          onChange={(e) => setNewAnnotation(e.target.value)}
          placeholder="Don't just put the lyric in your own words - drop some knowledge!"
        />
        <div className={styles.annotation__buttons}>
          <button className={styles.annotation__buttons__save}>Save</button>
          <button
            className={styles.annotation__buttons__cancel}
            onClick={cancelAnnotation}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnotationForm;
