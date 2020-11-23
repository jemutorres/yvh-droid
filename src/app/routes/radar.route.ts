import Router from "koa-router";

import radar from "../controllers/radar.controller";

const router = new Router();

router.post("/radar", radar.getTarget);

export default router;
