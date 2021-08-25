import React, { useState, useEffect } from "react";
import styles from "./TrackEdit.module.css";
import { useDispatch } from "react-redux";
import { updateTrack, deleteTrack } from "../../store/track";
import { useHistory } from "react-router";

export default function TrackEdit({
  track,
  editMode,
  setEditMode,
  sessionUser,
}) {
  const history = useHistory();
  const [lyrics, setLyrics] = useState("");
  const dispatch = useDispatch();

  function onDelete(e) {
    e.preventDefault();
    dispatch(deleteTrack(track.id));
    history.push("/");
  }

  useEffect(() => {
    setLyrics(track?.lyrics);
  }, [track]);

  function onEdit(e) {
    e.preventDefault();
    dispatch(
      updateTrack({
        trackId: track.id,
        artist: track.artist,
        title: track.title,
        album: track.album,
        lyrics: lyrics,
        albumArtLink: track.albumArtLink,
      })
    );
    setEditMode(false);
  }

  const toggleEdits = () => {
    setEditMode((prevValue) => !prevValue);
  };

  return (
    <div className={styles["edit-track"]}>
      <div className={styles.buttons}>
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
          hidden={editMode === false || sessionUser?.id !== track.uploaderId}
        >
          {editMode && "Delete Track"}
        </button>
      </div>
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
    </div>
  );
}
