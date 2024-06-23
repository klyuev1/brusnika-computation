export interface Project {
  id?: string;
  name: string;
  region: string;
  tOutside: number;
  tInside: number;
  rWall: number;
  rWindow: number;
  beta: number;
  kHousehold: number;
  createdAt?: number;
}

export interface ProjectProps {
  project: Project;
}
