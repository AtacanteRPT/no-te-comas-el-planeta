import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { GeneralService } from '../general.service'
import { Usuario } from '../usuario';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  estaLogueado: boolean = false;
  usuario: Usuario;
  constructor(private generalService: GeneralService) {

  }

  onNavigate(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://www.google.com", "_blank");
    }

    goFacebook(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://www.facebook.com/noTeComasElPlaneta/?ref=br_rs", "_blank");
    }

    goTwiter(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://twitter.com/noComasLplaneta", "_blank");
    }

  ngOnInit() {
    this.generalService.cargarScript();

    this.generalService.estaAuntetificado().subscribe(data => this.usuario = data)
    this.estaLogueado = this.generalService.estaLogueado;
    console.log('acerca de nosotros : ' + this.generalService.estaLogueado);
    console.log('acerca de nosotros : ' + this.estaLogueado);

  }

}

