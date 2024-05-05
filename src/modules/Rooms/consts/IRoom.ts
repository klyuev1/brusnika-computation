export interface IRoom {
  id?: string;
  floor: number;
  number: string;
  name: string;
  height: number;
  width: number;
  areaWall: number;
  areaWindow: number;
  areaRoom: number;
  numberFacade: string;
  heatLoss?: number;
  facadesId?: number[];
}

export interface RoomProps {
  room: IRoom;
}