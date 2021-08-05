import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AnnotationForm.module.css";

const AnnotationForm = ({ annotateBox, setAnnotateBox, yCoordinate, setAnnotateMode }) => {
  const dispatch = useDispatch();
  const [newAnnotation, setNewAnnotation] = useState("");

  return (
    <div className={styles.annotation} style={{ top: yCoordinate - 465 }}>
      <button
        hidden={annotateBox}
        onClick={() => setAnnotateBox(true)}
        className={styles["annotation__start-annotation"]}
      >
        Start the Folk Genius Annotation
      </button>
      <form
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
            onClick={(e) => {
              e.preventDefault();
              setNewAnnotation("");
              setAnnotateMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnotationForm;
