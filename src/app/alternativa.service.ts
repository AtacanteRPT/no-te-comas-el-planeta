import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
import { Alternativa } from './alternativa'

@Injectable()
export class AlternativaService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers, withCredentials: true });

  alternativas: Alternativa[]
  Urlbase = 'http://oso.brazilsouth.cloudapp.azure.com:4000/'

  constructor(public http: Http) {

  }

  cargarAlternativas() {
    return Observable.timer(0, 3000)
      .flatMap(() => {
        console.log("cada 3 seg");
        return this.getAlterativas()
      });
  }

  getAlterativas() {

    return this.http.get(this.Urlbase + `alternativas` + '')
      .map((res: Response) => {
        this.alternativas = res.json()
        return res.json();
      });
  }

  getAlterativa(id: string) {
    return this.http.get(this.Urlbase + 'alternativas/' + id + '', this.options)

      .map((res: Response) => {
        console.log(res.json());
        return res.json() as Alternativa
      }

      );
  }

  adicionarReceta(nombre: string, ingredientes: string, preparacion: string, ususarioId: number) {
    return this.http
      .post(this.Urlbase + 'alternativas',
      JSON.stringify({ nombre: nombre, ingredientes: ingredientes, preparacion: preparacion, usuarioId: ususarioId }), this.options)
      .toPromise()
      .then((res: Response) => {
        console.log('ALTERNATIVA CREADA : ')
        console.log(res.json() as Alternativa);
        return res.json() as Alternativa;

      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('A ocurido un error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // cargaUsuarios() {
  //   return Observable.timer(0, 3000)
  //     .flatMap(() => {
  //       console.log("cada 3 seg");
  //       return this.getUsuarios()
  //     });
  // }

  // getUsuario(id: number) {
  //   return this.http.get(this.Urlbase + id)
  //     .map((res: Response) => res.json());
  // }

  // eliminar(id: number) {

  //   return this.http.delete(this.Urlbase + id)
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError)
  // }

  // crear(nombre: String, email: String, password: String) {
  //   return this.http
  //     .post(this.Urlbase + 'auth/registro', JSON.stringify({ nombre: nombre, email: email, password: password }), this.options)
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // login(username: String, password: String) {

  //   return this.http
  //     .post(this.Urlbase + 'auth/login',
  //     JSON.stringify({ username: username, password: password }), this.options)
  //     .toPromise()
  //     .then(res => res.json() as Usuario)
  //     .catch(this.handleError);
  // }

  // getUsuarios() {

  //   console.log('usuario service  ://  : localhost:3000');
  //   // return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  //   return this.http.get(this.Urlbase + `usuarios`)

  //     .map((res: Response) => res.json());
  // }

  // actualizar(usuario: Usuario) {
  //   const url = `${this.Urlbase}/${usuario.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(usuario))
  //     .toPromise()
  //     .then(() => usuario)
  //     .catch(this.handleError);
  // }

  // estaAuntetificado() {
  //   // return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  //   return this.http.get(this.Urlbase + `auth/isLoged`)
  //     .map((res: Response) =>
  //       res.json());
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('A ocurido un error', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}

