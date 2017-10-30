import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario'
import { GeneralService } from '../general.service'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;

  constructor(public fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private generalService: GeneralService
    , private appComponent: AppComponent) { }

  loginForm = this.fb.group({
    nombre: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  doLogin(event) {

    console.log(this.loginForm.value.email)
    this.usuarioService.crear(this.loginForm.value.nombre, this.loginForm.value.email, this.loginForm.value.password).then(data => {
      console.log(data)
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value.first);  // { first: '', last: '' }

    console.log(f.valid);  // false
  }

}

