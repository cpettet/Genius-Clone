import { useState } from "react";
import styles from "./LyricsShow.module.css";
import { useDispatch } from "react-redux";

const LyricsShow = ({ editMode, setAnnotateBox, setAnnotateMode, track }) => {
  const dispatch = useDispatch();

  // sorts the annotations in order of start index
  const sortedAnnotations = Object.values(track?.Annotations).sort(
    (a, b) => a.startIndex - b.startIndex
  );

  const sortedStartingIndices = sortedAnnotations.map(
    (annotation) => annotation.startIndex
  );

  const allSortedIndices = sortedAnnotations.reduce((acc, next) => {
    return acc.concat([next.startIndex, next.endIndex]);
  }, []);

  console.log("All indices in order:", allSortedIndices);

  const renderedSpans = [];
  let pairCount = 0;
  let currentSpan = [];
  let inCurrentPair = false;
  for (let i = 0; i < track.lyrics.length; i++) {
    const character = track.lyrics[i];
    const firstToCompare = allSortedIndices[pairCount] && allSortedIndices[pairCount][0];
    const secondToCompare = allSortedIndices[pairCount] && allSortedIndices[pairCount][1];
    if (firstToCompare === i) {
      // entering the start of an annotation
      renderedSpans.push([currentSpan.join("").toLowerCase()]);
      inCurrentPair = true;
      currentSpan = [character];
    } else if (secondToCompare === i) {
      // ending an annotation
      renderedSpans.push([currentSpan.join("").toUpperCase()]);
      inCurrentPair = false;
      currentSpan++;
      currentSpan = [character];
    } else if (inCurrentPair) {
      currentSpan.push(character);
    } else if (track.lyrics.length - 1 === i && inCurrentPair) {
      // last element, in an annotation
      currentSpan.push(character);
      renderedSpans.push([currentSpan.join("").toUpperCase()]);
    } else if (track.lyrics.length - 1 === i && !inCurrentPair) {
      // last element, not in an annotation
      currentSpan.push(character);
      renderedSpans.push([currentSpan.join("").toLowerCase()]);
    } else {
      currentSpan.push(character);
    }
  }
  console.log("Rendered spans:", renderedSpans)

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
