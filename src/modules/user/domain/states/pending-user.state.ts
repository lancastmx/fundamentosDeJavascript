import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';
import { ActiveUserState } from './active-user.state.js';

export class PendingUserState implements UserState {
  getName(): string {
    return 'PENDING';
  }

  activate(user: User): void {
    console.log(`[Domain] Transicionando de PENDING a ACTIVE para: ${user.email}`);
    user.transitionTo(new ActiveUserState());
  }

  suspend(): void {
    throw new Error('No se puede suspender un usuario en estado PENDING');
  }
}