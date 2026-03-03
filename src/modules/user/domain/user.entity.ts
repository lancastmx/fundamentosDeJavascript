import type { UserState } from './user-state.interface.js';
import { PendingUserState } from './states/pending-user.state.js';
import type { UserProfile } from './user-profile.model.js';

export class User {
  private state: UserState;
  private _lastEmailChangeAt?: Date;

  constructor(
    public readonly id: string,
    private _email: string,
    private _passwordHash: string,
    private _profile: UserProfile = {}
  ) {
    this.state = new PendingUserState();
  }

  // Getters públicos para que el Repository pueda leer los datos
  public get email(): string { return this._email; }
  
  public get passwordHash(): string { return this._passwordHash; }

  public get profile(): UserProfile { 
    return { ...this._profile };
  }

  /**
   * REGLAS DE NEGOCIO
   */
  public activate(): void { this.state.activate(this); }
  public suspend(): void { this.state.suspend(this); }

  public getStateName(): string {
    return this.state.getName();
  }

  public updateProfile(newAttributes: Partial<UserProfile>): void {
    this._profile = { ...this._profile, ...newAttributes };
  }
}