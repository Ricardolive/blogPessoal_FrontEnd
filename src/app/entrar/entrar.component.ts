import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { environment} from './../../environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  logar(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=> {
         this.userLogin = resp;

         environment.token = this.userLogin.token;             
         environment.nome = this.userLogin.nome;	
         environment.foto = this.userLogin.foto;	
         environment.id = this.userLogin.id;

         this.router.navigate(['/inicio']);
   }, erro => { 
    if(erro.status == 500){
      this.alertas.showAlertDanger('Usuário ou senha incorreto!')
    }
  })
}

}
