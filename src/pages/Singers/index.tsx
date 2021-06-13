import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alphaTypes } from "../../apis/data";
import { StoreState } from "../../store";
import styles from "./index.module.scss";
import { getSingerListAction } from "./store/actions";
import Tabs from "./Tabs";
import SingerList from "./List";

const Singers = () => {
  const { singerList, curInx } = useSelector((state: StoreState) => ({
    singerList: state.singers.singerList,
    curInx: state.player.currentIndex,
  }));
  const dispatch = useDispatch();

  /**
   * 获取歌手数据
   */
  useEffect((): void => {
    dispatch(getSingerListAction());
  }, []);
  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curInx > -1 ? "60px" : 0,
  };
  return (
    <div className={styles["singers-wrap"]}>
      <div className={styles["tabs-wrap"]}>
        <Tabs tabsData={alphaTypes}></Tabs>
      </div>
      <div style={wrapperStyle}>
        <SingerList listData={singerList}></SingerList>
      </div>
    </div>
  );
};
export default Singers;
