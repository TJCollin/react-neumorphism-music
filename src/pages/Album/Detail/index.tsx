import React, { FC, memo } from "react";
import { AlbumProps } from "..";
import { Song } from "../../../typings";
import styles from "./index.module.scss";

export interface AlbumDetailProps extends AlbumProps {
  tracks: Song[];
}

const Detail: FC<AlbumDetailProps> = ({
  coverImgUrl,
  subscribedCount,
  name,
  creator,
  tracks,
}) => {
  return (
    <div className={styles["album-detail"]}>
      <div className={styles["top"]}>
        <div
          className={styles["background"]}
          style={{ backgroundImage: `url(${coverImgUrl})` }}
        >
          <div className={styles["filter"]}></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
