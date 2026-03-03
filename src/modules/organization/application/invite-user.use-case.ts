import { Invitation } from '../domain/invitation.entity.js';
import { RbacService } from '../domain/services/rbac.service.js';
import { SYSTEM_ROLES } from '../domain/role-list.constants.js';
import { EmailService } from '../../user/infrastructure/services/email.service.js';

export class InviteUserUseCase {
  private rbacService = new RbacService();
  private emailService = new EmailService();

  async execute(input: { 
    inviterRoleId: string; 
    email: string; 
    organization: any; // Aquí vendría la entidad Organization
    currentInviteCount: number;
    targetRoleId: string;
  }) {
    // 1. Validar Autoridad (RBAC)
    const canInvite = this.rbacService.hasPermission(input.inviterRoleId, 'user:invite', SYSTEM_ROLES);
    if (!canInvite) throw new Error("No tienes permisos para invitar usuarios.");

    // 2. Validar Límite de Organización (Negocio)
    if (!input.organization.canInvite(input.currentInviteCount)) {
      throw new Error(`Límite de invitaciones alcanzado para el plan ${input.organization.plan}.`);
    }

    // 3. Crear Entidad de Invitación
    const invitation = new Invitation(
      crypto.randomUUID(),
      input.email,
      input.organization.id,
      input.targetRoleId,
      'OWNER_ID_SIMULADO'
    );

    // 4. Enviar Email
    await this.emailService.sendInvitation(
      invitation.email,
      input.organization.name,
      "Administrador", // Nombre del invitador
      invitation.id    // El ID sirve como token temporal
    );

    return invitation;
  }
}