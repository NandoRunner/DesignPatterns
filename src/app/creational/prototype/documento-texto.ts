import { Documento } from './documento';

// Produto Concreto: Documento de Texto
export class DocumentoTexto extends Documento {
  constructor(titulo: string, conteudo: string) {
    super(titulo, conteudo);
  }

  // Implementação do método de clonagem
  clonar(): DocumentoTexto {
    return new DocumentoTexto(this.titulo, this.conteudo);
  }
}
