import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

   constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();
  }

}

