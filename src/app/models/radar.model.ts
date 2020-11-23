import { getProtocols } from "./protocols/protocol.manager";
import { IProtocol } from "./protocols/protocol.interface";

interface IEnemies {
  type: string;
  number: number;
}

interface ICoordinate {
  x: number;
  y: number;
}

export interface IScan {
  coordinates: ICoordinate;
  enemies: IEnemies;
  allies: number;
}

interface IRadar {
  protocols: string[];
  scan: IScan[];
}

export class Radar {
  protocols: IProtocol[];
  scan: IScan[];

  constructor(params: IRadar) {
    this.protocols = getProtocols(params.protocols);
    this.scan = params.scan;
  }
}
