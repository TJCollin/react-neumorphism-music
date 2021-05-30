import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import { Button, Icon } from "collin-ui";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Button className={styles["menu"]}>
        <Icon icon="list"></Icon>
      </Button>
      <Button className={styles["search"]}>
        <Icon icon="search"></Icon>
      </Button>
    </header>
  );
};

export default memo(Header);
