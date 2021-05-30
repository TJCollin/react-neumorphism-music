import React, { FC, memo, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

import styles from "./index.module.scss";

const NavTabs: FC = (props) => {
  return (
    <div className={styles["nav-tabs"]}>
      <NavLink to="/recommend" activeClassName={styles["actived"]}>
        <span>推荐</span>
      </NavLink>
      <NavLink to="/singers" activeClassName={styles["actived"]}>
        <span>歌手</span>
      </NavLink>
      <NavLink to="/rank" activeClassName={styles["actived"]}>
        <span>排行榜</span>
      </NavLink>
    </div>
  );
};

export default memo(NavTabs);
