import { Button, Icon } from "collin-ui";
import React, { FC, memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { StoreState } from "../../store";
import { formatSongUrl } from "../../utils/format";
import styles from "./index.module.scss";
import MiniPlayer from "./MiniPlayer";

const Player: FC = () => {
  const { curSong } = useSelector((state: StoreState) => ({
    curSong: state.player.currentSong,
  }));

  useEffect(() => {
    const audioDom = audioRef.current;
    if (curSong && audioDom) {
      audioDom.src = formatSongUrl(curSong.id);
    }
  }, [curSong]);

  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className="player">
      <MiniPlayer />
      <audio autoPlay ref={audioRef}></audio>
    </div>
  );
};

export default memo(Player);
