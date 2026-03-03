import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';
import { ActiveUserState } from './active-user.state.js';

export class PendingUserState implements UserState {
  getName(): string {
    return 'PENDING';
  }

  public activate(user: User): void {
    // Lógica: Un usuario PENDING puede pasar a ACTIVE
    user.transitionTo(new ActiveUserState());
  }

  public suspend(user: User): void {
    // Regla de Negocio: No se puede suspender a alguien que no ha sido activado
    throw new Error(`Operación inválida: No se puede suspender al usuario ${user.email} porque aún está en estado PENDING.`);
  }

  public changeEmail(user: User, newEmail: string): void {
    // Lógica: Permitimos el cambio para corregir errores antes de la activación
    user.updateEmailInternal(newEmail);
  }
}