import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionRevisorComponent } from './components/asignacion-revisor/asignacion-revisor.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CargaDocumentoFinalComponent } from './components/carga-documento-final/carga-documento-final.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FechaEntregaFinalComponent } from './components/fecha-entrega-final/fecha-entrega-final.component';
import { InformesComponent } from './components/informes/informes.component';
import { ModificacionRevisorComponent } from './components/modificacion-revisor/modificacion-tutor.component';
import { AuthGuardService } from './services/auth/auth-guard.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'fechaFinal', component: FechaEntregaFinalComponent, canActivate: [AuthGuardService], data: { role: 'Revisor' } },
    { path: 'revisor', component: AsignacionRevisorComponent, canActivate: [AuthGuardService], data: { role: 'Administrator' } },
    
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
    { path: 'home', component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: '**', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
