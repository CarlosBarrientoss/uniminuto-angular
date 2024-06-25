import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent {
  usuarios: Usuario[];
  constructor(private usuarioServicio: UsuarioService, private enrutador: Router){}

  ngOnInit(): void {
    this.obtenerUsuarios();    
  }

  obtenerUsuarios(){
    this.usuarioServicio.obtenerUsuarioLista().subscribe(
      (
        datos => {
          this.usuarios = datos;
        }
      )
    );
  }
  editarUsuario(id: number){
    this.enrutador.navigate(['editar-usuario', id]);
  }
  eliminarUsuario(id: number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(
      {
        next: (datos) => this.obtenerUsuarios(),
        error: (errores) => console.log(errores)
      }
    );
  }
}
