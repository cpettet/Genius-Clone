import { useState } from "react";
import styles from "./LyricsShow.module.css";
import { useDispatch, useSelector } from "react-redux";

const LyricsShow = ({ editMode, setAnnotateBox, setAnnotateMode, track }) => {
  const dispatch = useDispatch();
  const startIndices = Object.values(track?.Annotations).sort(
    (a, b) => a.startIndex - b.startIndex
  );

  console.log("Start indices", startIndices);

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
