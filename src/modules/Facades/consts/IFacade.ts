export interface Facade {
  id?: string;
  name: string;
  link: string;
  height: number;
  width: number;
  areaWindow: number;
  areaWall: number;
}

export interface FacadeProps {
  facade: Facade;
}

export interface FacadeModule {
  facade: Facade;
  // setHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  // setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  // setAreaWall: React.Dispatch<React.SetStateAction<number | undefined>>;
  // setAreaWindow: React.Dispatch<React.SetStateAction<number | undefined>>;
  // setNumberFacade: React.Dispatch<React.SetStateAction<string>>;
  handleSelectFacade: (facadeId: string) => void;
}