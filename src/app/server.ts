import config from "../config";
import routes from "./routes";

import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";

// Create app instance
const app = new Koa();

// Configure application
app.use(bodyParser());
app.use(logger());

// Add the routes
routes.forEach((route: Router) => {
  app.use(route.routes());
});

// Start server
const server = app
  .listen(config.port, async () => {
    console.log(`Server listening on port: ${config.port}`);
  })
  .on("error", (err) => {
    console.error(err);
  });
export default server;
