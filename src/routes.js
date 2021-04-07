import React from "react";
import { Route } from "react-router-dom";

import Simple from "./Simple";
import Other from "./Other";

export const routeList = [
  {
    path: "/simple",
    component: Simple,
    exact: true,
    preloadData: Simple.getData,
    key: "simple",
  },
  {
    path: "/other",
    component: Other,
    exact: true,
    // loadData:
    key: "other",
  },
];

export const routers = (
  <div>
    {routeList.map((r) => (
      <Route {...r} />
    ))}
  </div>
);
