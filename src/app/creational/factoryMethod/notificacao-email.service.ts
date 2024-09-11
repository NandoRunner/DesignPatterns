import { Injectable } from '@angular/core';
import { Notificacao } from './notificacao';

// Serviço para envio de notificações por email
@Injectable({
  providedIn: 'root',
})
export class NotificacaoEmailService implements Notificacao {
  enviar(mensagem: string): void {
    console.log(`Enviando email com a mensagem: ${mensagem}`);
  }
}
