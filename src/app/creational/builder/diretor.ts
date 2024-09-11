import { PedidoBuilder } from "./pedido-builder";

export class Diretor {
  private builder: PedidoBuilder;

  constructor(builder: PedidoBuilder) {
    this.builder = builder;
  }

  montarPedidoCompleto(): void {
    this.builder.adicionarBebida();
    this.builder.adicionarPratoPrincipal();
    this.builder.adicionarSobremesa();
  }
}
