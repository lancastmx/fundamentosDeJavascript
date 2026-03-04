# 🧩 Módulo: invite-user.use-case

> Documentación técnica generada para el archivo `src/modules/organization/application/invite-user.use-case.ts`.

## 📂 Dependencias (Wikipedia Links)

- [invitation.entity.js](./../domain/invitation.entity.js.md)
- [rbac.service.js](./../domain/services/rbac.service.js.md)
- [role-list.constants.js](./../domain/role-list.constants.js.md)
- [email.service.js](./../../user/infrastructure/services/email.service.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El Caso de Uso **Invitar Usuario (`InviteUserUseCase`)** controla la capacidad de expansión de un equipo corporativo bajo un modelo B2B estricto.

**Barreras de Seguridad y Negocio:**
- **Control RBAC:** Utiliza el `RbacService` para garantizar que el actor que invita posee explícitamente el permiso `'user:invite'`, abortando la operación de lo contrario.
- **Cuotas por Plan:** Consulta a la `Organization` para asegurar que el tier de facturación actual (ej. BASIC) permite agregar más miembros (`canInvite`).
- **Desencadenante de Infraestructura:** Si aprueba las barreras anteriores, instancia la invitación y confía en el `EmailService` para el envío del token al correo destino.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*