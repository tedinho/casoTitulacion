import { PeriodoLectivo } from ".";

export interface Solicitud {
  id: number;
  period: PeriodoLectivo[];
  estado: string;
}
