import { User } from './modules/user/domain/user.entity.js';
import { Organization } from './modules/organization/domain/organization.entity.js';
import { Membership } from './modules/organization/domain/membership.entity.js';

async function bootstrap() {
  console.log("🚀 KYCLOPS CORE: VALIDACIÓN DOMINIO SPRINT 2\n");

  // 1. Instanciar y Activar Usuario
  // Probamos que el State Pattern funciona (PENDING -> ACTIVE)
  const user = new User("u-1", "admin@kyclops.com", "pass_hash");
  user.activate();

  // 2. Crear Organización con el Plan Básico (Límite de 15)
  const org = new Organization("o-1", "Kyclops Studio", user.id);
  
  // 3. Vincular con Membresía (RBAC inicial)
  const membership = new Membership(user.id, org.id, "OWNER");

  // 4. PRUEBA DE FUEGO: Validación del Límite de 15
  const invitacionesActuales = 0; // Simulamos que no hay nadie invitado
  const puedeInvitar = org.canInvite(invitacionesActuales);

  console.log(`[SYSTEM] Usuario: ${user.email} está ${user.getStateName()}`);
  console.log(`[SYSTEM] Org: ${org.name} | Plan: ${org.plan}`);
  console.log(`[SYSTEM] ¿Permite invitaciones? ${puedeInvitar ? "SÍ (Límite de 15)" : "NO"}`);
  
  console.log("\n✅ Dominio verificado. Estructura lista para Sprint 3.");
}

bootstrap().catch((err) => console.error("❌ Fallo en el Core:", err.message));