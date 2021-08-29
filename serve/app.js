const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello wonderL17";
  //   ctx.header["access-control-allow-origin"] = "*";
  //   ctx.header["access-control-request-headers"] = "*";
  //   ctx.header["access-control-allow-methods"] = "OPTIONS, GET, PUT, POST";
  //   console.log(ctx.header);
  //   ctx.header["access-control-request-headers"] =
  //     "x-requested-with, accept, origin, content-type";

  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("access-control-request-headers", "*");
  ctx.set("access-control-allow-methods", "*");
});

app.listen(4000);
console.log("listening at localhost:4000");
