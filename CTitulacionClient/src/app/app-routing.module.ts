import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './authguard/auth-guard.service';
import { CarreraListaComponent } from './carrera-lista/carrera-lista.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { AnteproyectoFormComponent } from './components/aprobacion-anteproyecto/anteproyecto-form/anteproyecto-form.component'
import { AnteproyectoListComponent } from './components/aprobacion-anteproyecto/anteproyecto-list/anteproyecto-list.component'
const routes: Routes = [
   {
      path: 'login',
      component: LoginComponent,
   },
   {
      path: 'register',
      component: RegisterComponent
   },
   {
      path: 'carrera-lista',
      component: CarreraListaComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'carrera-form',
      component: CarreraFormComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'anteproyecto-form',
      component: AnteproyectoFormComponent,
      canActivate: [AuthGuardService]
   },
   {
      path: 'anteproyecto-list',
      component: AnteproyectoListComponent,
      canActivate: [AuthGuardService]
   },
   {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: '**', redirectTo: 'home'
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
