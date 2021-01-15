import { PeriodoLectivo } from ".";

export interface JuntaAcademica {
  id: number;
  period: PeriodoLectivo[];
  nombre: String;
}
