import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from './../item/item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  //declara uma instancia do serviço, aqui vai entrar novamente injeção de dependencia,
  //classe de servoço tem a anotation: @Injectable()
  constructor(private itemService: ItemService) { }

  //chama o metodo consultar.
  //ngOnInit matodo que é chamado quando o componente é inicializado, após a chamada do construtor 
  ngOnInit() {
    this.consultar();
  }

  //chama o metodo listar do serviço que retorna um objeto observable
  consultar() {
    //utilizo uma arow function para pegar os dados retornados do serviço e atribuir para o array 'itens'
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  //recebe o parametro passado pelo template desse componente
  adicionar(frm: FormControl) {
    //chama o metodo do serviço
    //.subscrible para esperar a resposta do post, e utilizando uma arow function
    //após cadastrar é preciso listar novamante, então chamo na sequencia o metodo consultar
    // frm.reset()- para limpar o formulario apos o cadastro
    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

}
