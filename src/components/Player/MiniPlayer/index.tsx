import { Button, Icon, IconButton } from "collin-ui";
import React, {
  FC,
  memo,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../../store";
import { Song } from "../../../typings";
import {
  changePlayStatusAction,
  changeShowSongListAction,
  changeFullscreenAction,
} from "../store/actions";
import styles from "./index.module.scss";
import classNames from "classnames";

export interface MiniPlayerProps {
  playStatus: boolean;
  song?: Song;
}

const MiniPlayer: FC<MiniPlayerProps> = (props) => {
  const { song, playStatus } = props;
  const dispatch = useDispatch();
  const handlePlayButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("play", !playStatus);
    dispatch(changePlayStatusAction(!playStatus));
  };

  const handleListButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(changeShowSongListAction(true));
  };

  const handlePlayerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(changeFullscreenAction(true));
  };

  return (
    <CSSTransition
      in={song !== undefined}
      timeout={400}
      classNames="mini"
      unmountOnExit
    >
      <div className={styles["mini-player"]} onClick={handlePlayerClick}>
        <div
          className={classNames(
            styles["img-wrap"],
            !playStatus && styles["pause"]
          )}
        >
          <img
            src={song?.album.picUrl + "?param=100y100"}
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className={styles["text"]}>
          <p className={styles["name"]}>{song?.name}</p>
          <p className={styles["singer"]}>
            {song?.singers.map((item) => item.name).join(" / ")}
          </p>
        </div>
        <div className={styles["control"]}>
          <IconButton
            rounded
            icon={playStatus ? "pause" : "play"}
            className={styles["control-button"]}
            onClick={handlePlayButtonClick}
          ></IconButton>

          <IconButton
            rounded
            icon="list-ul"
            className={styles["control-list"]}
            onClick={handleListButtonClick}
          ></IconButton>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(MiniPlayer);
