import { EnemyEnum } from "../../../enums/enemy.enum";
import { ProtocolEnum } from "../../../enums/protocol.enum";
import { IScan } from "../../radar.model";
import { IProtocol } from "../protocol.interface";

export class AvoidMechProtocol implements IProtocol {
  name: string = ProtocolEnum.AVOID_MECH;

  getBestTarget(scanValues: IScan[]): IScan[] {
    return scanValues.filter(
      (scanInfo) => scanInfo.enemies.type != EnemyEnum.MECH
    );
  }
}
