import { Button, Icon } from "collin-ui";
import React, { FC, memo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../store";
import styles from "./index.module.scss";

const Player: FC = () => {
  const { curSong } = useSelector((state: StoreState) => ({
    curSong: state.player.currentSong,
  }));
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="player">
      {curSong && (
        <CSSTransition
          in={curSong !== null}
          timeout={400}
          classNames="mini"
          unmountOnExit
        >
          <div className={styles["mini-player"]}>
            <div className={styles["img-wrap"]}></div>
            <div className={styles["text"]}></div>
            <div className={styles["control"]}>
              <Button>
                <Icon icon="play" />
              </Button>
            </div>
          </div>
        </CSSTransition>
      )}
      <audio autoPlay ref={audioRef}></audio>
    </div>
  );
};

export default memo(Player);
