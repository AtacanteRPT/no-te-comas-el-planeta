import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.component.html',
  styleUrls: ['./pollo.component.css']
})
export class PolloComponent implements OnInit {


   constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();
  }


}

