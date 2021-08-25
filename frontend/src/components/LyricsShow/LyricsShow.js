import React from "react";
import { useHistory } from "react-router";
import styles from "./LyricsShow.module.css";
import { Link } from "react-router-dom";

const LyricsShow = ({
  editMode,
  setAnnotateBox,
  setAnnotateMode,
  track,
  setIndices,
  setYCoordinate,
  yCoordinate,
}) => {
  const history = useHistory();
  // sorts the annotations in order of start index
  const sortedAnnotations = Object.values(track?.Annotations).sort(
    (a, b) => a.startIndex - b.startIndex
  );

  const allSortedIndices = sortedAnnotations.reduce((acc, next) => {
    return [...acc, [next.startIndex, next.endIndex]];
  }, []);

  const buildUnannotatedSpan = (characterArray) => {
    const spanOfChars = characterArray.join("");

    return (
      <span
        onClick={() => {
          setAnnotateMode(false);
          setAnnotateBox(false);
          history.push(`/tracks/${track.id}`);
        }}
        className={styles.lyrics__unannotated}
      >
        {spanOfChars}
      </span>
    );
  };

  const buildAnnotatedSpan = (characterArray, pairCount) => {
    const spanOfChars = characterArray.join("");
    return (
      <Link
        key={pairCount}
        to={{
          pathname: `/tracks/${track.id}/${sortedAnnotations[pairCount].id}`,
        }}
        onClick={(e) => setYCoordinate(e.pageY)}
        className={styles.lyrics__annotated}
      >
        <span key={pairCount}>
          {spanOfChars}
        </span>
      </Link>
    );
  };

  const renderSpans = () => {
    const renderedSpans = [];
    let pairCount = 0;
    let currentSpan = [];
    let inCurrentPair = false;
    const charsInTrack = track.lyrics.length;

    for (let i = 0; i < charsInTrack; i++) {
      const character = track.lyrics[i];
      const firstToCompare =
        allSortedIndices[pairCount] && allSortedIndices[pairCount][0];
      const secondToCompare =
        allSortedIndices[pairCount] && allSortedIndices[pairCount][1];
      if (firstToCompare === i) {
        renderedSpans.push(buildUnannotatedSpan(currentSpan));
        inCurrentPair = true;
        currentSpan = [character];
      } else if (secondToCompare === i) {
        // ending an annotation
        renderedSpans.push(buildAnnotatedSpan(currentSpan, pairCount));
        inCurrentPair = false;
        pairCount++;
        currentSpan = [character];
      } else if (track.lyrics.length - 1 === i && inCurrentPair) {
        // last element, in an annotation
        currentSpan.push(character);
        renderedSpans.push(buildAnnotatedSpan(currentSpan, pairCount));
      } else if (track.lyrics.length - 1 === i && !inCurrentPair) {
        // last element, not in an annotation
        currentSpan.push(character);
        renderedSpans.push(buildUnannotatedSpan(currentSpan));
      } else {
        currentSpan.push(character);
      }
    }
    return React.Children.toArray(renderedSpans);
  };

  return (
    <>
      <p
        hidden={editMode}
        onMouseDown={() => {
          setAnnotateMode(false);
          setAnnotateBox(false);
          setIndices([]);
        }}
        className={styles.track__lyrics}
      >
        {renderSpans()}
      </p>
    </>
  );
};

export default LyricsShow;
