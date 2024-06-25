import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent {
  usuario: Usuario = new Usuario();
  id: number;

  constructor(private usuarioServicio: UsuarioService,
    private ruta: ActivatedRoute,
    private enrutador: Router){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.usuarioServicio.obtenerUsuarioPorId(this.id).subscribe(
      {
        next: (datos) => this.usuario = datos
        ,
        error: (errores: any) => console.log(errores)
      }
    );
  }  
  onSubmit(){
    this.guardarUsuario();
  }

  guardarUsuario(){
    this.usuarioServicio.editarUsuario(this.id, this.usuario).subscribe(
      {
        next: (datos) => this.irUsuarioLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irUsuarioLista(){
    this.enrutador.navigate(['/usuarios']);
  }
}
