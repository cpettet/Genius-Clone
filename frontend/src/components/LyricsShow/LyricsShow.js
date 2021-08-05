import { useState } from "react";
import styles from "./LyricsShow.module.css";
import { useDispatch, useSelector } from "react-redux";

const LyricsShow = ({
  editMode,
  startAnAnnotation,
  setAnnotateBox,
  setAnnotateMode,
  track,
}) => {
  const dispatch = useDispatch();
  const lyrics = track.lyrics;
  const annotations = track.annotations;
  // const startIndices = track.annotations

  return (
    <p
      hidden={editMode}
      onMouseDown={() => {
        setAnnotateMode(false);
        setAnnotateBox(false);
      }}
      className={styles.track__lyrics}
    >
      {track.lyrics}
    </p>
  );
};

export default LyricsShow;