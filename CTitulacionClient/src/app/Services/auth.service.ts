import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api:string = "http://localhost:8000/api/";

  constructor(private http: HttpClient) { }

  postRegister(Credenciales: Object){
    return this.http.post<any>(`${this.api}register`, Credenciales)
  }


  postLogin(Credenciales: Object){
    return this.http.post<any>(`${this.api}login`, Credenciales)
  }

  obtenerToken():string{
    return localStorage.getItem('token');
  }


  estaLogeado():boolean{
    let tokenId = this.obtenerToken();
    if(!tokenId){
      return false;
    }
    return true;
  }
}
