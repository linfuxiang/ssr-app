import Koa from "koa";
// import KoaStatic from "koa-static";
import KoaStaticCache from "koa-static-cache";
import KoaRouter from "koa-router";
import path from "path";

import { render } from "./render";

const app = new Koa();
const router = new KoaRouter();

// app.use(async (ctx) => {});

app.use(
  KoaStaticCache(path.resolve(__dirname, "../build"), {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
  })
);

router.get("(.*)", render);

app.use(router.routes());

// app.use(KoaStatic(path.resolve(__dirname, "../build")));

const port = 3000;

app.listen(port, function () {
  console.log("started!\n");
  console.log(`Open in http://localhost:${port}`);
});
