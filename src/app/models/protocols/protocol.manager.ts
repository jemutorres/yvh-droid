import { ProtocolEnum } from "../../enums/protocol.enum";
import { AssistAlliesProtocol } from "./impl/assist-allies.model";
import { AvoidCrossfireProtocol } from "./impl/avoid-crossfire.model";
import { AvoidMechProtocol } from "./impl/avoid-mech.model";
import { ClosestEnemiesProtocol } from "./impl/closest-enemies.model";
import { FurtherEnemiesProtocol } from "./impl/furthest-enemies.model";
import { PrioritizeMechProtocol } from "./impl/prioritize-mech.model";
import { IProtocol } from "./protocol.interface";

export function getProtocols(protocolNames: string[]): IProtocol[] {
  const protocols: IProtocol[] = [];

  protocolNames.forEach((protocolName) => {
    switch (protocolName) {
      case ProtocolEnum.CLOSEST_ENEMIES: {
        protocols.push(new ClosestEnemiesProtocol());
        break;
      }
      case ProtocolEnum.FURTHER_ENEMIES: {
        protocols.push(new FurtherEnemiesProtocol());
        break;
      }
      case ProtocolEnum.ASSIST_ALLIES: {
        protocols.push(new AssistAlliesProtocol());
        break;
      }
      case ProtocolEnum.AVOID_CROSSFIRE: {
        protocols.push(new AvoidCrossfireProtocol());
        break;
      }
      case ProtocolEnum.PRIORITIZE_MECH: {
        protocols.push(new PrioritizeMechProtocol());
        break;
      }
      case ProtocolEnum.AVOID_MECH: {
        protocols.push(new AvoidMechProtocol());
        break;
      }
    }
  });
  return protocols;
}
