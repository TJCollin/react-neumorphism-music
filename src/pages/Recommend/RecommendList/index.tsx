import { Card } from "collin-ui";
import React, { FC, memo, useEffect, useRef } from "react";
import { Recomm } from "../../../typings";
import styles from "./index.module.scss";
import BScroll from "better-scroll";

export interface RecommendListProps {
  recommondList: Recomm[];
}

const RecommendList: FC<RecommendListProps> = (props) => {
  const { recommondList } = props;
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
        {recommondList.map((item) => {
          return (
            <div className={styles["card-wrapper"]} key={item.id}>
              <Card className={styles["img-card"]}>
                <img src={item.picUrl} alt="" className={styles["img"]} />
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
