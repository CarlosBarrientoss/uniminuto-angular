import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html'
})
export class AgregarUsuarioComponent {

  usuario: Usuario = new Usuario();

  constructor(private usuarioServicio: UsuarioService, private enrutador: Router){}

  onSubmit(){
    this.guardarUsuario();
  }

  guardarUsuario(){
    this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
      {
        next: (datos) => {
          this.irListaUsuario();
        },
        error: (error: any)=>{console.log(error)}
      }
    );
  }

  irListaUsuario(){
    this.enrutador.navigate(['/usuarios']);
  }

}
