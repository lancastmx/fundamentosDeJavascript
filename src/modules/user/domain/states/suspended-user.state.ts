import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';
import { ActiveUserState } from './active-user.state.js';

export class SuspendedUserState implements UserState {
  getName(): string {
    return 'SUSPENDED';
  }

  public activate(user: User): void {
    // Lógica: Un usuario suspendido puede ser reactivado
    user.transitionTo(new ActiveUserState());
  }

  public suspend(user: User): void {
    throw new Error(`Operación inválida: El usuario ${user.email} ya está suspendido.`);
  }

  public changeEmail(user: User, _newEmail: string): void {
    // Regla de Seguridad: No se permiten cambios de datos en cuentas bloqueadas
    throw new Error(`Seguridad: No se puede cambiar el email de ${user.email} mientras la cuenta esté SUSPENDIDA.`);
  }
}