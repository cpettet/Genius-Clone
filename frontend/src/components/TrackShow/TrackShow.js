import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import styles from "./track-show.module.css";

const TrackShow = () => {
  const trackId = useParams().id;
  const [track, setTrack] = useState({});

  useEffect(() => {
    const getTrack = async () => {
      const res = await csrfFetch(`/api/tracks/${trackId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setTrack(data);
    };
    getTrack();
  }, [trackId]);

  return (
    <div className={styles.track__container}>
      <div className={styles.track}>
        <div
          className={styles.information__container}
          style={{ backgroundImage: `url(${track.albumArtLink})` }}
        >
          <div className={styles.track__overlay}>
            <img
              src={track.albumArtLink}
              className={styles["information__album-art"]}
              alt={`Album art for ${track.album}`}
            />
            <h1>{track.title}</h1>
            <h3>{track.artist}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackShow;
