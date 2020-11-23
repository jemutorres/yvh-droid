import { IScan } from "../radar.model";

export interface IProtocol {
  name: string;

  getBestTarget(scanInfo: IScan[]): IScan[];
}
