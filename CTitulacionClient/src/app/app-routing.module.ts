import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './authguard/auth-guard.service';
import { CarreraListaComponent } from './components/carrera-lista/carrera-lista.component';
import { CarreraFormComponent } from './components/carrera-form/carrera-form.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { EstudianteCarreraComponent } from './components/estudiante-carrera/estudiante-carrera.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InformesComponent } from './components/informes/informes.component';
import { ModificacionRevisorComponent } from './components/modificacion-revisor/modificacion-tutor.component';
import { FechaEntregaFinalComponent } from './components/fecha-entrega-final/fecha-entrega-final.component';
import { CargaDocumentoFinalComponent } from './components/carga-documento-final/carga-documento-final.component';
import { EstudiantesSolicitudComponent } from './estudiantes-solicitud/estudiantes-solicitud.component';
import { AnteproyectoFormComponent } from './components/aprobacion-anteproyecto/anteproyecto-form/anteproyecto-form.component';
import { AnteproyectoListComponent } from './components/aprobacion-anteproyecto/anteproyecto-list/anteproyecto-list.component';
import { AnteproyectoTemaFormComponent } from './components/aprobacion-anteproyecto/anteproyecto-tema-form/anteproyecto-tema-form.component';
import { RubricaComponent } from './components/gestion-proyecto/rubrica/rubrica.component';
import { CronogramaComponent } from './components/gestion-proyecto/cronograma/cronograma.component';
import { AnteproyectoTemaListComponent } from './components/aprobacion-anteproyecto/anteproyecto-tema-list/anteproyecto-tema-list.component';
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
      path: 'actualizar-datos',
      component: ActualizarDatosComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'estudiante-carrera',
      component: EstudianteCarreraComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'estudiantes-solicitud',
      component: EstudiantesSolicitudComponent,
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
      path: 'anteproyecto-tema',
      component: AnteproyectoTemaFormComponent,
      canActivate: [AuthGuardService]
   },
   {
      path: 'anteproyecto-tema-list',
      component: AnteproyectoTemaListComponent,
      canActivate: [AuthGuardService]
   },
   {
      path: 'rubrica',
      component: RubricaComponent,
      canActivate: [AuthGuardService]
   },
   {
      path: 'cronograma',
      component: CronogramaComponent,
      canActivate: [AuthGuardService]
   },
   { path: 'fechaFinal', component: FechaEntregaFinalComponent, canActivate: [AuthGuardService], data: { role: 'Revisor' } },
   { path: 'cargaDocFinal', component: CargaDocumentoFinalComponent, canActivate: [AuthGuardService], data: { role: 'Estudiante' } },
   {
      path: 'realizarInforme', component: ModificacionRevisorComponent, canActivate: [AuthGuardService], data: {
         role: 'Revisor'
      }
   },
   {
      path: 'informes', component: InformesComponent, canActivate: [AuthGuardService], data: {
         role: 'Revisor'
      }
   },
   {
      path: 'home',
      component: DashboardComponent,
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
