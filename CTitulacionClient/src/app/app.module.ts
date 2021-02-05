import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectionToken, NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CarreraListaComponent } from './components/carrera-lista/carrera-lista.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarreraFormComponent } from './components/carrera-form/carrera-form.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { EstudianteCarreraComponent } from './components/estudiante-carrera/estudiante-carrera.component';
import { NavBarComponent } from './components/shared/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/shared/shared/side-bar/side-bar.component';
import { FechaEntregaFinalComponent } from './components/fecha-entrega-final/fecha-entrega-final.component';
import { CargaDocumentoFinalComponent } from './components/carga-documento-final/carga-documento-final.component';
import { ModificacionRevisorComponent } from './components/modificacion-revisor/modificacion-tutor.component';
import { InformesComponent } from './components/informes/informes.component';
import { AsignacionRevisorComponent } from './components/asignacion-revisor/asignacion-revisor.component';
import { InformeEstudianteComponent } from './components/informe-estudiante/informe-estudiante.component';
import { InformesAdminComponent } from './components/informes-admin/informes-admin.component';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { EstudiantesSolicitudComponent } from './components/estudiantes-solicitud/estudiantes-solicitud.component';
import { RubricaComponent } from './components/gestion-proyecto/rubrica/rubrica.component';
import { GuiasProyectoComponent } from './components/gestion-proyecto/guias-proyecto/guias-proyecto.component';
import { CronogramaComponent } from './components/gestion-proyecto/cronograma/cronograma.component';
import { ProrrogaComponent } from './components/prorroga/prorroga.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TemaAnteproyectoComponent } from './components/tema-anteproyecto/tema-anteproyecto.component';
import { AprobacionTemasAnteproyectoComponent } from './components/aprobacion-temas-anteproyecto/aprobacion-temas-anteproyecto.component';
import { AnteproyectoComponent } from './components/anteproyecto/anteproyecto.component';
import { AprobacionAnteproyectoComponent } from './components/aprobacion-anteproyecto/aprobacion-anteproyecto.component';
import { ProyectoTitulacionFormComponent } from './components/proyecto-titulacion-form/proyecto-titulacion-form.component';
import { ProyectoTitulacionListaComponent } from './components/proyecto-titulacion-lista/proyecto-titulacion-lista.component';
import { SolicitudProrrogaFormComponent } from './components/solicitud-prorroga-form/solicitud-prorroga-form.component';
import { SolicitudProrrogaListaComponent } from './components/solicitud-prorroga-lista/solicitud-prorroga-lista.component';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    CarreraListaComponent,
    CarreraFormComponent,
    ActualizarDatosComponent, FooterComponent,
    EstudianteCarreraComponent,
    DashboardComponent,
    SideBarComponent,
    FechaEntregaFinalComponent,
    CargaDocumentoFinalComponent,
    ModificacionRevisorComponent,
    InformesComponent,
    AsignacionRevisorComponent,
    InformeEstudianteComponent,
    InformesAdminComponent,
    EstudiantesSolicitudComponent,
    RubricaComponent,
    GuiasProyectoComponent,
    CronogramaComponent,
    ProrrogaComponent,
    TemaAnteproyectoComponent,
    AprobacionTemasAnteproyectoComponent,
    AnteproyectoComponent,
    AprobacionAnteproyectoComponent,
    ProyectoTitulacionFormComponent,
    ProyectoTitulacionListaComponent,
    SolicitudProrrogaFormComponent,
    SolicitudProrrogaListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
