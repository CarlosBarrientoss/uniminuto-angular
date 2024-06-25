import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase = "http://localhost:8080/controladorusuario/usuario";
  
  constructor(private clienteHttp: HttpClient) { }

  obtenerUsuarioLista(): Observable<Usuario[]>{
    return this.clienteHttp.get<Usuario[]>(this.urlBase)
  }

  agregarUsuario(usuario: Usuario): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, usuario);
  }
  obtenerUsuarioPorId(id: number){
    return this.clienteHttp.get<Usuario>(`${this.urlBase}/${id}`);
  }

  editarUsuario(id: number, usuario: Usuario): Observable<Object>{
    return this.clienteHttp.put(`${this.urlBase}/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
