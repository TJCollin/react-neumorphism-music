import React, { useEffect, FC } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store";
import RankList from "./List";
import { getRankListAction } from "./store/actions";
import Loading from "../../components/loading";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
const Rank: FC<RouteConfigComponentProps> = ({ route }) => {
  const { globalList, curInx, officialList, loading } = useSelector(
    (state: StoreState) => ({
      curInx: state.player.currentIndex,
      globalList: state.rank.globalList,
      officialList: state.rank.officialList,
      loading: state.rank.loading,
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
      {renderRoutes(route?.routes)}
      {loading && <Loading></Loading>}
    </div>
  );
};
export default Rank;
