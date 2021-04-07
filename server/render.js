import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import fs from "fs";
import path from "path";

import { routeList, routers } from "../src/routes";
import { getStore } from "../src/store";

export const render = async (ctx) => {
  const store = getStore();
  console.log(ctx.req.url);
  const currentRoute = routeList.find((item) => item.path === ctx.req.url);
  if (currentRoute && currentRoute.preloadData) {
    await currentRoute.preloadData(store).catch(() => {});
  }
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.req.url}>{routers}</StaticRouter>
    </Provider>
  );
  let htmlStr = fs.readFileSync(
    path.resolve(__dirname, "../build/index.html"),
    {
      encoding: "utf-8",
    }
  );
  htmlStr = htmlStr.replace("{{root}}", content);
  try {
    htmlStr = htmlStr.replace(
      /(?<=window\._defaultState\t?=\t?)(null)/,
      JSON.stringify(store.getState())
    );
    console.log(JSON.stringify(store.getState()));
  } catch (e) {}
  ctx.body = htmlStr;
};
