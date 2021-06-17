import React, { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { Card, CardContent } from "collin-ui";
import LazyLoad from "react-lazyload";
import { Song } from "../../../../typings";
import { memo } from "react";

export interface CDProps {
  curSong: Song;
  status: boolean;
}

const CD: FC<CDProps> = ({ curSong, status }) => {
  return (
    <div className={classNames(styles["cd"], !status && styles["pause"])}>
      <Card className={styles["img-card"]}>
        <CardContent>
          <LazyLoad
            debounce={500}
            placeholder={
              <img
                src={require("../../../../assets/images/music.png").default}
                alt="music"
                width="50"
                height="100%"
                className={styles["img"]}
              />
            }
          >
            <img src={curSong.album.picUrl} alt="" />
          </LazyLoad>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(CD);
