import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';
import { SuspendedUserState } from './suspended-user.state.js';

export class ActiveUserState implements UserState {
  getName(): string {
    return 'ACTIVE';
  }

  public activate(user: User): void {
    // Regla de Negocio: Evitar procesos redundantes
    console.warn(`[Domain] El usuario ${user.email} ya se encuentra en estado ACTIVE.`);
  }

  public suspend(user: User): void {
    // Lógica: Transicionamos al estado de suspensión
    user.transitionTo(new SuspendedUserState());
  }

  public changeEmail(user: User, newEmail: string): void {
    // Lógica: Un usuario activo puede cambiar su email (sujeto a los límites de la entidad)
    user.updateEmailInternal(newEmail);
    // Nota: Aquí se podría disparar un evento de "Email de Verificación" para el nuevo correo
  }
}