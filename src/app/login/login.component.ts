import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario'
import { GeneralService } from '../general.service'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  mensajeError: boolean = false;
  cargando: boolean = false;

  constructor(public fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private generalService: GeneralService
    , private appComponent: AppComponent) { }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  doLogin(event) {
    this.router.navigate(['/crear-receta']);
    this.usuarioService.login(this.loginForm.value.email, this.loginForm.value.password).then(data => {
      this.usuario = data;
      this.generalService.setUsuario(this.usuario);
      this.usuario = this.generalService.getUsuario();

      this.appComponent.setUsuario(this.usuario)
      this.appComponent.usuarioLogueado();
      this.cargando = true;
      this.generalService.estaAuntetificado().subscribe(data => {
        if (data) {
          console.log('redirrecion a crear-receta');

          this.router.navigate(['/crear-receta']);
        } else {
          this.mensajeError = true;
        }

      })

    });

    console.log('despues de TODOOOOOOOOOOOOOOOOOOOoo');

  }

  goRegistro() {
    this.router.navigate(['/registro']);
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value.first);  // { first: '', last: '' }

    console.log(f.valid);  // false
  }

}

