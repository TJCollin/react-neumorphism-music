import { Button, Icon, IconButton, ProgressBar } from "collin-ui";
import React, { FC, useEffect, useState, MouseEvent, TouchEvent } from "react";
import { useRef } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { handleProgressChange } from "../..";
import { toggleToastAction } from "../../../../store/actions";
import {
  changeCurrentIndexAction,
  changePlayStatusAction,
  changeShowSongListAction,
} from "../../store/actions";
import styles from "./index.module.scss";

export interface ControllerProps {
  percent: number;
  curIdx: number;
  status: boolean;
  onProgressChange: handleProgressChange;
}

const Controller: FC<ControllerProps> = ({
  percent,
  curIdx,
  status,
  onProgressChange,
}) => {
  const dispatch = useDispatch();
  const [barWidth, setBarWidth] = useState<number>(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [touchInfo, setTouchInfo] = useState({
    x: 0,
    moved: false,
  });

  /**
   * 获取进度条容器的物理宽度并保存
   */
  useEffect((): void => {
    setBarWidth(barRef.current!.clientWidth);
  }, []);
  /**
   * 显示列表
   */
  const handleListButtonClick = () => {
    dispatch(changeShowSongListAction(true));
  };
  /**
   * 播放键
   */
  const handlePlayButtonClick = () => {
    dispatch(changePlayStatusAction(!status));
  };
  /**
   * 切换循环
   */
  const handleRecycleClick = () => {
    dispatch(toggleToastAction(true, "功能暂未开发~"));
  };
  /**
   * 点击下一首
   */
  const handleNextClick = () => {
    dispatch(changeCurrentIndexAction(curIdx + 1));
  };
  /**
   * 点击前一首
   */
  const handlePreClick = () => {
    dispatch(changeCurrentIndexAction(curIdx - 1));
  };
  /**
   * 进度条点击
   */
  const handleBarClick = (e: MouseEvent) => {
    e.stopPropagation();
    const offsetLeft: number = barRef.current!.offsetLeft,
      curPercent: number = (e.pageX - offsetLeft) / barWidth;
    onProgressChange(curPercent);
  };
  /**
   * 进度条拖动
   */
  const handleTouchMove = (e: TouchEvent) => {
    setTouchInfo({ x: e.touches[0].pageX, moved: true });
  };
  /**
   * 进度条拖动结束
   */

  const handleTouchEnd = () => {
    if (!touchInfo.moved) return;
    const offsetLeft: number = barRef.current!.offsetLeft,
      curPercent: number = (touchInfo.x - offsetLeft) / barWidth;
    onProgressChange(curPercent);
    setTouchInfo({ x: 0, moved: false });
  };

  return (
    <div className={styles["controller"]}>
      <ProgressBar
        percent={percent}
        ref={barRef}
        onClick={handleBarClick}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      ></ProgressBar>
      <div className={styles["button-group"]}>
        <IconButton
          rounded
          className={styles["control-button"]}
          onClick={handleRecycleClick}
          icon="sync"
        ></IconButton>

        <IconButton
          rounded
          icon="backward"
          className={styles["control-button"]}
          onClick={handlePreClick}
        ></IconButton>

        <IconButton
          rounded
          icon={status ? "pause" : "play"}
          size="lg"
          className={styles["control-button"]}
          onClick={handlePlayButtonClick}
        ></IconButton>

        <IconButton
          rounded
          icon="forward"
          className={styles["control-button"]}
          onClick={handleNextClick}
        ></IconButton>

        <IconButton
          rounded
          icon="list-ul"
          className={styles["control-button"]}
          onClick={handleListButtonClick}
        ></IconButton>
      </div>
    </div>
  );
};

export default memo(Controller);
