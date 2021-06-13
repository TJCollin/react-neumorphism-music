import { Button, Card, CardContent, Icon, ProgressBar } from "collin-ui";
import React, { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { toggleToastAction } from "../../../store/actions";
import { Song } from "../../../typings";
import { formatSingerName } from "../../../utils/format";
import {
  changeCurrentIndexAction,
  changeFullscreenAction,
  changePlayStatusAction,
  changeShowSongListAction,
} from "../store/actions";
import styles from "./index.module.scss";
import LazyLoad from "react-lazyload";
import classNames from "classnames";

export interface FullscreenPlayerProps {
  fullscreen: boolean;
  curSong: Song;
  status: boolean;
  curIdx: number;
}

const FullscreenPlayer: FC<FullscreenPlayerProps> = ({
  fullscreen,
  curSong,
  curIdx,

  status,
}) => {
  const dispatch = useDispatch();
  const handleToggleFullscreen = () => {
    dispatch(changeFullscreenAction(false));
  };
  const handleListButtonClick = () => {
    dispatch(changeShowSongListAction(true));
  };
  const handlePlayButtonClick = () => {
    dispatch(changePlayStatusAction(!status));
  };
  const handleRecycleClick = () => {
    dispatch(toggleToastAction(true, "功能暂未开发~"));
  };
  const handleNextClick = () => {
    dispatch(changeCurrentIndexAction(curIdx + 1));
  };
  const handlePreClick = () => {
    dispatch(changeCurrentIndexAction(curIdx - 1));
  };
  return (
    <CSSTransition
      classNames="full"
      timeout={500}
      in={fullscreen}
      unmountOnExit
    >
      <div className={styles["fullscreen-player"]}>
        <div className={styles["top"]}>
          <div className={styles["back"]} onClick={handleToggleFullscreen}>
            <Icon icon="chevron-down"></Icon>
          </div>
          <div className={styles["song-info"]}>
            <p className={styles["song-name"]}>{curSong.name}</p>
            <p className={styles["singer-name"]}>
              {formatSingerName(curSong.singers)}
            </p>
          </div>
        </div>
        <div className={classNames(styles["cd"], !status && styles["pause"])}>
          <Card className={styles["img-card"]}>
            <CardContent>
              <LazyLoad
                debounce={500}
                placeholder={
                  <img
                    src={require("../../../assets/images/music.png").default}
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
        <div className={styles["controller"]}>
          <ProgressBar percent={10}></ProgressBar>
          <div className={styles["button-group"]}>
            <Button
              className={styles["control-button"]}
              onClick={handleRecycleClick}
            >
              <Icon icon="sync"></Icon>
            </Button>
            <Button
              className={styles["control-button"]}
              onClick={handlePreClick}
            >
              <Icon icon="backward"></Icon>
            </Button>
            <Button
              size="lg"
              className={styles["control-button"]}
              onClick={handlePlayButtonClick}
            >
              <Icon icon={status ? "pause" : "play"}></Icon>
            </Button>
            <Button
              className={styles["control-button"]}
              onClick={handleNextClick}
            >
              <Icon icon="forward"></Icon>
            </Button>
            <Button className={styles["control-button"]}>
              <Icon icon="list-ul" onClick={handleListButtonClick}></Icon>
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(FullscreenPlayer);
