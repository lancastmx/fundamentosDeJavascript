import type { UserState } from '../user-state.interface.js';
import type { User } from '../user.entity.js';
import { SuspendedUserState } from './suspended-user.state.js';

export class ActiveUserState implements UserState {
  getName(): string {
    return 'ACTIVE';
  }

  public activate(user: User): void {
    console.warn(`[Domain] El usuario ${user.email} ya se encuentra en estado ACTIVE.`);
  }

  public suspend(user: User): void {
    user.transitionTo(new SuspendedUserState());
  }

  public changeEmail(user: User, newEmail: string): void {
    user.updateEmailInternal(newEmail);
  }
}