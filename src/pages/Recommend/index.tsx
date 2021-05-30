import React, { useEffect, useRef } from "react";
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
const { getRecommendListAction } = actions;

const Recommend = () => {
  const { recommondList, recommendSongs } = useSelector((state: StoreState) => {
    return {
      recommondList: state.recommend.recommendList,
      recommendSongs: state.recommend.recommendSongs,
    };
  });
  const disPatch = useDispatch();
  useEffect(() => {
    !recommondList.length && disPatch(getRecommendListAction(6));
    !recommendSongs.length && disPatch(getRecommendSongsAcrion());
  }, []);

  const songsScrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles["recommend-wrapper"]} ref={songsScrollRef}>
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
