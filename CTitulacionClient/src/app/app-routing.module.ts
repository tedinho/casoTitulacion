import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './authguard/auth-guard.service';
import { CarreraListaComponent } from './carrera-lista/carrera-lista.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { InformeRevisorComponent } from './components/gestion-proyecto2/informe-revisor/informe-revisor.component';
import { CargaDocsFinalProComponent } from './components/gestion-proyecto2/carga-docs-final-pro/carga-docs-final-pro.component';
import { RegistroNotasComponent } from './components/gestion-proyecto2/registro-notas/registro-notas.component';
import { RegistroFechaComponent } from './components/gestion-proyecto2/registro-fecha/registro-fecha.component';
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
      path: 'informe-revisor',
      component: InformeRevisorComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'cargar-documentos-final',
      component: CargaDocsFinalProComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'registro-notas',
      component: RegistroNotasComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'registro-fecha-ef',
      component: RegistroFechaComponent,
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
