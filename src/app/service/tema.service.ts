import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
}

refreshToken(){
  this.token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
}

getAllTema():Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalxl.herokuapp.com/temas/listar', this.token);
}

postTema(tema: Tema): Observable<Tema>{
     return this.http.post<Tema>('https://blogpessoalxl.herokuapp.com/temas/cadastrar', tema, this.token);
}

}