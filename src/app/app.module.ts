import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PedidoComponent } from './creational/builder/pedido.component';
import { NotificacaoComponent } from './creational/factoryMethod/notificacao.component';

@NgModule({
  declarations: [AppComponent, PedidoComponent, NotificacaoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NotificacaoComponent],
})
export class AppModule {}
