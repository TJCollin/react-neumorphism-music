import { Button, Card, CardContent, Icon, IconButton } from "collin-ui";
import React, { FC, forwardRef, memo, useImperativeHandle } from "react";
import { Song } from "../../typings";
import styles from "./index.module.scss";
import { actions } from "../Player/store";
import { useDispatch, useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import { deepClone } from "../../utils/tools";
import { formatSingerName } from "../../utils/format";
import { useRef } from "react";

export interface SongListProps {
  recommendSongs: Song[];
  curId: number;
}

export interface SongListInstance {
  play: (idx: number) => void;
  getListDom?: () => HTMLDivElement | null;
}

const SongList = forwardRef((props: SongListProps, ref) => {
  const { recommendSongs, curId } = props;
  const dispatch = useDispatch();
  const handleSongClick = (idx: number) => {
    dispatch(actions.changeSongListAction(deepClone(recommendSongs)));
    dispatch(actions.changeCurrentIndexAction(idx));
  };
  const listRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, (): SongListInstance => {
    return {
      play: (idx) => {
        handleSongClick(idx);
      },
      getListDom: () => {
        return listRef.current;
      },
    };
  });

  return (
    <div className={styles["songs-wrapper"]} ref={listRef}>
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
                <IconButton
                  rounded
                  icon={songItem.id === curId ? "podcast" : "play"}
                  className={styles["play-button"]}
                  onClick={() => {
                    handleSongClick(idx);
                  }}
                ></IconButton>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
});

export default memo(SongList);
