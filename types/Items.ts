export interface IShipMetadata {
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  description: string;
  image: string;
  name: string;
}

export interface Fleet {
  tokenId: number;
  src: string;
  name: string;
  type: string;
  hp: number;
  attack: number;
  travelSpeed: number;
  miningSpeed: number;
}