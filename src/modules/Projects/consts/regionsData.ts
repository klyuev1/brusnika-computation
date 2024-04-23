export interface Region {
  tOutside: number;
  tInside: number;
  rWall: number;
  rWindow: number;
  beta: number;
  kHousehold: number;
}

interface RegionsData {
  [key: string]: Region;
}

// Данные о регионе
export const regionsData: RegionsData = {
  'Москва': { tOutside: -26, tInside: 20, rWall: 3.056, rWindow: 0.505, beta: 1.1, kHousehold: 10 },
  'Екатеринбург': { tOutside: -32, tInside: 21, rWall: 3.441, rWindow: 0.587, beta: 1.1, kHousehold: 10 },
  'Тюмень': { tOutside: -35, tInside: 21, rWall: 3.57, rWindow: 0.61, beta: 1.1, kHousehold: 10 },
  'Омск': { tOutside: -36, tInside: 21, rWall: 3.6, rWindow: 0.611, beta: 1.1, kHousehold: 10 },
  'Курган': { tOutside: -36, tInside: 21, rWall: 3.515, rWindow: 0.602, beta: 1.1, kHousehold: 10 },
  'Новосибирск': { tOutside: -37, tInside: 21, rWall: 3.646, rWindow: 0.621, beta: 1.1, kHousehold: 10 },
  'Сургут': { tOutside: -42, tInside: 21, rWall: 4.094, rWindow: 0.685, beta: 1.1, kHousehold: 10 }
};