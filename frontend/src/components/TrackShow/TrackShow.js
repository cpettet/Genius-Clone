import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./track-show.module.css";
import CommentsShow from "../Comments/CommentsShow";
import TrackInfo from "../TrackInfo";
import Error404 from "../Error404";
import { getTrack } from "../../store/track";
import TrackEdit from "../TrackEdit";
import LyricsShow from "../LyricsShow";
import AnnotationForm from "../AnnotationForm";
import { getTrackComments } from "../../store/comment";
import { getTrackAnnotations } from "../../store/annotation";

const TrackShow = () => {
  const dispatch = useDispatch();
  const trackId = useParams().id;
  const track = useSelector((state) => state.tracks?.byId[trackId]);
  const [indices, setIndices] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [annotateMode, setAnnotateMode] = useState(false);
  const [annotateBox, setAnnotateBox] = useState(false);
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [yCoordinate, setYCoordinate] = useState(0);
  const sessionUser = useSelector((state) => state.session?.user);

  useEffect(() => {
    dispatch(getTrack(trackId));
    dispatch(getTrackComments(trackId));
    dispatch(getTrackAnnotations(trackId));
  }, [dispatch, trackId]);

  useEffect(() => {
    setStartIndex(Math.min(...indices));
    setEndIndex(Math.max(...indices));
  }, [indices]);

  useEffect(() => {
    if (startIndex !== endIndex) setAnnotateMode(true);
    else setAnnotateMode(false);
  }, [startIndex, endIndex]);

  const startAnAnnotation = (e) => {
    e.preventDefault();
    const highlighted = window.getSelection().getRangeAt(0);
    setIndices([highlighted.startOffset, highlighted.endOffset]);
    setYCoordinate(e.pageY);
  };

  return track ? (
    <div className={styles.track__container}>
      <TrackInfo track={track} sessionUser={sessionUser} />
      <div className={styles.lyrics__container}>
        <div
          className={styles.lyrics__container__left}
          onMouseUp={startAnAnnotation}
        >
          <TrackEdit
            track={track}
            editMode={editMode}
            setEditMode={setEditMode}
            sessionUser={sessionUser}
          />
          <LyricsShow
            editMode={editMode}
            setAnnotateBox={setAnnotateBox}
            setAnnotateMode={setAnnotateMode}
            track={track}
            setIndices={setIndices}
          />
          <CommentsShow trackId={trackId} />
        </div>
        <div className={styles.lyrics__container__right}>
          <div>About "{track?.title}"...</div>
          {annotateMode && (
            <AnnotationForm
              annotateBox={annotateBox}
              setAnnotateBox={setAnnotateBox}
              yCoordinate={yCoordinate}
              setAnnotateMode={setAnnotateMode}
              startIndex={startIndex}
              endIndex={endIndex}
              trackId={trackId}
              sessionUser={sessionUser}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <Error404 />
  );
};

export default TrackShow;
