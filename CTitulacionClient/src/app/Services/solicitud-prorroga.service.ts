import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';



// @Injectable({
//   providedIn: 'root'
// })

export interface SolicitudProrrogaService {
  id: Number,
  fecha: Date,
  duracion: Number,
  motivo: String,
  observacion: String,
  isUpdating: boolean
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class SolicitudProrrogaService {

  constructor(private http: HttpClient) { }

  getSolicitudesProrroga(nombre: string): Observable<SolicitudProrroga[]> {
    if (nombre != '') {
      return this.http.get<SolicitudProrroga[]>(API_URL + 'solicitudProrroga/porNombre/' + nombre);
    } else {
      return this.http.get<SolicitudProrroga[]>(API_URL + 'solicitudProrroga');
    }
  }

  buscarSolicitudProrroga(llave: number): Observable<SolicitudProrroga> {
    return this.http.get<SolicitudProrroga>(API_URL + 'solicitudProrroga/' + llave + '');
  }

  actualizarSolicitudProrroga(solicitudProrroga, id) {
    return this.http.put(API_URL + 'solicitudProrroga/' + id, solicitudProrroga);
  }

  guardarSolicitudProrroga(solicitudProrroga) {
    return this.http.post(API_URL + 'solicitudProrroga/', solicitudProrroga);
  }




}
