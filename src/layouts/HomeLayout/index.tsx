import React, { FC } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";

const HomeLayout: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <>
      <Header></Header>
      <NavTabs></NavTabs>
    </>
  );
};

export default HomeLayout;
