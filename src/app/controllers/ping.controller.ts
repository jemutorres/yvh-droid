import { Context } from "koa";

export default class PingController {
  /**
   * Return a test body to check the conectivity
   * @param ctx object with the request
   */
  public static async helloPing(ctx: Context): Promise<void> {
    try {
      ctx.body = {
        status: "success",
        data: "pong",
      };
    } catch (err) {
      console.error(err);
    }
  }
}
