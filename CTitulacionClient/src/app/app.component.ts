import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';


  constructor(private authService: LoginService) { }

  isLogin() {
    return this.authService.estaLogeado();
  }

}


