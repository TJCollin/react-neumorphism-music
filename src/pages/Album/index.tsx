import { Card, CardContent, Icon } from "collin-ui";
import React, { FC, memo, useEffect, useState } from "react";
import { forceCheck } from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import Loading from "../../components/Loading";
import Scroll from "../../components/Scroll";
import SongList from "../../components/SongList";
import { StoreState } from "../../store";
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
  const { albumDetail, songList, curIdx, loading } = useSelector(
    (state: StoreState) => ({
      albumDetail: state.album.albumDetail,
      songList: state.player.songList,
      curIdx: state.player.currentIndex,
      loading: state.album.loading,
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
    setShow(false);
  };
  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curIdx > -1 ? "60px" : 0,
  };
  const [show, setShow] = useState(true);
  console.log();

  return (
    <CSSTransition
      timeout={300}
      in={show}
      unmountOnExit
      classNames="fly"
      onExited={history.goBack}
      appear
    >
      {
        <div className={styles["album-wrap"]}>
          <div className={styles["header"]} onClick={goBack}>
            <Icon icon="chevron-left"></Icon>
            <h1>歌单</h1>
          </div>
          {!loading && (
            <div style={wrapperStyle}>
              {albumDetail && (
                <Scroll onScroll={forceCheck}>
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
                            <p className={styles["title"]}>
                              {albumDetail.name}
                            </p>

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
          )}
          {loading && <Loading></Loading>}
        </div>
      }
    </CSSTransition>
  );
};

export default memo(Album);
