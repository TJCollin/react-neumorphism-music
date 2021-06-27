import { Icon } from "collin-ui";
import React, { FC } from "react";
import styles from "./index.module.scss";

export interface BackHeaderProps {
  title?: string;
  onBack?: () => void;
}

const BackHeader: FC<BackHeaderProps> = ({ title, onBack }) => {
  const goBack = () => {
    onBack && onBack();
  };
  return (
    <div className={styles["header"]} onClick={goBack}>
      <Icon icon="chevron-left"></Icon>
      <p className={styles["title"]}>{title}</p>
    </div>
  );
};

export default BackHeader;
