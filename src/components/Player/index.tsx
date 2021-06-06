import { Button, Icon } from "collin-ui";
import React, { FC, memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../store";
import { Song } from "../../typings";
import { formatSongUrl } from "../../utils/format";
import styles from "./index.module.scss";
import MiniPlayer from "./MiniPlayer";
import SongList from "./SongList";

const Player: FC = () => {
  const { curIdx, songList, status, showSongList } = useSelector(
    (state: StoreState) => ({
      curIdx: state.player.currentIndex,
      songList: state.player.songList,
      status: state.player.playStatus,
      showSongList: state.player.showSongList,
    })
  );

  const [curSong, setCurSong] = useState<Song | null>(null);

  useEffect(() => {
    setCurSong(songList[curIdx]);
  }, [songList, curIdx]);

  /**
   * 监听歌曲变化
   */
  useEffect(() => {
    const audioDom = audioRef.current;
    if (curSong && audioDom) {
      audioDom.src = formatSongUrl(curSong.id);
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

  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="player">
      <MiniPlayer song={songList[curIdx]} playStatus={status} />
      <audio autoPlay ref={audioRef}></audio>
      {showSongList && <SongList songList={songList}></SongList>}
    </div>
  );
};

export default memo(Player);
