import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
}

refreshToken(){
  this.token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
}

getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogpessoalxl.herokuapp.com/postagens/listar',this.token);
}

getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoalxl.herokuapp.com/postagens/id/${id}`,this.token)
}

getByTituloPostagem(titulo: string): Observable<Postagem[]>{
   return this.http.get<Postagem[]>(`https://blogpessoalxl.herokuapp.com/postagens/titulo/${titulo}`,this.token)
}

postPostagens(postagem: Postagem): Observable<Postagem>{
  return this.http.post<Postagem>('https://blogpessoalxl.herokuapp.com/postagens/cadastrar',postagem,this.token);
}

putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalxl.herokuapp.com/postagens/atualizar',postagem,this.token)
}

deletePostagem(id: number){
    return this.http.delete(`https://blogpessoalxl.herokuapp.com/postagens/deletar/${id}`,this.token)
}


 

}
