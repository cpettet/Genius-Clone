import { useState } from "react";
import { useHistory } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import styles from "./track-form.module.css";

const TrackForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [albumArtLink, setAlbumArtLink] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    
    try {
      const res = await csrfFetch("/api/tracks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artist, title, album, lyrics, albumArtLink })
      });
      const track = await res.json();
      if (track && track.errors) setErrors(track.errors);
    } catch (e) {
      setErrors(e.errors);
    }
    history.push("/")

  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Song</h1>
      <h2
        className={
          errors.length > 0 ? "form__error-header" : "form__error-header hidden"
        }
      >
        Errors
      </h2>
      <ul className={errors.length > 0 ? "errors" : "errors hidden"}>
        {errors.map((error, id) => (
          <li key={id}>{error}</li>
        ))}
      </ul>
      <h3 className={styles.form__header}>Primary info</h3>
      <div className={styles.form__section}>
        <div className={styles["input-container"]}>
          <label htmlFor="artist">By</label>
          <input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder={"The primary artist, author, creator, etc."}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="album">Album</label>
          <input
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            placeholder={"Album"}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="albumArtLink">Album Art Link</label>
          <input
            value={albumArtLink}
            onChange={(e) => setAlbumArtLink(e.target.value)}
            placeholder={"Direct link to album art."}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="lyrics">Lyrics</label>
          <textarea
            className={styles.lyrics}
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            placeholder={"But for now we are young \nLet us lay in the sun \nAnd count every beautiful thing we can see"}
          />
        </div>
      </div>
      <button className={styles.submit}>Submit</button>
    </form>
  );
};

export default TrackForm;
