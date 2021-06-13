import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store";
import RankList from "./List";
import { getRankListAction } from "./store/actions";
const Rank = () => {
  const { globalList, curInx, officialList } = useSelector(
    (state: StoreState) => ({
      curInx: state.player.currentIndex,
      globalList: state.rank.globalList,
      officialList: state.rank.officialList,
    })
  );
  const dispatch = useDispatch();
  useEffect((): void => {
    if (!globalList.length || !officialList.length) {
      dispatch(getRankListAction());
    }
  }, []);
  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curInx > -1 ? "60px" : 0,
  };
  return (
    <div className={styles["rank-wrap"]} style={wrapperStyle}>
      <RankList listData={officialList}></RankList>
    </div>
  );
};
export default Rank;
