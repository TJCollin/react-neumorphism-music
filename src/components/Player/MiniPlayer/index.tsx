import { Button, Icon } from "collin-ui";
import React, { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../../store";
import { Song } from "../../../typings";
import {
  changePlayStatusAction,
  changeShowSongListAction,
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
  const handlePlayButtonClick = () => {
    console.log("play", !playStatus);
    dispatch(changePlayStatusAction(!playStatus));
  };

  const handleListButtonClick = () => {
    dispatch(changeShowSongListAction(true));
  };

  return (
    <CSSTransition
      in={song !== undefined}
      timeout={400}
      classNames="mini"
      unmountOnExit
    >
      <div className={styles["mini-player"]}>
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
          <Button
            className={styles["control-button"]}
            onClick={handlePlayButtonClick}
          >
            <Icon icon={playStatus ? "pause" : "play"} />
          </Button>
          <Button
            className={styles["control-list"]}
            onClick={handleListButtonClick}
          >
            <Icon icon="list-ul" />
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(MiniPlayer);
