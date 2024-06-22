import { Facade } from "../../Facades/consts/IFacade";

export interface IRoom {
  id?: string;
  floor: number;
  number: string;
  name: string;
  areaRoom: number;
  numberFacade: string;
  heatLoss?: number;
  facades?: Facade[];
}

export interface RoomProps {
  room: IRoom;
}
