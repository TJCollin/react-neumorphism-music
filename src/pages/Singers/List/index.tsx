import { Card, CardContent } from "collin-ui";
import React, { FC, memo } from "react";
import Scroll from "../../../components/Scroll";
import { Singer } from "../../../typings";
import styles from "./index.module.scss";
import LazyLoad from "react-lazyload";
export interface SingerListProps {
  listData: Singer[];
}

const SingerList: FC<SingerListProps> = ({ listData }) => {
  return (
    <Scroll>
      <div className={styles["singers-list"]}>
        {listData.map((singer) => {
          return (
            <Card className={styles["card"]} key={singer.id}>
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
          );
        })}
      </div>
    </Scroll>
  );
};

export default memo(SingerList);
