import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario/usuario.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel; 
  constructor(private auth: HeroesService) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
    this.usuario.email = 'emorocho11@utmachala.edu.ec';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.nuevoUsuario(this.usuario).subscribe({
      next(resp) {
        console.log(resp);
      },
      error(err) {
        console.log(err.error.error.message);
      },
    });
  }
}
