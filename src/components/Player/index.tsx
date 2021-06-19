import { Button, Icon } from "collin-ui";
import React, {
  BaseSyntheticEvent,
  FC,
  memo,
  ReactEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../store";
import { Song } from "../../typings";
import { formatSongUrl } from "../../utils/format";
import FullscreenPlayer from "./FullscreenPlayer";
import styles from "./index.module.scss";
import MiniPlayer from "./MiniPlayer";
import SongList from "./SongList";
import {
  changeCurrentIndexAction,
  changePlayStatusAction,
} from "./store/actions";

export type handleProgressChange = (percent: number) => void;

const Player: FC = () => {
  const { curIdx, songList, status, showSongList, fullscreen } = useSelector(
    (state: StoreState) => ({
      curIdx: state.player.currentIndex,
      songList: state.player.songList,
      status: state.player.playStatus,
      showSongList: state.player.showSongList,
      fullscreen: state.player.fullScreen,
    })
  );
  const dispatch = useDispatch();

  const [curSong, setCurSong] = useState<Song | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0),
    [duration, setDuration] = useState<number>(0),
    [percent, setPercent] = useState<number>(0);

  /**
   * 更新当前时间
   * @param {Event} e
   */
  const handleUpdateTime: ReactEventHandler<HTMLAudioElement> = (
    e: BaseSyntheticEvent
  ): void => {
    setCurrentTime(e.target.currentTime);
    const per: number = isNaN(e.target.currentTime / duration)
      ? 0
      : (currentTime / duration) * 100;
    setPercent(per);
  };

  /**
   * 控制进度条
   * @param {Number} 进度条百分比
   */
  const handleProgressChange: handleProgressChange = useCallback(
    (percent: number): void => {
      console.log(percent);
      const newTime: number = percent * duration;
      setCurrentTime(newTime);
      audioRef.current!.currentTime = newTime;
      !status && changePlayStatusAction(true);
    },
    [duration]
  );
  useEffect(() => {
    if (curIdx < 0 || songList.length < 1) {
      return;
    }
    const newSong = songList[curIdx];
    setCurSong((preSong) => {
      return preSong?.id === newSong.id ? preSong : newSong;
    });
    setCurrentTime(0);
    setDuration(newSong.dt / 1000 || 0);
  }, [songList, curIdx]);

  /**
   * 监听歌曲变化
   */
  useEffect(() => {
    const audioDom = audioRef.current;
    if (curSong && audioDom) {
      audioDom.src = formatSongUrl(curSong.id);
      dispatch(changePlayStatusAction(true));
    }
  }, [curSong]);

  /**
   * 监听歌曲状态
   */
  useEffect(() => {
    const audioDom = audioRef.current;
    if (audioDom) {
      if (status) {
        audioDom.play();
      } else {
        audioDom.pause();
      }
    }
  }, [status]);

  const handleEnded = () => {
    console.log("end");
    dispatch(changeCurrentIndexAction(curIdx + 1));
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="player">
      <MiniPlayer song={songList[curIdx]} playStatus={status} />
      <audio
        autoPlay
        ref={audioRef}
        onTimeUpdate={handleUpdateTime}
        onEnded={handleEnded}
      ></audio>
      {showSongList && <SongList index={curIdx} songList={songList}></SongList>}
      {curSong && (
        <FullscreenPlayer
          onProgressChange={handleProgressChange}
          status={status}
          curIdx={curIdx}
          fullscreen={fullscreen}
          curSong={curSong}
          percent={percent}
        ></FullscreenPlayer>
      )}
    </div>
  );
};

export default memo(Player);
