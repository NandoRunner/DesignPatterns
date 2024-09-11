import { Component } from "@angular/core";
import {
  PedidoVegetarianoBuilder,
  PedidoNaoVegetarianoBuilder,
} from "./pedido-builder";
import { Diretor } from "./diretor";
import { Pedido } from "./pedido";

@Component({
  selector: "app-pedido",
  templateUrl: "./pedido.component.html",
})
export class PedidoComponent {
  pedido: Pedido | undefined;

  constructor() {}

  criarPedidoVegetariano(): void {
    const builder = new PedidoVegetarianoBuilder();
    const diretor = new Diretor(builder);
    diretor.montarPedidoCompleto();
    this.pedido = builder.obterPedido();
    this.pedido.mostrarPedido();
  }

  criarPedidoNaoVegetariano(): void {
    const builder = new PedidoNaoVegetarianoBuilder();
    const diretor = new Diretor(builder);
    diretor.montarPedidoCompleto();
    this.pedido = builder.obterPedido();
    this.pedido.mostrarPedido();
  }
}
