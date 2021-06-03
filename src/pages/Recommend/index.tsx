import React, { CSSProperties, useEffect, useRef } from "react";
import { Button, Card, CardContent, Icon } from "collin-ui";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store";
import { actions } from "./store";
import BScroll from "better-scroll";
import { getRecommendSongsAcrion } from "./store/actions";
import SongList from "./SongList";
import RecommendList from "./RecommendList";
import Scroll from "../../components/Scroll";
import Toast from "../../components/Toast";
import { stat } from "fs";
const { getRecommendListAction } = actions;

const Recommend = () => {
  const { recommondList, recommendSongs, curSong } = useSelector(
    (state: StoreState) => {
      return {
        recommondList: state.recommend.recommendList,
        recommendSongs: state.recommend.recommendSongs,
        curSong: state.player.currentSong,
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
    marginBottom: curSong ? "60px" : 0,
  };

  return (
    <div style={wrapperStyle} ref={songsScrollRef}>
      <Scroll>
        <div>
          <h5 className={styles["title"]}>推荐歌单</h5>
          <RecommendList recommondList={recommondList} />
          <h5 className={styles["title"]}>推荐歌曲</h5>
          <SongList recommendSongs={recommendSongs} />
        </div>
      </Scroll>
    </div>
  );
};
export default Recommend;
