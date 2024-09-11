import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PedidoComponent } from './creational/builder/pedido.component';
import { NotificacaoComponent } from './creational/factoryMethod/notificacao.component';
import { PrototipoComponent } from './creational/prototype/prototipo.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    NotificacaoComponent,
    PrototipoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PrototipoComponent],
})
export class AppModule {}
