import { Icon } from "collin-ui";
import styles from "./index.module.scss";
import React, { FC, memo } from "react";

const Loading: FC = () => {
  return (
    <div className={styles["loading-wrap"]}>
      <Icon icon="spinner" className={styles["loading"]}></Icon>
    </div>
  );
};

export default memo(Loading);
