export interface Collection {
  id?: string;
  name: string;
  YLawn: number;
  YPerennials:number;
  YPerennialsCF: number;
  YPerennialsGL: number;
  YShrubsStandartD: number;
  YShrubsStandartC: number;
  YShrubsAccent: number;
  YShrubsAM: number;
  YShrubsAH: number;
  YHedge: number;
  YHedgeM: number;
  YHedgeH: number;
  YHedgeA: number;
  YTreesStandartD: number;
  YTreesSDS: number;
  YTreesSDM: number;
  YTreesStandartC: number;
  YTreesAccent: number;
  YVines: number;
  YMoldedTrees: number;
  YSumPercent: number;
  SLawn: number;
  SPerennials:number;
  SShrubsStandartD: number;
  SShrubsStandartC: number;
  SShrubsAccent: number;
  SHedgeA: number;
  STreesStandartD: number;
  STreesSDS: number;
  STreesSDM: number;
  STreesAccent: number;
  STreesGiant: number;
  SSumPercent: number;
  createdAt?: number;
}

export interface CollectionProps {
  collection: Collection;
}