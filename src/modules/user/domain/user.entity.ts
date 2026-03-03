import type { UserState } from './user-state.interface.js';
import { PendingUserState } from './states/pending-user.state.js';
import type { UserProfile } from './user-profile.model.js'; // Importación del modelo de datos

export class User {
  private state: UserState; // El estado es privado para control centralizado
  private _lastEmailChangeAt?: Date; // Control de frecuencia para seguridad

  constructor(
    public readonly id: string,
    private _email: string,
    private _passwordHash: string,
    private _profile: UserProfile = {} // Inicialización del perfil dinámico
  ) {
    // Todo usuario nace en PENDING por seguridad
    this.state = new PendingUserState();
  }

  // Getters para proteger la integridad de los datos
  public get email(): string { return this._email; }
  
  public get profile(): UserProfile { 
    return { ...this._profile };
  }

  /**
   * REGLAS DE NEGOCIO (Domain Methods)
   */

  public activate(): void {
    this.state.activate(this);
  }

  public suspend(): void {
    this.state.suspend(this);
  }

  public changeEmail(newEmail: string): void {
    // Regla de Cooldown: Solo un cambio cada 24 horas
    if (this._lastEmailChangeAt) {
      const hoursSinceLastChange = (Date.now() - this._lastEmailChangeAt.getTime()) / (1000 * 60 * 60);
      if (hoursSinceLastChange < 24) {
        throw new Error("Restricción de seguridad: Solo puedes cambiar tu email una vez cada 24 horas.");
      }
    }

    // El estado actual decide si permite el cambio (ej. no se puede si está suspendido)
    this.state.changeEmail(this, newEmail);
    this._lastEmailChangeAt = new Date();
  }

  // Método para actualizar atributos del perfil sin tocar la lógica de cuenta
  public updateProfile(newAttributes: Partial<UserProfile>): void {
    this._profile = { ...this._profile, ...newAttributes };
  }

  /**
   * GESTIÓN DE ESTADO (Pattern Methods)
   */

  public transitionTo(newState: UserState): void {
    this.state = newState;
  }

  public getStateName(): string {
    return this.state.getName();
  }

  public updateEmailInternal(newEmail: string): void {
    this._email = newEmail;
  }
}