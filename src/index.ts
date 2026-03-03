import { RbacService } from './modules/organization/domain/services/rbac.service.js';
import { SYSTEM_ROLES, PERMISSIONS } from './modules/organization/domain/role-list.constants.js';
import { logger } from './modules/shared/infrastructure/logger.js';

async function testRBAC() {
  console.log("🛡️ PRUEBA DE JERARQUÍA RBAC - KYCLOPS\n");

  const rbac = new RbacService();
  const userRole = 'OWNER'; // Simulamos un usuario con rol OWNER

  // 1. Verificación de permiso DIRECTO
  const canDelete = rbac.hasPermission(userRole, PERMISSIONS.DELETE_ORG.id, SYSTEM_ROLES);
  
  // 2. Verificación de permiso HEREDADO (del nivel más bajo: SELLER)
  const canUpdateProfile = rbac.hasPermission(userRole, PERMISSIONS.UPDATE_PROFILE.id, SYSTEM_ROLES);

  console.log(`Rol Evaluado: ${userRole}`);
  console.log(`---------------------------`);
  console.log(`¿Puede eliminar la Org? (Directo): ${canDelete ? '✅ SÍ' : '❌ NO'}`);
  console.log(`¿Puede editar su perfil? (Heredado de SELLER): ${canUpdateProfile ? '✅ SÍ' : '❌ NO'}`);

  // 3. Listado total de autoridad
  const allPerms = rbac.getPermissionsForRole(userRole, SYSTEM_ROLES);
  console.log(`\nLista total de permisos para ${userRole}:`);
  console.log(allPerms.map(p => ` > ${p}`).join('\n'));
  logger.info("🛡️ PRUEBA DE JERARQUÍA RBAC - KYCLOPS");
}

testRBAC();