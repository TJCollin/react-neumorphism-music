import { Card } from "collin-ui";
import React, { FC, memo, useEffect, useRef } from "react";
import { Recomm } from "../../../typings";
import styles from "./index.module.scss";
import LazyLoad, { forceCheck } from "react-lazyload";
import Scroll from "../../../components/Scroll";
import { Link } from "react-router-dom";
export interface RecommendListProps {
  songList: Recomm[];
}

const RecommendList: FC<RecommendListProps> = (props) => {
  const { songList } = props;

  return (
    <div className={styles["wrapper"]}>
      <Scroll direction="horizontal" onScroll={forceCheck}>
        <div className={styles["wrapper-content"]}>
          {songList.map((item) => {
            return (
              <Link
                to={`/album/${item.id}`}
                className={styles["card-wrapper"]}
                key={item.id}
              >
                <Card className={styles["img-card"]}>
                  <LazyLoad
                    debounce={500}
                    placeholder={
                      <img
                        src={
                          require("../../../assets/images/music.png").default
                        }
                        alt="music"
                        width="50"
                        height="100%"
                        className={styles["img"]}
                      />
                    }
                  >
                    <img
                      src={item.picUrl}
                      alt=""
                      className={styles["img"]}
                      width="100%"
                      height="100%"
                    />
                  </LazyLoad>
                </Card>
                <p className={styles["desc"]}>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </Scroll>
    </div>
  );
};

export default memo(RecommendList);
