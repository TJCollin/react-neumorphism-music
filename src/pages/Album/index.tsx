import { Card, CardContent, Icon } from "collin-ui";
import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Scroll from "../../components/Scroll";
import SongList from "../../components/SongList";
import { StoreState } from "../../store";
import Detail from "./Detail";
import styles from "./index.module.scss";
import { getAlbumDetailAction } from "./store/actions";

export interface AlbumCreator {
  avatarUrl: string;
  nickname: string;
}

export interface AlbumProps {
  subscribedCount: number;
  name: string;
  creator: AlbumCreator;
  coverImgUrl: string;
}

export interface AlbumParams {
  id: string;
}

const Album: FC = () => {
  const { albumDetail, songList, curIdx } = useSelector(
    (state: StoreState) => ({
      albumDetail: state.album.albumDetail,
      songList: state.player.songList,
      curIdx: state.player.currentIndex,
    })
  );

  const params = useParams<AlbumParams>();
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * 获取歌单详情数据
   */
  useEffect((): void => {
    dispatch(getAlbumDetailAction(Number(params.id)));
  }, []);

  const goBack = () => {
    history.goBack();
  };
  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curIdx > -1 ? "60px" : 0,
  };

  return (
    <div className={styles["album-wrap"]}>
      <div className={styles["header"]} onClick={goBack}>
        <Icon icon="chevron-left"></Icon>
        <h1>歌单</h1>
      </div>
      <div style={wrapperStyle}>
        {albumDetail && (
          <Scroll>
            <div>
              <div className={styles["detail-wrap"]}>
                <Card className={styles["img-card"]}>
                  <CardContent className={styles["content"]}>
                    <img
                      className={styles["cover"]}
                      src={albumDetail.coverImgUrl}
                      width="100%"
                      height="100%"
                      alt="歌单封面"
                    />
                    <div className={styles["info"]}>
                      <p className={styles["title"]}>{albumDetail.name}</p>

                      <div className={styles["creator"]}>
                        <img
                          src={albumDetail.creator.avatarUrl}
                          width="100%"
                          height="100%"
                          alt="歌单封面"
                        />
                        <p className={styles["creator-name"]}>
                          {albumDetail.creator.nickname}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className={styles["songs-wrap"]}>
                <SongList
                  recommendSongs={albumDetail.tracks}
                  curId={curIdx > -1 ? songList[curIdx].id : -1}
                ></SongList>
              </div>
            </div>
          </Scroll>
        )}
      </div>
    </div>
  );
};

export default memo(Album);
