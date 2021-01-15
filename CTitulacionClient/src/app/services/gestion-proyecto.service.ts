import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  datos = {email: localStorage.getItem('email')};

  constructor(private http: HttpClient) { }

  registrarInforme(Informe: Object) {
    return this.http.post(`${API_URL}informe`, Informe);
  }

  registrarFechaEntrega(Fecha: Object, DocId: number)
  {
    return this.http.post(`${API_URL}fecha/${DocId}`, Fecha);
  }

  obtenerInforme() {
    return this.http.get(`${API_URL}informe`);
  }

  cargaDocumento(Archivo: any) {
    return this.http.post(`${API_URL}storefile`, Archivo);
  }

  obtenerDocumento(user_id: number) {
    return this.http.post(`${API_URL}getfile/${user_id}`, this.datos);
  }
  obtenerUsuarioId(id: number) {
    return this.http.get(`${API_URL}getUser/${id}`);
  }

  registrarNota(Nota: Object, Id: number) {
    return this.http.post(`${API_URL}nota/${Id}`, Nota);
  }

  obtenerRevisores() {
    return this.http.get(`${API_URL}revisor`);
  }

  obtenerEstudiantes() {
    return this.http.get(`${API_URL}getStudents`);
  }

}
