import { Carrera } from '.'

export interface Estudiante {
  id: number;
  career: Carrera[];
  fechaIngreso: Date;
}
