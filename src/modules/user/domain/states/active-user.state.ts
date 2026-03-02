import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';

export class ActiveUserState implements UserState {
  getName(): string {
    return 'ACTIVE';
  }

  activate(user: User): void {
    console.warn(`[Domain] El usuario ${user.email} ya está activo.`);
  }

  suspend(user: User): void {
    console.log(`[Domain] Suspendiendo usuario...`);
    // Aquí iría la lógica para pasar a SuspendedUserState
  }
}