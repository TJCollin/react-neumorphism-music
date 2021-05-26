import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import { Divider } from "ui-neumorphism";

const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Recommend = lazy(() => import("../pages/Recommend"));
const Singers = lazy(() => import("../pages/Singers"));
const Rank = lazy(() => import("../pages/Rank"));

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
    ],
  },
];

export default routes;
