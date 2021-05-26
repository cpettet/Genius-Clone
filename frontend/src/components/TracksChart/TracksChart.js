import { useEffect, useState } from "react";
import { csrfFetch } from "../../store/csrf";
import TracksChartItem from "../TracksChartItem";
import styles from "./track-chart.module.css";

const TracksChart = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getTracks = async () => {
      const res = await csrfFetch("/api/tracks", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      setTracks(data);
    };
    getTracks();
  }, []);

  return (
    <div className={styles.chart}>
      <div className={styles.headers}>
        <h1>CHARTS</h1>
        <h4>TRENDING ON FOLK GENIUS</h4>
      </div>
      <div className={styles.tracks}>
        {tracks.map((track, id) => (
          <TracksChartItem track={track} id={id} key={track.id} />
        ))}
      </div>
    </div>
  );
};

export default TracksChart;
