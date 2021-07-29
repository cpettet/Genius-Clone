import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styles from "./track-show.module.css";
import CommentsShow from "../Comments/CommentsShow";
import { getTrack, updateTrack, deleteTrack } from "../../store/track";
import { getTrackComments } from "../../store/comment";

const TrackShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const trackId = useParams().id;
  const track = useSelector((state) => state.tracks?.byId[trackId]);
  const [editMode, setEditMode] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const sessionUser = useSelector((state) => state.session?.user);

  const toggleEdits = () => {
    setEditMode((prevValue) => !prevValue);
  };

  useEffect(() => {
    dispatch(getTrack(trackId));
    dispatch(getTrackComments(trackId));
    setLyrics(track?.lyrics);
  }, [dispatch, trackId, track?.lyrics]);

  async function onEdit(e) {
    e.preventDefault();
    await dispatch(
      updateTrack({
        trackId: trackId,
        artist: track.artist,
        title: track.title,
        album: track.album,
        lyrics: lyrics,
        albumArtLink: track.albumArtLink,
      })
    );
    setEditMode(false);
  }

  async function onDelete(e) {
    e.preventDefault();
    dispatch(deleteTrack(trackId));
    history.push("/");
  }

  function createMarkup() {
    return { __html: track?.lyrics };
  }

  return (
    <div className={styles.track__container}>
      <div className={styles.track__info}>
        <div className={styles.track}>
          <div
            className={styles.information__container}
            style={{ backgroundImage: `url(${track?.albumArtLink})` }}
          >
            <div className={styles.track__overlay}>
              <img
                src={track?.albumArtLink}
                className={styles["information__album-art"]}
                alt={`Album art for ${track?.album}`}
              />
              <div className={styles.track__overlay__text}>
                <h1 className={styles.track__title}>{track?.title}</h1>
                <h2 className={styles.track__artist}>{track?.artist}</h2>
                <p className={styles.track__minor}>
                  Album{" "}
                  <span className={styles.track__minor__subtext}>
                    {track?.album}
                  </span>
                </p>
                <p className={styles.track__minor}>
                  COMMENTARY BY{" "}
                  <span className={styles.track__minor__subtext}>
                    {sessionUser?.username}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lyrics__container}>
        <div className={styles.lyrics__container__left}>
          <button
            className={styles["edit-lyrics-buttons"]}
            onClick={() => toggleEdits()}
          >
            {editMode ? "Cancel" : "Edit Lyrics"}
          </button>
          <button
            onClick={(e) => onEdit(e)}
            className={styles["edit-lyrics-buttons"]}
            hidden={editMode === false}
          >
            {editMode && "Submit Edit"}
          </button>
          <button
            onClick={(e) => onDelete(e)}
            className={styles["edit-lyrics-buttons"]}
            hidden={editMode === false}
          >
            {editMode && "Delete Track"}
          </button>
          <div className={styles["input-container"]} hidden={!editMode}>
            <div className={styles["input-container__warning"]}>
              Please be mindful of your edits.
            </div>
            <textarea
              className={styles["edit-lyrics-text"]}
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              placeholder={
                "But for now we are young \nLet us lay in the sun \nAnd count every beautiful thing we can see"
              }
            />
          </div>
          <div
            className={styles.lyrics}
            dangerouslySetInnerHTML={createMarkup()}
            hidden={editMode}
          ></div>
          <CommentsShow trackId={trackId} />
        </div>
        <div className={styles.lyrics__container__right}>
          <div>About "{track?.title}"...</div>
        </div>
      </div>
    </div>
  );
};

export default TrackShow;
