import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-app-mapa',
  templateUrl: './app-mapa.component.html',
  styleUrls: ['./app-mapa.component.css']
})
export class AppMapaComponent implements OnInit {

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {

    this.generalService.cargarScript();

  }

}

