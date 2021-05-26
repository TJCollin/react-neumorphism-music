import React, { FC, memo, useState } from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { NavLink, withRouter } from "react-router-dom";
import { Tabs, Tab, TabItem, TabItems } from "ui-neumorphism";
import Rank from "../../pages/Rank";
import Recommend from "../../pages/Recommend";
import Singers from "../../pages/Singers";
import styles from "./index.module.scss";

const NavTabs: FC<RouteConfigComponentProps> = () => {
  const [active, setActive] = useState(0);
  const handleNavChange = (e: any) => {
    setActive(e.active);
  };
  return (
    <div className={styles["nav-tabs"]}>
      <Tabs
        underlined
        value={active}
        onChange={(e: any) => {
          handleNavChange(e);
        }}
      >
        <Tab className={styles["tab-item"]}>推荐</Tab>
        <Tab className={styles["tab-item"]}>歌手</Tab>
        <Tab className={styles["tab-item"]}>排行榜</Tab>
      </Tabs>
      <TabItems value={active}>
        <TabItem>
          <Recommend></Recommend>
        </TabItem>
        <TabItem>
          <Singers></Singers>
        </TabItem>
        <TabItem>
          <Rank></Rank>
        </TabItem>
      </TabItems>
    </div>
  );
};

export default memo(withRouter(NavTabs));
