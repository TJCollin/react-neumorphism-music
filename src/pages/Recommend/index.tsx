import React from "react";
import { Card, CardContent } from "ui-neumorphism";
import styles from "./index.module.scss";

const Recommend = () => {
  return (
    <div>
      <h5>推荐歌单</h5>
      <Card>
        <div className={styles["img"]}></div>
      </Card>
    </div>
  );
};
export default Recommend;
