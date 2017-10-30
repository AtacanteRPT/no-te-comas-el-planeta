import { Component, OnInit } from '@angular/core';
import { GeneralService} from './general.service';
import { Usuario } from './usuario';
import { Router } from "@angular/router";
import { AlternativaService } from "app/alternativa.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estaLogueado : boolean;
  usuario : Usuario;
  constructor(private generalService : GeneralService, private router: Router, private alternativaSerive:AlternativaService){}

  ngOnInit() {

    this.alternativaSerive.getAlterativas().subscribe(data =>{})
    this.generalService.cargarScript();
       this.generalService.estaAuntetificado().subscribe(data => {
      this.estaLogueado = data;
    });
    this.usuario = this.generalService.getUsuario();
    console.log('app.component *********************');
  }

  setUsuario(usuario : Usuario){
    this.usuario = usuario;
    console.log('cargando script');
    this.generalService.cargarScript();
  }

  usuarioLogueado(){
    this.generalService.estaAuntetificado().subscribe(data => {
      this.estaLogueado = data;
    });
  }

  cerrar(){
    console.log('cerrando Sesion');

    this.generalService.cerrar().subscribe(data =>{});
    this.estaLogueado= false;
    this.generalService.setEstaLogueado(false);
    this.router.navigate(['/']);
  }

}

