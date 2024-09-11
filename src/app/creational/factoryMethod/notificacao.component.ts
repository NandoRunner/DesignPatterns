import { Component } from '@angular/core';
import { NotificacaoFactory } from './notificacao.factory';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
})
export class NotificacaoComponent {
  constructor(private notificacaoFactory: NotificacaoFactory) {}

  enviarNotificacao(tipo: string, mensagem: string): void {
    const notificacao = this.notificacaoFactory.criarNotificacao(tipo);
    notificacao.enviar(mensagem);
  }
}
