import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  datos = {email: localStorage.getItem('email')};

  constructor(private http: HttpClient) { }


  registrarRevisor(Revisor: Object){
    return this.http.post(`${API_URL}revisorsave`, Revisor);
  }
  getEstudiante(){
    return this.http.get(`${API_URL}getEstudiante`);
  }
  getRevisor(){
    return this.http.get(`${API_URL}getRevisor`);
  }

  registrarInforme(Informe: Object) {
    return this.http.post(`${API_URL}informe`, Informe);
  }

  obtenerFechaEntrega(user_id: number){
    return this.http.get(`${API_URL}fecha/${user_id}`);
  }

  obtenerEstudiantesInformes(user_id){
    return this.http.get(`${API_URL}getUserM/${user_id}`);
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
