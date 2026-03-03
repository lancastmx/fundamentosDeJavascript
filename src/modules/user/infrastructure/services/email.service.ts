import { config } from '../../../../config.js';
import { verificationEmailTemplate } from './templates/verification.template.js';
import { invitationEmailTemplate } from './templates/invitation.template.js';
import { passwordResetTemplate } from './templates/password-reset.template.js';
import { passwordChangedTemplate } from './templates/password-changed.template.js';

export class EmailService {
  // Caso 1: Registro
  async sendVerification(email: string, name: string, token: string) {
    const url = `${config.server.baseUrl}/auth/verify?token=${token}`;
    const html = verificationEmailTemplate(name, url);
    return this.send(email, "Verifica tu cuenta - Kyclops", html);
  }

  // Caso 2: Invitación (Nuevo para el Sprint 3)
  async sendInvitation(email: string, orgName: string, inviterName: string, token: string) {
    const url = `${config.server.baseUrl}/auth/join?token=${token}`;
    const html = invitationEmailTemplate(orgName, inviterName, url);
    return this.send(email, `Invitación a ${orgName}`, html);
  }

  async sendPasswordReset(email: string, name: string, token: string) {
    const url = `${config.server.baseUrl}/auth/reset-password?token=${token}`;
    const html = passwordResetTemplate(name, url);
    return this.send(email, "Restablece tu contraseña - Kyclops", html);
  }

  async sendPasswordChangedAlert(email: string, name: string) {
    const date = new Date().toLocaleString();
    const html = passwordChangedTemplate(name, date);
    return this.send(email, "Alerta de seguridad: Contraseña cambiada", html);
  }
  // Método privado que de verdad conecta con el SMTP (STPM)
  private async send(to: string, subject: string, html: string) {
    console.log(`[SMTP] Enviando "${subject}" a ${to}...`);
    // Aquí iría el transporte real
    return true;
  }
}