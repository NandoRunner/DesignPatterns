import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PedidoComponent } from './creational/builder/pedido.component';

@NgModule({
  declarations: [AppComponent, PedidoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [PedidoComponent],
})
export class AppModule {}
