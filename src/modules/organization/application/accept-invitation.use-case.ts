import { Membership } from '../domain/membership.entity.js';
import { Invitation } from '../domain/invitation.entity.js'; // Importamos tu entidad

export class AcceptInvitationUseCase {
  async execute(input: { invitationId: string; userId: string }) {
    console.log(`[UseCase] Intentando aceptar invitación: ${input.invitationId}`);

    // 1. SIMULACIÓN: Buscamos la invitación en la DB
    // (En el Sprint 4 usaremos un Repository real)
    const invitation = new Invitation(
      input.invitationId,
      'correo@ejemplo.com',
      'ORG_123',
      'SELLER',
      'OWNER_456'
      // Por defecto expiresAt es hoy + 7 días
    );

    try {
      // 2. LA MAGIA: Le pedimos a la entidad que se acepte a sí misma.
      // Aquí es donde se ejecutan TUS reglas: isExpired() y status !== 'PENDING'
      invitation.accept(); 

      console.log("✅ Reglas de negocio cumplidas. Creando membresía...");

      // 3. Crear la Membresía con los datos que traía la invitación
      const newMembership = new Membership(
        input.userId,
        invitation.organizationId,
        invitation.roleId
      );

      return {
        success: true,
        message: "¡Bienvenido a la organización!",
        membership: newMembership
      };

    } catch (error: any) {
      // 4. Si la entidad lanzó un error (ej: "La invitación ha expirado"), lo atrapamos aquí
      console.error(`❌ Error de validación: ${error.message}`);
      return {
        success: false,
        message: error.message // "La invitación ha expirado." o "La invitación ya no es válida."
      };
    }
  }
}