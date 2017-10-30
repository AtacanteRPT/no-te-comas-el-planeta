import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
const url = '../../assets/init.js';
import { Usuario } from './usuario';

@Injectable()
export class GeneralService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers, withCredentials: true });
  usuario: Usuario;
  Urlbase = 'http://oso.brazilsouth.cloudapp.azure.com:4000/';
  estaLogueado: boolean;
  redirectUrl: string;
  loadAPI: Promise<any>;
  constructor(private http: Http) {
    this.loadAPI = new Promise((resolve) => {
      this.cargarScript();
      this.estaAuntetificado().subscribe(data => {
        this.estaLogueado = data;
      });
    });

  }

  setEstaLogueado(estaLogueado: boolean) {
    this.estaLogueado = estaLogueado
  }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  estadoLogin(): boolean {
    this.estaAuntetificado().subscribe(data => {
      this.estaLogueado = data;
    });
    return this.estaLogueado
  }

  public cargarScript() {
    console.log('preparing to load...')

    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  estaAuntetificado() {
    // return this.http.get(`https://jsonplaceholder.typicode.com/users`)
    return this.http.get(this.Urlbase + `auth/isLoged`, this.options)
      .map((res: Response) => res.json()
      ).catch(this.handleError);
  }

  cerrar() {
    return this.http.get(this.Urlbase + `auth/cerrar`, this.options)
      .map((res: Response) => res.json()
      ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

