import { Component } from '@angular/core';
import { DocumentoTexto } from './documento-texto';
import { DocumentoImagem } from './documento-imagem';

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
})
export class PrototipoComponent {
  constructor() {}

  clonarDocumentoTexto(): void {
    const docOriginal = new DocumentoTexto(
      'Contrato',
      'Este é um contrato padrão.'
    );
    console.log('Documento original:');
    docOriginal.mostrarDocumento();

    // Clonando o documento
    const docClonado = docOriginal.clonar();
    console.log('Documento clonado:');
    docClonado.mostrarDocumento();
  }

  clonarDocumentoImagem(): void {
    const docOriginal = new DocumentoImagem(
      'Relatório',
      'Dados de Relatório',
      'https://example.com/imagem.png'
    );
    console.log('Documento original:');
    docOriginal.mostrarDocumento();

    // Clonando o documento
    const docClonado = docOriginal.clonar();
    console.log('Documento clonado:');
    docClonado.mostrarDocumento();
  }
}
