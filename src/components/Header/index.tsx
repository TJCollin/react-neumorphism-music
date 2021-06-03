import React, { FC, memo } from "react";
import styles from "./index.module.scss";
import { Button, Icon } from "collin-ui";
import { toggleToastAction } from "../../store/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleToastAction(true, "功能暂未开发哟"));
  };

  return (
    <header className={styles["header"]}>
      <Button className={styles["menu"]} onClick={handleClick}>
        <Icon icon="list"></Icon>
      </Button>
      <Button className={styles["search"]} onClick={handleClick}>
        <Icon icon="search"></Icon>
      </Button>
    </header>
  );
};

export default memo(Header);
