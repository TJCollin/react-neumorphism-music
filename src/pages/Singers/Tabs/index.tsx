import React, { FC, memo } from "react";
import Scroll from "../../../components/Scroll";
import { Alpha } from "../../../typings/localData";
import styles from "./index.module.scss";

export interface TabsProps {
  tabsData: Alpha[];
}

const Tabs: FC<TabsProps> = ({ tabsData }) => {
  return (
    <Scroll direction="horizontal">
      <ul className={styles["tab-list"]}>
        {tabsData &&
          tabsData.map((item) => (
            <li className={styles["list-item"]} key={item.key}>
              {item.name}
            </li>
          ))}
      </ul>
    </Scroll>
  );
};

export default memo(Tabs);
