import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./track-show.module.css";

const TrackShow = () => {
  const trackId = useParams().id;
  useEffect(() => {
    const track = 1;
  }, [])

  return (
    <div className={styles.track}>
      <h1>Track</h1>
    </div>
  );
};

export default TrackShow;
