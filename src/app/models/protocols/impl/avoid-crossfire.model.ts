import { ProtocolEnum } from "../../../enums/protocol.enum";
import { IScan } from "../../radar.model";
import { IProtocol } from "../protocol.interface";

export class AvoidCrossfireProtocol implements IProtocol {
  name: string = ProtocolEnum.AVOID_CROSSFIRE;

  getBestTarget(scanValues: IScan[]): IScan[] {
    return scanValues.filter(
      (scanInfo) =>
        typeof scanInfo.allies === "undefined" || scanInfo.allies <= 0
    );
  }
}
