export type InvitationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED';

export class Invitation {
  constructor(
    public readonly id: string,
    public readonly email: string,        // A quién invitamos
    public readonly organizationId: string,
    public readonly roleId: string,       // Qué rol tendrá al entrar
    public readonly inviterId: string,    // Quién lo invitó (el Owner/Admin)
    private _status: InvitationStatus = 'PENDING',
    public readonly expiresAt: Date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 días por defecto
  ) {}

  public get status(): InvitationStatus {
    return this._status;
  }

  /**
   * REGLAS DE NEGOCIO
   */
  public accept(): void {
  if (this.isExpired()) {
    this._status = 'EXPIRED'; // <--- Cambiamos el estado internamente
    throw new Error("EXPIRED_INVITATION"); // <--- Lanzamos un código de error claro
  }
  if (this._status !== 'PENDING') throw new Error("INVALID_INVITATION");
  this._status = 'ACCEPTED';
}

  public isExpired(): boolean {
    return new Date() > this.expiresAt;
  }
}