import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';
 
API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient) { }

  postRegister(Credenciales: Object){
    return this.http.post<any>(`${API_URL}register`, Credenciales)
  }


  postLogin(Credenciales: Object){
    return this.http.post<any>(`${API_URL}login`, Credenciales)
  }

  obtenerToken():string{
    return localStorage.getItem('token');
  }

  obtenerUsuario(){
    let username = localStorage.getItem('username');
    let rol = localStorage.getItem('rol');
    return {
      user: username,
      role: rol
    };
  }

  estaLogeado():boolean{
    let tokenId = this.obtenerToken();
    if(!tokenId){
      return false;
    }
    return true;
  }
}
