// Modelo do Pedido
export class Pedido {
  public bebida: string | undefined;
  public pratoPrincipal: string | undefined;
  public sobremesa: string | undefined;

  mostrarPedido(): void {
    console.log(`Bebida: ${this.bebida}`);
    console.log(`Prato Principal: ${this.pratoPrincipal}`);
    console.log(`Sobremesa: ${this.sobremesa}`);
  }
}
