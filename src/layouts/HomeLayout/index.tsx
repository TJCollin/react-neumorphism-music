import React, { FC } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Player from "../../components/Player";
import Toast from "../../components/Toast";

const HomeLayout: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <>
      <Header />
      <NavTabs />
      {renderRoutes(route?.routes)}
      <Toast />
      <Player />
    </>
  );
};

export default HomeLayout;
