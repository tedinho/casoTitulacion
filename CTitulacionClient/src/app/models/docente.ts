import { Carrera } from '.'

export interface Docente {
  id: number;
  career: Carrera[];
  nombre: string;
}
