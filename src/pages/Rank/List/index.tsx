import { Card, CardContent } from "collin-ui";
import React, { FC, memo } from "react";
import Scroll from "../../../components/Scroll";
import styles from "./index.module.scss";
import LazyLoad from "react-lazyload";
import { RankItem, RankTrack } from "../typing";
import { Link } from "react-router-dom";
export interface RankListProps {
  listData: RankItem[];
}

const RankList: FC<RankListProps> = ({ listData }) => {
  return (
    <Scroll>
      <div className={styles["rankItem-list"]}>
        {listData.map((rankItem) => {
          return (
            <Link to={`/rank/${rankItem.id}`}>
              <Card className={styles["card"]} key={rankItem.id}>
                <CardContent className={styles["content"]}>
                  <div className={styles["img"]}>
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
                        src={rankItem.coverImgUrl}
                        alt=""
                        className={styles["img"]}
                        width="100%"
                        height="100%"
                      />
                    </LazyLoad>
                  </div>
                  <ul className={styles["song-list"]}>
                    {rankItem.tracks &&
                      rankItem.tracks.map((cur: RankTrack, index: number) => (
                        <li className={styles["song-item"]} key={index}>
                          <span>{index + 1}.</span>
                          <span>{cur.first}</span>
                          <span> - </span>
                          <span>{cur.second}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Scroll>
  );
};

export default memo(RankList);
