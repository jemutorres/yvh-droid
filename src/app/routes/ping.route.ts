import Router from "koa-router";

import ping from "../controllers/ping.controller";

const router = new Router();

router.get("/ping", ping.helloPing);

export default router;
