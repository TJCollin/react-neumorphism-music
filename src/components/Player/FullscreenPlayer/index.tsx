import { Icon } from "collin-ui";
import { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Song } from "../../../typings";
import { formatSingerName } from "../../../utils/format";
import { changeFullscreenAction } from "../store/actions";
import styles from "./index.module.scss";
import CD from "./CD";
import Controller from "./Controller";
import { handleProgressChange } from "..";

export interface FullscreenPlayerProps {
  fullscreen: boolean;
  curSong: Song;
  status: boolean;
  curIdx: number;
  percent: number;
  onProgressChange: handleProgressChange;
}

const FullscreenPlayer: FC<FullscreenPlayerProps> = ({
  fullscreen,
  curSong,
  curIdx,
  status,
  percent,
  onProgressChange,
}) => {
  const dispatch = useDispatch();
  const handleToggleFullscreen = () => {
    dispatch(changeFullscreenAction(false));
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
        <CD curSong={curSong} status={status}></CD>
        <Controller
          percent={percent}
          status={status}
          curIdx={curIdx}
          onProgressChange={onProgressChange}
        ></Controller>
      </div>
    </CSSTransition>
  );
};

export default memo(FullscreenPlayer);
