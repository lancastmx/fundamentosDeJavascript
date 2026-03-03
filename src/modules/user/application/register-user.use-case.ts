import { User } from '../domain/user.entity.js';
import { Organization } from '../../organization/domain/organization.entity.js';
import { Membership } from '../../organization/domain/membership.entity.js';
import { EmailService } from '../infrastructure/services/email.service.js';

export class RegisterUserUseCase {
  private emailService = new EmailService();

  async execute(input: { email: string; passwordHash: string; orgName: string }) {
    console.log(`[UseCase] Registrando y preparando verificación para: ${input.email}`);

    // 1. Lógica de creación (Entidades de Dominio)
    const user = new User(crypto.randomUUID(), input.email, input.passwordHash);
    const org = new Organization(crypto.randomUUID(), input.orgName, user.id);
    const membership = new Membership(user.id, org.id, 'OWNER');

    // 2. Acción de Infraestructura: Enviar Verificación
    const verificationToken = crypto.randomUUID();
    
    // Corregido: Nombre del método (sendVerification) y argumentos (email, name, token)
    await this.emailService.sendVerification(
      user.email, 
      user.email, // Usamos el email como "nombre" temporalmente
      verificationToken
    );

    return { user, organization: org, membership };
  }
}