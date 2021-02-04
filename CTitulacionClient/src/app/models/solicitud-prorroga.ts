export class SolicitudProrroga {
    id: number;
    fecha: Date;
    proyecto_titulacions_id: number;
    evidencia_id: number;
    duracion: string;
    motivo: string;
    observacion: string;
    estado: string;
    intentos: number;
    motivo_desaprobado: string;
 }