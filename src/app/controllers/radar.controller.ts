import { Context } from "koa";

import { getDistanceBetweenTwoPoints } from "../lib/utils";
import { Radar } from "../models/radar.model";

export default class RadarController {
  /**
   * Return the best target to attack due the passed parameters
   * @param ctx object with the request
   */
  public static async getTarget(ctx: Context): Promise<void> {
    try {
      // Create the object with the request
      const radar: Radar = new Radar(ctx.request.body);

      // Ignore the far points
      let scanValues = radar.scan.filter(
        (scanInfo) =>
          RadarController.getDistanceFromYVH(
            scanInfo.coordinates.x,
            scanInfo.coordinates.y
          ) <= 100
      );

      // Find the best target
      for (let protocol of radar.protocols) {
        scanValues = protocol.getBestTarget(scanValues);

        if (scanValues.length == 0) {
          break;
        }
      }

      // Return the result
      ctx.body = {
        x: scanValues[0].coordinates.x,
        y: scanValues[0].coordinates.y,
      };
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Return the distance between the passed point and the YVH.
   * Assume that YVH it's in the point 0,0.
   * @param x2 X value of point 2
   * @param y2 Y value of point 2
   * @returns The distance between the points
   */
  public static getDistanceFromYVH(x2: number, y2: number): number {
    return getDistanceBetweenTwoPoints(0, 0, x2, y2);
  }
}
