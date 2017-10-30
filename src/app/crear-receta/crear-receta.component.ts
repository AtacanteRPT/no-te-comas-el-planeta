import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario'
import { GeneralService } from '../general.service'
import { AlternativaService} from '../alternativa.service'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css']
})
export class CrearRecetaComponent implements OnInit {

  constructor(public fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private generalService: GeneralService
    ,  private alternativaService: AlternativaService) { }

  loginForm = this.fb.group({
    nombre: ["", Validators.required],
    ingredientes: ["", Validators.required],
    preparacion: ["", Validators.required]
  });
  ngOnInit() {
    this.generalService.cargarScript();
  }

  enviarReceta() {
    console.log(this.loginForm.value.nombre)
    let usuarioId = this.generalService.usuario.id;

    this.alternativaService.adicionarReceta(this.loginForm.value.nombre, this.loginForm.value.ingredientes, this.loginForm.value.preparacion, usuarioId).then(data => {

      this.router.navigate(['/']);
    });
  }

    onSubmit(f: NgForm) {
    console.log(f.value.first);  // { first: '', last: '' }

    console.log(f.valid);  // false
  }

}

