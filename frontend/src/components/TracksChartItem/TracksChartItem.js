import { Link } from "react-router-dom";
import styles from "./tracks-chart-item.module.css";

const TracksChartItem = ({ track, id }) => {
  return (
    <Link to={`/tracks/${track.id}`} style={{ textDecoration: "none" }}>
      <div className={styles.chart__item}>
        <div className={styles.number}>{id + 1}</div>
        <div className={styles.art__container}>
          <img
            className={styles.art}
            src={track.albumArtLink}
            alt={`Album art for ${track.track}`}
          />
        </div>
        <div className={styles.title__container}>
          <div className={styles.title__text}>{track.title}</div>
          <div className={styles.title__lyrics}>LYRICS</div>
        </div>
        <div className={styles.track__artist}>{track.artist}</div>
      </div>
    </Link>
  );
};

export default TracksChartItem;
