import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import { IconButton } from "ui-neumorphism";
import Icon from "@mdi/react";
import { mdiMenu, mdiMagnify } from "@mdi/js";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <IconButton rounded className={styles["menu"]} size="medium" text={false}>
        <Icon path={mdiMenu} size={1}></Icon>
      </IconButton>
      <IconButton
        rounded
        className={styles["search"]}
        size="medium"
        text={false}
      >
        <Icon path={mdiMagnify} size={1}></Icon>
      </IconButton>
    </header>
  );
};

export default memo(Header);
