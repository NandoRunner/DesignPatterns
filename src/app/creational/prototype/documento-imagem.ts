import { Documento } from './documento';

// Produto Concreto: Documento de Imagem
export class DocumentoImagem extends Documento {
  imagemUrl: string;

  constructor(titulo: string, conteudo: string, imagemUrl: string) {
    super(titulo, conteudo);
    this.imagemUrl = imagemUrl;
  }

  // Implementação do método de clonagem
  clonar(): DocumentoImagem {
    return new DocumentoImagem(this.titulo, this.conteudo, this.imagemUrl);
  }

  mostrarDocumento(): void {
    super.mostrarDocumento();
    console.log(`Imagem URL: ${this.imagemUrl}`);
  }
}
