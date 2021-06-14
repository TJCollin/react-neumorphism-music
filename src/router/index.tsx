import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Recommend = lazy(() => import("../pages/Recommend"));
const Singers = lazy(() => import("../pages/Singers"));
const Rank = lazy(() => import("../pages/Rank"));
const Album = lazy(() => import("../pages/Album"));

const routes = [
  {
    component: HomeLayout,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => {
          return <Redirect to={"/recommend"}></Redirect>;
        },
      },
      {
        path: "/recommend",
        key: "recommend",
        component: Recommend,
        routes: [
          {
            path: "/recommend/:id",
            key: "recommendAlbum",
            component: Album,
          },
        ],
      },
      {
        path: "/singers",
        key: "singers",
        component: Singers,
      },
      {
        path: "/rank",
        key: "rank",
        component: Rank,
      },
      {
        path: "/album/:id",
        exact: true,
        key: "album",
        component: Album,
      },
    ],
  },
];

export default routes;
