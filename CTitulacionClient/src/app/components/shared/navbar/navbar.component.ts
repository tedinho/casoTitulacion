import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private routes:Router, private authService: AuthService){}

  cerrarSesion(){
    localStorage.removeItem('token');
    this.routes.navigate(['/login']);
  }

  ngOnInit(): void {
    
  }

  isLogin(){
    return this.authService.estaLogeado();
  }



}
