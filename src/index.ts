import { User } from './modules/user/domain/user.entity.js';
import { Organization } from './modules/organization/domain/organization.entity.js';
import { Membership } from './modules/organization/domain/membership.entity.js';

async function bootstrap() {
  console.log("🚀 Validando Sprint 2: Core Domain & Multi-tenancy\n");

  // 1. Instanciar Usuario (Estado Inicial: PENDING)
  const user = new User("u-123", "lanca@kyclops.com", "hash_seguro_abc");
  console.log(`[User] Estado inicial: ${user.getStateName()}`);

  // 2. Activar Usuario mediante State Pattern
  user.activate();
  console.log(`[User] Estado actual: ${user.getStateName()}`);

  // 3. Crear Organización y Vincular Usuario
  const org = new Organization("o-456", "Kyclops Studio", user.id);
  const membership = new Membership(user.id, org.id, "ROLE_OWNER");

  console.log(`[Org] Organización creada: ${org.name}`);
  console.log(`[Membership] Usuario vinculado con rol: ${membership.roleId}`);
  
  console.log("\n✅ Sprint 2 validado con éxito.");
  console.log("Próximo paso: Implementar RBAC en el Sprint 3.");
}

bootstrap();