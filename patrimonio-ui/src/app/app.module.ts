import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//para angular poder injetar a dependencia desse cara no nosso serviço item.service.ts
import { HttpClientModule } from '@angular/common/http';

//importa componentes do primeng
import { DataTableModule, ButtonModule, InputTextModule,
  InputMaskModule, CalendarModule } from 'primeng/primeng';

import { ItemService } from './item/item.service';
//importa os componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

@NgModule({
  declarations: [
    //declara os componentes importados
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //utilizado pelos componentes do primeng
    BrowserAnimationsModule,
    //para ter acesso aos recurosos de formulário do Angular
    FormsModule,
    //declara os componetes importados do primeng
    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule
  ],
  //aqui deve ser declarado o serviço para este ser provido, assim podemos usar o serviço
  // em qualquer lugar da aplicação
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
