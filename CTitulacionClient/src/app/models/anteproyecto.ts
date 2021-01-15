export interface Anteproyecto {
  id: number;
  estado: string;
  fechaInicio: Date;
  fechaTentativaFin: Date;
  observacion: Observation; 
}

interface Observation {
  id: number;
  observacion: string;
  fecha: Date;
}
