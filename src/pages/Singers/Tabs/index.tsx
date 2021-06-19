import React, { FC, memo, MouseEvent } from "react";
import Scroll from "../../../components/Scroll";
import { Alpha } from "../../../typings/localData";
import styles from "./index.module.scss";
import classes from "classnames";

export interface TabsProps {
  tabsData: Alpha[];
  curType: string;
  onItemClick: (type: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabsData, curType, onItemClick }) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement,
      itemValue = target.dataset.value;
    itemValue && onItemClick(itemValue);
  };
  return (
    <Scroll direction="horizontal">
      <ul className={styles["tab-list"]}>
        {tabsData &&
          tabsData.map((item) => (
            <li
              className={classes(
                styles["list-item"],
                curType === item.key && styles["actived"]
              )}
              key={item.key}
              data-value={item.key}
              onClick={handleClick}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </Scroll>
  );
};

export default memo(Tabs);
