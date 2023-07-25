import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario/usuario.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private auth: HeroesService){}
  
  login(form:NgForm){
    if(form.invalid){
      return;
    }
    this.auth.login(this.usuario).subscribe({
      next(resp) {
        console.log(resp);
      },
      error(err) {
        console.log(err.error.error.message);
      },
    });
}
}
