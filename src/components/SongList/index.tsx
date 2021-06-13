import { Button, Card, CardContent, Icon } from "collin-ui";
import React, { FC, memo } from "react";
import { Song } from "../../typings";
import styles from "./index.module.scss";
import { actions } from "../Player/store";
import { useDispatch, useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import { deepClone } from "../../utils/tools";
import { StoreState } from "../../store";
import { formatSingerName } from "../../utils/format";

export interface SongListProps {
  recommendSongs: Song[];
  curId: number;
}

const SongList: FC<SongListProps> = (props: SongListProps) => {
  const { recommendSongs, curId } = props;
  const dispatch = useDispatch();
  const handleSongClick = (idx: number) => {
    dispatch(actions.changeSongListAction(deepClone(recommendSongs)));
    dispatch(actions.changeCurrentIndexAction(idx));
  };

  return (
    <div className={styles["songs-wrapper"]}>
      <div className={styles["wrapper-content"]}>
        {recommendSongs.map((songItem, idx) => {
          return (
            <Card className={styles["card"]} key={songItem.id}>
              <CardContent className={styles["content"]}>
                <div className={styles["img"]}>
                  <LazyLoad
                    debounce={500}
                    placeholder={
                      <img
                        src={require("../../assets/images/music.png").default}
                        alt="music"
                        width="50"
                        height="100%"
                        className={styles["img"]}
                      />
                    }
                  >
                    <img
                      src={songItem.album.picUrl}
                      alt=""
                      className={styles["img"]}
                      width="100%"
                      height="100%"
                    />
                  </LazyLoad>
                </div>
                <div className={styles["info"]}>
                  <p className={styles["song-name"]}>{songItem.name}</p>
                  <p className={styles["song-info"]}>
                    {`${formatSingerName(songItem.singers)} - ${
                      songItem.album.name
                    }`}
                  </p>
                </div>
                <Button
                  className={styles["play-button"]}
                  onClick={() => {
                    handleSongClick(idx);
                  }}
                >
                  <Icon
                    icon={songItem.id === curId ? "podcast" : "play"}
                  ></Icon>
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
