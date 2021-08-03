import React from "react";
import styles from "./TrackInfo.module.css";

export default function TrackInfo({ track, sessionUser }) {
  return (
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
  );
}
