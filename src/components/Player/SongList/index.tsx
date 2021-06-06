import React, {
  FC,
  memo,
  useCallback,
  useState,
  TouchEvent,
  useRef,
} from "react";
import { CSSTransition } from "react-transition-group";
import { Song } from "../../../typings";
import styles from "./index.module.scss";
import Scroll, { Position } from "../../Scroll";
import { useDispatch } from "react-redux";
import { changeShowSongListAction } from "../store/actions";

export interface SongListProps {
  songList: Song[];
}

const SongList: FC<SongListProps> = (props) => {
  const { songList } = props;
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
    // listRef.current!.style["transition"] = "";
    if (!canTouch || touchInfo.initialed) {
      return;
    }
    setTouchInfo({
      startY: e.nativeEvent.touches[0].pageY,
      distance: 0,
      initialed: true,
    });
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!canTouch || touchInfo.initialed) {
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
    console.log(touchInfo.initialed, "end");
    if (!canTouch || !touchInfo.initialed) {
      return;
    }
    if (touchInfo.distance > 150) {
      setShow(false);
    } else {
      setTouchInfo({ startY: 0, distance: 0, initialed: false });
      listRef.current!.style.transition = `all .3s`;
      listRef.current!.style.transform = `translate3d(0, 0, 0)`;
    }
  };

  return (
    <CSSTransition
      timeout={500}
      in={show}
      appear
      classNames="move"
      onExited={() => {
        dispatch(changeShowSongListAction(false));
      }}
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
                {songList.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
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
