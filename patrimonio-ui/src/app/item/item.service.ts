import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//classe de serviço que cagama o back end, nosso serviço back end, a API Rest.
@Injectable()
export class ItemService {

  //URL do nosso recurso
  itensUrl = 'http://localhost:8080/itens';
  //injetando a dependencia de HttpClient para o angular instanciar ele para mim
  //como no Spring IOC, também precisa importar este no app.module.ts
  constructor(private http: HttpClient) { }

  //metodo para listar o retorno do back end, API Rest
  listar() {
    //o angular retorna um objeto do tipo observable, esse objeto
    //fica aguardando o retorno da chamada para nossa aplicação
    //não ficar esperando esse retorno, ou seja, deve ser uma chamada assincrona.
    //http.get<any[]>: significa que o metodo get pode retornar um array de qualquer coisa
    return this.http.get<any[]>(this.itensUrl);
  }

  //metodo para adicionar um item
  //item: any - item de qualquer tipo
  adicionar(item: any) {
    return this.http.post(this.itensUrl, item);
  }

}
