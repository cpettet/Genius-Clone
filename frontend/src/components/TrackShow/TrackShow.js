import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./track-show.module.css";
import CommentsShow from "../Comments/CommentsShow";
import TrackInfo from "../TrackInfo";
import Error404 from "../Error404";
import { getTrack } from "../../store/track";
import TrackEdit from "../TrackEdit";
import AnnotationForm from "../AnnotationForm";
import { getTrackComments } from "../../store/comment";

const TrackShow = () => {
  const dispatch = useDispatch();
  const trackId = useParams().id;
  const track = useSelector((state) => state.tracks?.byId[trackId]);
  const [editMode, setEditMode] = useState(false);
  const [annotateMode, setAnnotateMode] = useState(false);
  const [annotateBox, setAnnotateBox] = useState(false);
  const [yCoordinate, setYCoordinate] = useState(0);
  const sessionUser = useSelector((state) => state.session?.user);

  useEffect(() => {
    dispatch(getTrack(trackId));
    dispatch(getTrackComments(trackId));
  }, [dispatch, trackId]);

  const startAnAnnotation = async (e) => {
    e.preventDefault();
    const highlighted = window.getSelection();
    const indices = [highlighted.anchorOffset, highlighted.focusOffset];
    const startIndex = Math.min(...indices);
    const endIndex = Math.max(...indices);
    await setYCoordinate(e.pageY);
    if (startIndex !== endIndex) {
      setAnnotateMode(true);
      console.log("Here's the highlighted:", highlighted);
      console.log("Here's the start index:", startIndex);
      console.log("Here's the ending index:", endIndex);
      console.log("Here's the y-coordinate:", yCoordinate);
    }
  };

  return track ? (
    <div className={styles.track__container}>
      <TrackInfo track={track} sessionUser={sessionUser} />
      <div className={styles.lyrics__container}>
        <div className={styles.lyrics__container__left}>
          <TrackEdit
            track={track}
            editMode={editMode}
            setEditMode={setEditMode}
            sessionUser={sessionUser}
          />
          <p
            hidden={editMode}
            onMouseUp={startAnAnnotation}
            onMouseDown={() => {
              setAnnotateMode(false);
              setAnnotateBox(false);
            }}
            className={styles.track__lyrics}
          >
            {track.lyrics}
          </p>
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
