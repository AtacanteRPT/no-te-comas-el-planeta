import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCalculadoraComponent } from './app-calculadora/app-calculadora.component';
import { AppAcercaNosotrosComponent } from './app-acerca-nosotros/app-acerca-nosotros.component';
import { AppConocenosComponent } from './app-conocenos/app-conocenos.component';
import { AppContactanosComponent } from './app-contactanos/app-contactanos.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMapaComponent } from './app-mapa/app-mapa.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component'
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

import { CerdoComponent } from './cerdo/cerdo.component';
import { CorderoComponent } from './cordero/cordero.component';
import { PolloComponent } from './pollo/pollo.component';
import { ResComponent } from './res/res.component';
import { RecetaComponent } from './receta/receta.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioGuard } from './usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-nosotros', component: AppAcercaNosotrosComponent },
  { path: 'conocenos', component: AppConocenosComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'contactanos', component: AppContactanosComponent },
  { path: 'calculadora', component: AppCalculadoraComponent },
  { path: 'mapa-carne', component: AppMapaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pollo', component: PolloComponent },
  { path: 'cerdo', component: CerdoComponent },
  { path: 'res', component: ResComponent },
  { path: 'cordero', component: CorderoComponent },
  { path: 'receta/:id', component: RecetaComponent },
  {
    path: 'crear-receta', component: CrearRecetaComponent,
    canActivate: [UsuarioGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

