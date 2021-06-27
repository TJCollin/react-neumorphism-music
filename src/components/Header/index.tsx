import React, { memo } from "react";
import styles from "./index.module.scss";
import { IconButton } from "collin-ui";
import { toggleToastAction } from "../../store/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleToastAction(true, "功能暂未开发哟"));
  };

  return (
    <header className={styles["header"]}>
      <IconButton
        rounded
        className={styles["menu"]}
        icon="list"
        onClick={handleClick}
      ></IconButton>
      <IconButton
        onClick={handleClick}
        rounded
        className={styles["search"]}
        icon="search"
      ></IconButton>
    </header>
  );
};

export default memo(Header);
