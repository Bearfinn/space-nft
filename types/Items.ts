export interface IShipMetadata {
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  description: string;
  image: string;
  name: string;
}

export interface Ship {
  tokenId: number;
  src: string;
  name: string;
  type: string;
  hp: number;
  attack: number;
  travelSpeed: number;
  miningSpeed: number;
  shipType: string;
  skinId: number;
  color: string;
}

export interface RefineryInfo {
  waitingToClaim: number;
  productionPerSecond: number;
  consumePerSecond: number;
  lastUpdateTime: Date;
  mineralSpenditure: number;
}