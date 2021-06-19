import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Recommend = lazy(() => import("../pages/Recommend"));
const Singers = lazy(() => import("../pages/Singers"));
const Rank = lazy(() => import("../pages/Rank"));
const Album = lazy(() => import("../pages/Album"));
const Singer = lazy(() => import("../pages/Singer"));

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
        routes: [
          {
            path: "/singers/:id",
            key: "singer",
            component: Singer,
          },
        ],
      },
      {
        path: "/rank",
        key: "rank",
        component: Rank,
        routes: [
          {
            path: "/rank/:id",
            key: "rank",
            component: Album,
          },
        ],
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
