import { Carrera } from '.'

export interface Requisitos {
  id: number;
  career: Carrera[];
  nombre: string;
  horas: number;
  descripcion: string;
}
