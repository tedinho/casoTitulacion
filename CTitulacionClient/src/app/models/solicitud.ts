import { PeriodoLectivo } from ".";

export class Solicitud {
  id: number;
  fecha_creacion: Date;
  fecha_envio: Date;
  estado: string;
  estudiante_carrera_id: number;
  observacion: string;
}
