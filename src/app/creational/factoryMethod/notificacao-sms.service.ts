import { Injectable } from '@angular/core';
import { Notificacao } from './notificacao';

// Serviço para envio de notificações por SMS
@Injectable({
  providedIn: 'root',
})
export class NotificacaoSmsService implements Notificacao {
  enviar(mensagem: string): void {
    console.log(`Enviando SMS com a mensagem: ${mensagem}`);
  }
}
