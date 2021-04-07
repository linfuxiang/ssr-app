import Koa from "koa";
import KoaStatic from "koa-static";
import KoaRouter from "koa-router";
import path from "path";

import { render } from "./render";

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(path.resolve(__dirname, "../build")));

// app.use(async (ctx) => {});

router.get("(.*)", render);

app.use(router.routes());

const port = 3000;

app.listen(port, function () {
  console.log("started!\n");
  console.log(`Open in http://localhost:${port}`);
});
