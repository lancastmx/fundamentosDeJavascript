import { Role } from '../role.entity.js';

export class RbacService {
  /**
   * Resuelve todos los permisos de un rol, incluyendo la herencia.
   * @param roleId El ID del rol a evaluar.
   * @param availableRoles La lista completa de roles definidos en el sistema.
   */
  public getPermissionsForRole(roleId: string, availableRoles: Role[]): string[] {
    const role = availableRoles.find(r => r.id === roleId);
    if (!role) return [];

    // 1. Obtenemos los permisos directos del rol
    let totalPermissions = role.permissions.map(p => p.id);

    // 2. Si tiene un padre, sumamos los permisos del padre recursivamente
    if (role.parentRoleId) {
      const parentPermissions = this.getPermissionsForRole(role.parentRoleId, availableRoles);
      // Usamos Set para evitar duplicados
      totalPermissions = [...new Set([...totalPermissions, ...parentPermissions])];
    }

    return totalPermissions;
  }

  /**
   * Verifica si un rol específico tiene un permiso determinado.
   */
  public hasPermission(roleId: string, permissionId: string, availableRoles: Role[]): boolean {
    const allPermissions = this.getPermissionsForRole(roleId, availableRoles);
    return allPermissions.includes(permissionId);
  }
}