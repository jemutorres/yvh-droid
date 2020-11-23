import { EnemyEnum } from "../../../enums/enemy.enum";
import { ProtocolEnum } from "../../../enums/protocol.enum";
import { IScan } from "../../radar.model";
import { IProtocol } from "../protocol.interface";

export class PrioritizeMechProtocol implements IProtocol {
  name: string = ProtocolEnum.PRIORITIZE_MECH;

  getBestTarget(scanValues: IScan[]): IScan[] {
    return scanValues.sort((sv1, sv2) =>
      sv1.enemies.type == EnemyEnum.MECH && sv2.enemies.type != EnemyEnum.MECH
        ? -1
        : sv1.enemies.type != EnemyEnum.MECH && sv2.enemies.type == EnemyEnum.MECH
        ? 1
        : 0
    );
  }
}
