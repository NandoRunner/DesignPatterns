import { Pedido } from "./pedido";

// Interface para o Builder
export interface PedidoBuilder {
  adicionarBebida(): void;
  adicionarPratoPrincipal(): void;
  adicionarSobremesa(): void;
  obterPedido(): Pedido;
}

// Builder concreto para refeições vegetarianas
export class PedidoVegetarianoBuilder implements PedidoBuilder {
  private pedido: Pedido;

  constructor() {
    this.pedido = new Pedido();
  }

  adicionarBebida(): void {
    this.pedido.bebida = "Suco de laranja";
  }

  adicionarPratoPrincipal(): void {
    this.pedido.pratoPrincipal = "Salada de quinoa";
  }

  adicionarSobremesa(): void {
    this.pedido.sobremesa = "Frutas frescas";
  }

  obterPedido(): Pedido {
    return this.pedido;
  }
}

// Builder concreto para refeições não vegetarianas
export class PedidoNaoVegetarianoBuilder implements PedidoBuilder {
  private pedido: Pedido;

  constructor() {
    this.pedido = new Pedido();
  }

  adicionarBebida(): void {
    this.pedido.bebida = "Cerveja";
  }

  adicionarPratoPrincipal(): void {
    this.pedido.pratoPrincipal = "Filé de frango";
  }

  adicionarSobremesa(): void {
    this.pedido.sobremesa = "Bolo de chocolate";
  }

  obterPedido(): Pedido {
    return this.pedido;
  }
}
