import RadarController from "../../../controllers/radar.controller";
import { ProtocolEnum } from "../../../enums/protocol.enum";
import { IScan } from "../../radar.model";
import { IProtocol } from "../protocol.interface";

export class FurtherEnemiesProtocol implements IProtocol {
  name: string = ProtocolEnum.FURTHER_ENEMIES;

  getBestTarget(scanValues: IScan[]): IScan[] {
    return scanValues.sort((sv1, sv2) => {
      const distancePoint1 = RadarController.getDistanceFromYVH(
        sv1.coordinates.x,
        sv1.coordinates.y
      );
      const distancePoint2 = RadarController.getDistanceFromYVH(
        sv2.coordinates.x,
        sv2.coordinates.y
      );
      return distancePoint1 < distancePoint2
        ? 1
        : distancePoint1 > distancePoint2
        ? -1
        : 0;
    });
  }
}
