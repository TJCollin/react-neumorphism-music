import { Card, CardContent } from "collin-ui";
import React, { FC, memo } from "react";
import Scroll from "../../../components/Scroll";
import { Singer } from "../../../typings";
import styles from "./index.module.scss";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
export interface SingerListProps {
  listData: Singer[];
}

const SingerList: FC<SingerListProps> = ({ listData }) => {
  return (
    <div className={styles["singers-list"]}>
      {listData.map((singer) => {
        return (
          <Link to={`singers/${singer.id}`} key={singer.id}>
            <Card className={styles["card"]}>
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
                      src={singer.picUrl}
                      alt=""
                      className={styles["img"]}
                      width="100%"
                      height="100%"
                    />
                  </LazyLoad>
                </div>
                <p className={styles["singer-name"]}>{singer.name}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default memo(SingerList);
