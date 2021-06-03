import { Button, Icon } from "collin-ui";
import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../../store";
import styles from "./index.module.scss";

const MiniPlayer: FC = () => {
  const { curSong } = useSelector((state: StoreState) => ({
    curSong: state.player.currentSong,
  }));
  return (
    <CSSTransition
      in={curSong !== null}
      timeout={400}
      classNames="mini"
      unmountOnExit
    >
      <div className={styles["mini-player"]}>
        <div className={styles["img-wrap"]}>
          <img
            src={curSong?.album.picUrl + "?param=100y100"}
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className={styles["text"]}>
          <p className={styles["name"]}>{curSong?.name}</p>
          <p className={styles["singer"]}>
            {curSong?.singers.map((item) => item.name).join(" / ")}
          </p>
        </div>
        <div className={styles["control"]}>
          <Button className={styles["control-button"]}>
            <Icon icon="play" />
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(MiniPlayer);
