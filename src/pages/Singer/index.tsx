import { Button, Card, CardContent, Icon } from "collin-ui";
import React, { FC, memo, useEffect, useState } from "react";
import { forceCheck } from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import Scroll from "../../components/Scroll";
import SongList, { SongListInstance } from "../../components/SongList";
import Loading from "../../components/Loading";
import { StoreState } from "../../store";
import styles from "./index.module.scss";
import { getSingerDetailAction } from "./store/actions";
import { toggleToastAction } from "../../store/actions";
import { useRef } from "react";
import { changePlayStatusAction } from "../../components/Player/store/actions";

export interface SingerRouteParams {
  id: string;
}

const Singer = () => {
  const params = useParams<SingerRouteParams>();
  const history = useHistory();
  const dispatch = useDispatch();
  const listRef = useRef<SongListInstance>(null);
  const { loading, singerDetail, curIdx, songList, status } = useSelector(
    (state: StoreState) => ({
      loading: state.singer.loading,
      singerDetail: state.singer.singerDetail,
      curIdx: state.player.currentIndex,
      songList: state.player.songList,
      status: state.player.playStatus,
    })
  );
  const [show, setShow] = useState<boolean>(true);
  const goBack = () => {
    setShow(false);
  };
  const wrapperStyle = {
    flex: 1,
    overflow: "hidden",
    marginBottom: curIdx > -1 ? "60px" : 0,
  };
  const handleMoreClick = () => {
    dispatch(toggleToastAction(true, "功能暂未开发哟"));
  };
  const handlePlayClick = () => {
    if (status) {
      dispatch(changePlayStatusAction(false));
    } else {
      listRef.current?.play(0);
    }
  };

  /**
   * 获取歌手详情数据
   */
  useEffect((): void => {
    const id = params.id;
    dispatch(getSingerDetailAction(Number(id)));
  }, []);
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
            <p className={styles["singer-name"]}>{singerDetail?.name}</p>
          </div>
          {!loading && (
            <div style={wrapperStyle}>
              {singerDetail && (
                <Scroll onScroll={forceCheck}>
                  <div>
                    <div className={styles["detail-wrap"]}>
                      <Button
                        className={styles["detail-button"]}
                        onClick={handlePlayClick}
                      >
                        <Icon icon={status ? "pause" : "play"}></Icon>
                      </Button>
                      <Card className={styles["img-card"]}>
                        <CardContent
                          className={styles["content"]}
                          style={{
                            backgroundImage: `url(${singerDetail.picUrl})`,
                          }}
                        ></CardContent>
                      </Card>
                      <Button
                        className={styles["detail-button"]}
                        onClick={handleMoreClick}
                      >
                        <Icon icon="ellipsis-h"></Icon>
                      </Button>
                    </div>
                    <div className={styles["songs-wrap"]}>
                      <SongList
                        recommendSongs={singerDetail.hotSongs!}
                        ref={listRef}
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

export default memo(Singer);
