import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alphaTypes } from "../../apis/data";
import { StoreState } from "../../store";
import styles from "./index.module.scss";
import { getSingerListAction } from "./store/actions";
import Tabs from "./Tabs";
import SingerList from "./List";
import Scroll, { ScrollInstance } from "../../components/Scroll";
import { forceCheck } from "react-lazyload";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const Singers: FC<RouteConfigComponentProps> = ({ route }) => {
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

  const [curType, setCurType] = useState<string>("");
  const scrollRef = useRef<ScrollInstance>(null);

  /**
   * 监听 Tab 项点击
   */
  const onItemClick = useCallback((type: string) => {
    setCurType(type);
    dispatch(getSingerListAction(type));
    scrollRef.current?.refresh();
  }, []);

  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curInx > -1 ? "60px" : 0,
  };
  return (
    <div className={styles["singers-wrap"]}>
      <div className={styles["tabs-wrap"]}>
        <Tabs
          tabsData={alphaTypes}
          curType={curType}
          onItemClick={onItemClick}
        ></Tabs>
      </div>
      <div style={wrapperStyle}>
        <Scroll ref={scrollRef} onScroll={forceCheck}>
          <SingerList listData={singerList}></SingerList>
        </Scroll>
      </div>
      {renderRoutes(route?.routes)}
    </div>
  );
};
export default Singers;
