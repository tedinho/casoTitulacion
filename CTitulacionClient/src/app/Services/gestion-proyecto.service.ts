import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { GestionProyecto } from '../models/gestion-proyecto';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  datos = { email: localStorage.getItem('email') };

  mai = localStorage.getItem('email');

  constructor(private http: HttpClient) { }

  enviarRubrica(Archivo: any) {
    return this.http.post(`${API_URL}storefile`, Archivo);
  }

  getCronogramas(nombre: string): Observable<GestionProyecto[]> {
    return this.http.get<GestionProyecto[]>(API_URL + 'proyectoTitulacion');
  }

  buscarCronograma(llave: number): Observable<GestionProyecto> {
    return this.http.get<GestionProyecto>(API_URL + 'proyectoTitulacion/' + llave + '');
  }

  actualizarCronograma(gestionProyecto, id) {
    return this.http.put(API_URL + 'proyectoTitulacion/' + id, gestionProyecto);
  }

  guardarCronograma(gestionProyecto) {
    return this.http.post(API_URL + 'proyectoTitulacion/', gestionProyecto);
  }

  registrarInforme(Informe: Object) {
    return this.http.post(`${API_URL}informe`, Informe);
  }

  obtenerFechaEntrega(user_id: number) {
    return this.http.get(`${API_URL}fecha/${user_id}`);
  }

  obtenerEstudiantesInformes(user_id) {
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

  registrarRevisor(Revisor: Object) {
    return this.http.post(`${API_URL}revisorsave`, Revisor);
  }
  getEstudiante() {
    return this.http.get(`${API_URL}getEstudiante`);
  }
  getRevisor() {
    return this.http.get(`${API_URL}getRevisor`);
  }

  fusion(revisorId: number) {
    return this.http.get(`${API_URL}fusion/${revisorId}`);
  }

  obtenerInformeRevisor(email: string) {
    return this.http.get(`${API_URL}informemail/${email}`);
  }

  pivotRevisor() {
    return this.http.get(`${API_URL}obtEstudia/${this.mai}`);
  }

  pivotEstudiante(estudianteId: number) {
    return this.http.get(`${API_URL}obtenerEstu/${estudianteId}`);
  }

  getInformeEstudiante(userId: number) {
    return this.http.get(`${API_URL}informe/${userId}`);
  }

  getFechas() {
    return this.http.get(`${API_URL}fecha`);
  }

}
