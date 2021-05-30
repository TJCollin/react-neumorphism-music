import { Button, Card, CardContent, Icon } from "collin-ui";
import React, { FC, memo } from "react";
import { Song } from "../../../typings";
import styles from "./index.module.scss";

export interface SongListProps {
  recommendSongs: Song[];
}

const SongList: FC<SongListProps> = (props: SongListProps) => {
  const { recommendSongs } = props;
  return (
    <div className={styles["songs-wrapper"]}>
      <div className={styles["wrapper-content"]}>
        {recommendSongs.map((songItem) => {
          return (
            <Card className={styles["card"]} key={songItem.id}>
              <CardContent className={styles["content"]}>
                <div className={styles["img"]}>
                  <img src={songItem.album.picUrl} alt="" />
                </div>
                <div className={styles["info"]}>
                  <p className={styles["song-name"]}>{songItem.name}</p>
                  <p className={styles["song-info"]}>
                    {`${songItem.singers
                      .map((singer) => singer.name)
                      .join(" / ")} - ${songItem.album.name}`}
                  </p>
                </div>
                <Button className={styles["play-button"]}>
                  <Icon icon="play"></Icon>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default memo(SongList);
