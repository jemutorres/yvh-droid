import { ProtocolEnum } from "../../../enums/protocol.enum";
import { IScan } from "../../radar.model";
import { IProtocol } from "../protocol.interface";

export class AssistAlliesProtocol implements IProtocol {
  name: string = ProtocolEnum.ASSIST_ALLIES;

  getBestTarget(scanValues: IScan[]): IScan[] {
    return scanValues.filter(
      (scanInfo) =>
        typeof scanInfo.allies !== "undefined" && scanInfo.allies > 0
    );
  }
}
