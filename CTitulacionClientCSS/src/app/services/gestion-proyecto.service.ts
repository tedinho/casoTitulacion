import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  constructor(private http: HttpClient) { }

  registrarInforme(Informe: Object) {
    return this.http.post(`${API_URL}informe`, Informe);
  }

  registrarFechaEntrega(Fecha: Object)
  {
    return this.http.post(`${API_URL}`, Fecha);
  }

  obtenerInforme() {
    return this.http.get(`${API_URL}informe`);
  }

  cargaDocumento(Archivo: any) {
    return this.http.post(`${API_URL}storefile`, Archivo);
  }

  registrarNota(Nota: Object) {
    return this.http.post(`${API_URL}storefile`, Nota);
  }

  obtenerRevisores() {
    return this.http.get(`${API_URL}revisor`);
  }

}
