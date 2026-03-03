import { Permission } from './permission.entity.js';

export class Role {
  constructor(
    public readonly id: string,                 // ej: 'ADMIN'
    public readonly name: string,               // ej: 'Administrador'
    public readonly permissions: Permission[],   // Permisos propios del rol
    public readonly parentRoleId?: string       // ID del rol del que hereda
  ) {}

  /**
   * Verifica si este rol tiene un permiso específico (sin contar herencia aún)
   */
  public hasDirectPermission(permissionId: string): boolean {
    return this.permissions.some(p => p.id === permissionId);
  }
}