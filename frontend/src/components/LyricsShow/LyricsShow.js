import { useState } from "react";
import styles from "./LyricsShow.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

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
    return [...acc, [next.startIndex, next.endIndex]];
  }, []);

  console.log("All indices in order:", allSortedIndices);

  const buildUnannotatedSpan = (characterArray) => {
    const spanOfChars = characterArray.join("");

    return <span className={styles.lyrics__unannotated}>{spanOfChars}</span>;
  };

  const buildAnnotatedSpan = (characterArray, pairCount) => {
    const spanOfChars = characterArray.join("");
    return (
      <Link to={`/tracks/${track.id}/#${sortedAnnotations[pairCount].id}`}>
        <span className={styles.lyrics__annotated}>{spanOfChars}</span>
      </Link>
    );
  };

  const renderedSpans = [];
  let pairCount = 0;
  let currentSpan = [];
  let inCurrentPair = false;
  for (let i = 0; i < track.lyrics.length; i++) {
    const character = track.lyrics[i];
    const firstToCompare =
      allSortedIndices[pairCount] && allSortedIndices[pairCount][0];
    const secondToCompare =
      allSortedIndices[pairCount] && allSortedIndices[pairCount][1];
    console.log(
      "Character:",
      character,
      "\nFirst Index:",
      firstToCompare,
      "\nSecond Index:",
      secondToCompare
    );
    if (firstToCompare === i) {
      // entering the start of an annotation
      renderedSpans.push(buildUnannotatedSpan(currentSpan));
      inCurrentPair = true;
      currentSpan = [character];
    } else if (secondToCompare === i) {
      // ending an annotation
      renderedSpans.push(buildAnnotatedSpan(currentSpan, pairCount));
      inCurrentPair = false;
      pairCount++;
      currentSpan = [character];
    } else if (inCurrentPair) {
      // characters in annotation
      currentSpan.push(character);
    } else if (track.lyrics.length - 1 === i && inCurrentPair) {
      // last element, in an annotation
      currentSpan.push(character);
      renderedSpans.push(buildAnnotatedSpan(currentSpan, pairCount));
    } else if (track.lyrics.length - 1 === i && !inCurrentPair) {
      // last element, not in an annotation
      currentSpan.push(character);
      renderedSpans.push(buildUnannotatedSpan(currentSpan));
    } else {
      // characters not in annotation
      currentSpan.push(character);
    }
  }
  console.log("Rendered spans:", renderedSpans);

  return (
    <>
      <h3>Here's where the rendered spans start</h3>
      <p
        className={styles.track__lyrics}
      >{React.Children.toArray(renderedSpans)}</p>
      <h3>Here's where the lyrics start</h3>
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
    </>
  );
};

export default LyricsShow;
