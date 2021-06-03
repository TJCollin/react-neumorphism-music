import { Card } from "collin-ui";
import React, { FC, memo, useEffect, useRef } from "react";
import { Recomm } from "../../../typings";
import styles from "./index.module.scss";
import BScroll from "better-scroll";
import LazyLoad from "react-lazyload";

export interface RecommendListProps {
  songList: Recomm[];
}

const RecommendList: FC<RecommendListProps> = (props) => {
  const { songList } = props;
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    new BScroll(scrollRef.current!, {
      scrollX: true,
      probeType: 3,
    });
  }, []);

  return (
    <div className={styles["wrapper"]} ref={scrollRef}>
      <div className={styles["wrapper-content"]}>
        {songList.map((item) => {
          return (
            <div className={styles["card-wrapper"]} key={item.id}>
              <Card className={styles["img-card"]}>
                <LazyLoad
                  debounce={500}
                  placeholder={
                    <img
                      src={require("../../../assets/images/music.png")}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(RecommendList);
