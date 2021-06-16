import React, { CSSProperties, FC, useEffect, useRef } from "react";
import { Button, Card, CardContent, Icon } from "collin-ui";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store";
import { actions } from "./store";
import BScroll from "better-scroll";
import { forceCheck } from "react-lazyload";
import { getRecommendSongsAcrion } from "./store/actions";
import SongList from "../../components/SongList";
import RecommendList from "./RecommendList";
import Scroll, { ScrollInstance } from "../../components/Scroll";
import Loading from "../../components/loading";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
const { getRecommendListAction } = actions;

const Recommend: FC<RouteConfigComponentProps> = ({ route }) => {
  const { recommondList, recommendSongs, curIdx, loading } = useSelector(
    (state: StoreState) => {
      return {
        recommondList: state.recommend.recommendList,
        recommendSongs: state.recommend.recommendSongs,
        curIdx: state.player.currentIndex,
        loading: state.recommend.loading,
      };
    }
  );
  const disPatch = useDispatch();
  useEffect(() => {
    !recommondList.length && disPatch(getRecommendListAction(6));
    !recommendSongs.length && disPatch(getRecommendSongsAcrion());
  }, []);

  const songsScrollRef = useRef<HTMLDivElement>(null);

  const wrapperStyle: CSSProperties = {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    marginBottom: curIdx > -1 ? "60px" : 0,
  };
  const scrollRef = useRef<ScrollInstance>(null);

  return (
    <div style={wrapperStyle} className={styles["recomm-wrap"]}>
      <Scroll ref={songsScrollRef} onScroll={forceCheck}>
        <div>
          <h5 className={styles["title"]}>推荐歌单</h5>
          <Scroll direction="horizontal" onScroll={forceCheck} ref={scrollRef}>
            <RecommendList songList={recommondList} />
          </Scroll>
          <h5 className={styles["title"]}>推荐歌曲</h5>
          <SongList
            recommendSongs={recommendSongs}
            curId={curIdx > -1 ? recommendSongs[curIdx].id : -1}
          />
        </div>
      </Scroll>
      {renderRoutes(route?.routes)}
      {loading && <Loading />}
    </div>
  );
};
export default Recommend;
