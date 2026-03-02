import type { UserState } from './user-state.interface.js';
import { PendingUserState } from './states/pending-user.state.js';

export class User {
  private state: UserState;

  constructor(
    public readonly id: string,
    public readonly email: string,
    private _passwordHash: string
  ) {
    // Seguridad: Siempre empezamos en PENDING
    this.state = new PendingUserState();
  }

  public activate(): void {
    this.state.activate(this);
  }

  public transitionTo(newState: UserState): void {
    this.state = newState;
  }

  public getStateName(): string {
    return this.state.getName();
  }
}