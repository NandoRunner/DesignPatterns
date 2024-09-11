import { DocumentoPrototipo } from './documento-prototipo';

// Classe base para um documento (abstrata)
export abstract class Documento implements DocumentoPrototipo {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  abstract clonar(): DocumentoPrototipo;

  mostrarDocumento(): void {
    console.log(`Documento: ${this.titulo}`);
    console.log(`Conteúdo: ${this.conteudo}`);
  }
}
