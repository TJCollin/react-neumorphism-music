import React, {
  FC,
  memo,
  useCallback,
  useState,
  TouchEvent,
  MouseEvent,
  useRef,
} from "react";
import { CSSTransition } from "react-transition-group";
import { Song } from "../../../typings";
import styles from "./index.module.scss";
import Scroll, { Position } from "../../Scroll";
import { useDispatch } from "react-redux";
import { changeShowSongListAction, deleteSongAction } from "../store/actions";
import { Button, Icon } from "collin-ui";
import { formatSingerName } from "../../../utils/format";
import classNames from "classnames";

export interface SongListProps {
  songList: Song[];
  index: number;
}

const SongList: FC<SongListProps> = (props) => {
  const { songList, index } = props;
  const [canTouch, setCanTouch] = useState(true);
  const handleScroll = useCallback((pos: Position) => {
    setCanTouch(pos.y === 0);
  }, []);
  const [touchInfo, setTouchInfo] = useState({
    startY: 0,
    distance: 0,
    // initial 用于区分是点击还是touch时间
    initialed: false,
  });
  const listRef = useRef<HTMLDivElement>(null);
  const handleTouchStart = (e: TouchEvent) => {
    if (!canTouch || touchInfo.initialed) {
      return;
    }
    listRef.current!.style["transition"] = "";

    setTouchInfo({
      startY: e.nativeEvent.touches[0].pageY,
      distance: 0,
      initialed: true,
    });
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!canTouch || !touchInfo.initialed) {
      return;
    }
    const dis = e.nativeEvent.touches[0].pageY - touchInfo.startY;
    if (dis < 0) {
      return;
    }
    setTouchInfo({ ...touchInfo, distance: dis });
    listRef.current!.style.transform = `translate3d(0, ${dis}px, 0)`;
  };
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const handleTouchEnd = (e: TouchEvent) => {
    console.log(canTouch);
    if (!canTouch || !touchInfo.initialed) {
      return;
    }
    if (touchInfo.distance > 150) {
      listRef.current!.style.transition = `all .3s`;
      setShow(false);
    } else {
      setTouchInfo({ startY: 0, distance: 0, initialed: false });
      listRef.current!.style.transition = `all .3s`;
      listRef.current!.style.transform = `translate3d(0, 0, 0)`;
    }
  };

  const handleDeleteClick = (e: MouseEvent, idx: number) => {
    setCanTouch(false);
    e.stopPropagation();
    dispatch(deleteSongAction(idx));
  };

  const onEnterCB = useCallback(() => {
    listRef.current!.style["transform"] = `translate3d(0, 100%, 0)`;
  }, []);

  const onEnteringCB = useCallback(() => {
    listRef.current!.style["transition"] = "all 0.3s";
    listRef.current!.style["transform"] = `translate3d(0, 0, 0)`;
  }, []);

  const onExitCB = useCallback(() => {
    listRef.current!.style[
      "transform"
    ] = `translate3d(0, ${touchInfo.distance}px, 0)`;
  }, [touchInfo.distance]);

  const onExitingCB = useCallback(() => {
    listRef.current!.style["transition"] = "all 0.3s";
    listRef.current!.style["transform"] = `translate3d(0px, 100%, 0px)`;
  }, []);

  const onExitedCB = useCallback(() => {
    listRef.current!.style["transform"] = `translate3d(0px, 100%, 0px)`;
    dispatch(changeShowSongListAction(false));
  }, []);

  return (
    <CSSTransition
      timeout={500}
      in={show}
      appear
      classNames="move"
      onEnter={onEnterCB}
      onEntering={onEnteringCB}
      onExit={onExitCB}
      onExiting={onExitingCB}
      onExited={onExitedCB}
    >
      <div
        className={styles["song-list"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={styles["mask"]}
          onClick={() => {
            setShow(false);
          }}
        ></div>
        <div
          className={styles["list-wrap"]}
          ref={listRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles["list-header"]}>
            <div className={styles["play-mode"]}>
              <span>播放列表</span>
            </div>
          </div>
          <div className={styles["list-scroll-wrap"]}>
            <Scroll onScroll={handleScroll}>
              <ul>
                {songList.map((item, idx) => {
                  return (
                    <li
                      key={item.id}
                      className={classNames(
                        styles["song-item"],
                        index === idx && styles["active"]
                      )}
                    >
                      <p>
                        <span>
                          {idx === index && <Icon icon="play-circle"></Icon>}
                        </span>

                        {`${item.name} - ${formatSingerName(item.singers)} `}
                      </p>
                      <Button
                        className={styles["delete"]}
                        btnType="primary"
                        onClick={(e) => {
                          handleDeleteClick(e, idx);
                        }}
                      >
                        <Icon icon="trash"></Icon>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </Scroll>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(SongList);
