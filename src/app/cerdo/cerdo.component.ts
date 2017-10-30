import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-cerdo',
  templateUrl: './cerdo.component.html',
  styleUrls: ['./cerdo.component.css']
})
export class CerdoComponent implements OnInit {

  
   constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();
  }


}
