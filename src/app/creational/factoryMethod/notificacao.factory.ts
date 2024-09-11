import { Injectable } from '@angular/core';
import { Notificacao } from './notificacao';
import { NotificacaoEmailService } from './notificacao-email.service';
import { NotificacaoSmsService } from './notificacao-sms.service';

// Factory Method para criar o tipo correto de notificação
@Injectable({
  providedIn: 'root',
})
export class NotificacaoFactory {
  constructor(
    private emailService: NotificacaoEmailService,
    private smsService: NotificacaoSmsService
  ) {}

  criarNotificacao(tipo: string): Notificacao {
    if (tipo === 'email') {
      return this.emailService;
    } else if (tipo === 'sms') {
      return this.smsService;
    } else {
      throw new Error('Tipo de notificação desconhecido.');
    }
  }
}
